import { TwoColumnCard } from '@/components/Layouts/components/twoColumnCard';
import { DefaultLayout } from '@/components/Layouts/page/DefaultLayout';
import { Container } from '@/components/container';
import TextInput from '@/components/inputs/text-input';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import {
  HexColorPicker,
  HexColorInput,
  RgbColorPicker,
  RgbStringColorPicker,
} from 'react-colorful';

const MyProfile = () => {
  const [color, setColor] = useState({ r: 0, g: 0, b: 0 });
  const { data } = useSession();
  const [account, setAccount] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    ...data?.user,
  });
  const [team, setTeam] = useState({ name: '' });

  function handleChange(v: string, id: string) {
    const user = { ...account, [id]: v };
    setAccount(user);
  }
  function handleTeamChange(v: string, id: string) {
    const newTeam = { ...team, [id]: v };
    setTeam(newTeam);
  }

  return (
    <DefaultLayout pageName="My Profile">
      <Container className="py-4">
        <div className="space-y-10 gap-y-1 divide-y divide-surface-1/10">
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
              id="email"
              value={account.email}
              onChange={handleChange}
            />
            <TextInput
              className="col-span-6"
              label="Update Password"
              id="password"
              value={account.password}
              onChange={handleChange}
            />
          </TwoColumnCard>
          <TwoColumnCard
            title="Team"
            subTitle="Update Your Team"
            className="pt-5"
          >
            <TextInput
              className="col-span-6"
              disabled
              label="Team Name"
              id="name"
              value={team.name}
              onChange={handleTeamChange}
            />
            <div className="col-span-6">
              <RgbColorPicker color={color} onChange={setColor} />
            </div>
          </TwoColumnCard>
        </div>
      </Container>
    </DefaultLayout>
  );
};

MyProfile.auth = true;

export default MyProfile;
