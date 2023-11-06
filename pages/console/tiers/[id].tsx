import { TwoColumnCard } from '@/components/Layouts/components/twoColumnCard';
import { AdminLayout } from '@/components/Layouts/page/AdminLayout';
import { ChipToggle } from '@/components/chipToggle/chipToggle';
import TextArea from '@/components/inputs/text-area';
import TextInput from '@/components/inputs/text-input';
import { Toggle } from '@/components/inputs/toggle';
import React, { useState } from 'react';

const defaultTier = {
  id: '0',
  default: false,
  maxRecipeCount: 1,
  maxTeamSize: 1,
  monthlyCost: 0,
  permissions: [],
  tierName: '',
  tierDescription: '',
  visible: true,
  yearlyCost: 0,
  features: [],
};

const permissionList = ['new-recipe', 'edit-recipe', 'admin-page'];

const TierID = () => {
  const [tierData, setTierData] = useState<IMembershipTier>(defaultTier);

  function handleChange(value: string | boolean | number, key: string) {
    setTierData({ ...tierData, [key]: value });
  }

  return (
    <AdminLayout>
      <div className="space-y-10 gap-y-1 divide-y divide-gray-900/10 relative">
        <TwoColumnCard title="Details" subTitle="Add the details for the tier">
          <TextInput
            className="col-span-6"
            label="Name"
            id="tierName"
            value={tierData.tierName}
            onChange={handleChange}
          />
          <TextArea
            className="col-span-6"
            label="Description"
            id="tierDescription"
            value={tierData.tierDescription}
            onChange={handleChange}
          />
          <Toggle
            className="col-span-3 sm:col-span-2"
            label="Visible"
            id="visible"
            onChange={handleChange}
            checked={tierData.visible || false}
          />
          <Toggle
            className="col-span-3  sm:col-span-2"
            label="Default"
            id="default"
            onChange={handleChange}
            checked={tierData.default || false}
          />
          <TextInput
            className="col-span-3"
            label="Monthly Cost"
            id="monthlyCost"
            type="number"
            value={tierData.monthlyCost.toString()}
            onChange={(v, n) => handleChange(parseInt(v), n)}
          />
          <TextInput
            className="col-span-3"
            label="Yearly Cost"
            id="yearlyCost"
            type="number"
            value={tierData.yearlyCost.toString()}
            onChange={(v, n) => handleChange(parseInt(v), n)}
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
            value={tierData.maxTeamSize.toString()}
            onChange={(v, n) => handleChange(parseInt(v), n)}
          />
          <TextInput
            className="col-span-3"
            label="Max Recipe Count"
            id="maxRecipeCount"
            type="number"
            value={tierData.maxRecipeCount.toString()}
            onChange={(v, n) => handleChange(parseInt(v), n)}
          />
          {tierData?.features?.map((feat, idx) => (
            <div key={`tier-feat-${idx}`}>{feat.title}</div>
          ))}
        </TwoColumnCard>
        <TwoColumnCard
          title="Permission List"
          subTitle="Set the permissions and levels"
          className="pt-4"
        >
          <div className="col-span-6">
            <TextInput
              className=""
              label="Permission name"
              id="permissionName"
              value={''}
              onChange={(v, n) => null}
            />
            <div className="hide-scrollbars overflow-x-scroll pt-1">
              {permissionList.map((perm) => (
                <ChipToggle key={perm} id={perm} label={perm} checked={false} />
              ))}
              <ChipToggle id="1" label="1" checked />
            </div>
          </div>
        </TwoColumnCard>
      </div>
    </AdminLayout>
  );
};

export default TierID;
