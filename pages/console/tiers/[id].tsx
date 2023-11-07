import { TwoColumnCard } from '@/components/Layouts/components/twoColumnCard';
import { AdminLayout } from '@/components/Layouts/page/AdminLayout';
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
    defaultPermission,
    features = [],
    maxTeamSize,
    maxRecipeCount,
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
          <EditPermission
            permission={defaultPermission || { name: '', permissions: [] }}
          />
        </TwoColumnCard>
      </div>
    </AdminLayout>
  );
};

function EditPermission({
  permission,
}: {
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

    updateMembershipPermission({ ...permission, permissions: newArray });
  };

  return (
    <div className="col-span-6 group">
      <TextInput
        className=""
        label="Permission name"
        id="permissionName"
        value={permission.name}
        onChange={(v) => updateMembershipPermission({ ...permission, name: v })}
      />
      <div className="hide-scrollbars overflow-x-scroll pt-1">
        {permissionList.map((permItem) => (
          <ChipToggle
            key={`permission-item-${permItem}`}
            id={`permission-item-${permItem}`}
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
