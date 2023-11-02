import { TwoColumnCard } from '@/components/Layouts/components/twoColumnCard';
import { DefaultLayout } from '@/components/Layouts/page/DefaultLayout';
import { Container } from '@/components/container';
import TextInput from '@/components/inputs/text-input';
import React, { useState } from 'react';

const MyProfile = () => {
  const [account, setAccount] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  function handleChange(v: string, id: string) {
    const user = { ...account, [id]: v };
    setAccount(user);
  }

  return (
    <DefaultLayout pageName="My Profile">
      <Container className="py-4">
        <div className="space-y-10 gap-y-1 divide-y divide-gray-900/10">
          <TwoColumnCard
            title="Profile"
            subTitle="Update Your personal account information"
          >
            <TextInput
              className="sm:col-span-3"
              label="First Name"
              id="firstName"
              value={account.firstName}
              onChange={handleChange}
            />
            <TextInput
              className="sm:col-span-3"
              label="Last Name"
              id="lastName"
              value={account.lastName}
              onChange={handleChange}
            />
            <TextInput
              className="col-span-6"
              label="Email Address"
              id="emailAddress"
              value={account.email}
              onChange={handleChange}
            />
          </TwoColumnCard>
          <TwoColumnCard title="Team" subTitle="Update Your Team">
            <div></div>
          </TwoColumnCard>
          <TwoColumnCard
            title="Billing Info"
            subTitle="Update Your billing information"
          >
            <div></div>
          </TwoColumnCard>
          <TwoColumnCard title="Delete Account" subTitle="Delete your account">
            <div style={{ height: '200vh' }}></div>
          </TwoColumnCard>
        </div>
      </Container>
    </DefaultLayout>
  );
};

MyProfile.auth = true;

export default MyProfile;
