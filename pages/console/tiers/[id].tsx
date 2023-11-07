import { TwoColumnCard } from '@/components/Layouts/components/twoColumnCard';
import { AdminLayout } from '@/components/Layouts/page/AdminLayout';
import { Button } from '@/components/buttons/button';
import IconButton from '@/components/buttons/iconButton';
import { ChipToggle } from '@/components/chipToggle/chipToggle';
import TextArea from '@/components/inputs/text-area';
import TextInput from '@/components/inputs/text-input';
import { Toggle } from '@/components/inputs/toggle';
import { useEditMembershipTier } from '@/stores/editMembershipTiers';

const permissionList = ['new-recipe', 'edit-recipe', 'admin-page'];

const TierID = () => {
  const {
    tierName,
    setValue,
    tierDescription,
    visible,
    default: defaultValue = false,
    monthlyCost,
    yearlyCost,
    permissions = [],
    features = [],
    maxTeamSize,
    maxRecipeCount,
    addPermission,
  } = useEditMembershipTier();

  return (
    <AdminLayout>
      <div className="space-y-10 gap-y-1 divide-y divide-gray-900/10 relative">
        <TwoColumnCard title="Details" subTitle="Add the details for the tier">
          <TextInput
            className="col-span-6"
            label="Name"
            id="tierName"
            value={tierName}
            onChange={setValue}
          />
          <TextArea
            className="col-span-6"
            label="Description"
            id="tierDescription"
            value={tierDescription}
            onChange={setValue}
          />
          <Toggle
            className="col-span-3 sm:col-span-2"
            label="Visible"
            id="visible"
            onChange={setValue}
            checked={visible || false}
          />
          <Toggle
            className="col-span-3  sm:col-span-2"
            label="Default"
            id="default"
            onChange={setValue}
            checked={defaultValue}
          />
          <TextInput
            className="col-span-3"
            label="Monthly Cost"
            id="monthlyCost"
            type="number"
            value={monthlyCost.toString()}
            onChange={(v, n) => setValue(parseInt(v), n)}
          />
          <TextInput
            className="col-span-3"
            label="Yearly Cost"
            id="yearlyCost"
            type="number"
            value={yearlyCost.toString()}
            onChange={(v, n) => setValue(parseInt(v), n)}
          />
        </TwoColumnCard>

        <TwoColumnCard
          title="Features"
          subTitle="Set the Features for this tier"
          className="pt-4"
        >
          <TextInput
            className="col-span-3"
            label="Max Team Size"
            id="maxTeamSize"
            type="number"
            value={maxTeamSize.toString()}
            onChange={(v, n) => setValue(parseInt(v), n)}
          />
          <TextInput
            className="col-span-3"
            label="Max Recipe Count"
            id="maxRecipeCount"
            type="number"
            value={maxRecipeCount.toString()}
            onChange={(v, n) => setValue(parseInt(v), n)}
          />
          {features?.map((feat, idx) => (
            <div key={`tier-feat-${idx}`}>{feat.title}</div>
          ))}
        </TwoColumnCard>
        <TwoColumnCard
          title="Permission List"
          subTitle="Set the permissions and levels"
          className="pt-4"
        >
          {permissions.map((perm, idx) => (
            <EditPermission
              key={`edit-permission-${idx}`}
              permission={perm}
              idx={idx}
            />
          ))}
          <Button onClick={addPermission} className="col-span-6">
            Add Permission
          </Button>
        </TwoColumnCard>
      </div>
    </AdminLayout>
  );
};

function EditPermission({
  idx,
  permission,
}: {
  idx: number;
  permission: IMembershipTierPermission;
}) {
  const { updateMembershipPermission } = useEditMembershipTier();

  const handleChecked = (checked: boolean, name: string) => {
    let newArray = [...permission.permissions];
    if (checked) {
      newArray.push(name);
    }
    if (!checked) {
      newArray = newArray.filter((p) => p !== name);
    }

    updateMembershipPermission(
      idx,
      { ...permission, permissions: newArray },
      'update',
    );
  };

  return (
    <div className="col-span-6 group" key={idx}>
      <TextInput
        className=""
        label="Permission name"
        id="permissionName"
        value={permission.name}
        onChange={(v) =>
          updateMembershipPermission(idx, { ...permission, name: v }, 'update')
        }
        labelHintSlot={
          <div className="flex justify-end text-gray-500">
            <IconButton
              title="Copy Items"
              onClick={() =>
                updateMembershipPermission(idx, permission, 'copy')
              }
              className=" bg-gray-400 p-2 text-white rounded-full hover:bg-gray-500  focus-visible:outline-gray-600 md:scale-0 group-hover:scale-100 transition-transform duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                />
              </svg>
            </IconButton>
            <IconButton
              title="Delete"
              onClick={() =>
                updateMembershipPermission(idx, permission, 'delete')
              }
              className="rounded-full bg-red-400 hover:bg-red-600 p-2 text-white focus-visible:outline-red-600 ml-1 md:scale-0 group-hover:scale-100  transition-transform  duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
        }
      />
      <div className="hide-scrollbars overflow-x-scroll pt-1">
        {permissionList.map((permItem) => (
          <ChipToggle
            key={`permission-item-${permItem}-${idx}`}
            id={`permission-item-${permItem}-${idx}`}
            label={permItem}
            onChange={(c) => handleChecked(c, permItem)}
            checked={permission.permissions.includes(permItem)}
          />
        ))}
      </div>
    </div>
  );
}

export default TierID;
