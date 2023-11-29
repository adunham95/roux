import { TwoColumnCard } from '@/components/Layouts/components/twoColumnCard';
import { DefaultLayout } from '@/components/Layouts/page/DefaultLayout';
import { Button } from '@/components/buttons/button';
import { Container } from '@/components/container';
import { ColorInput } from '@/components/inputs/color-input';
import LabelBar from '@/components/inputs/labelBar';
import TextInput from '@/components/inputs/text-input';
import { getRGBFromString, shadeColor, useDarkText } from '@/utils/colors';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const MyProfile = () => {
  const [color, setColor] = useState('rgb(100, 157, 173)');
  const [accentColor, setAccentColor] = useState('rgb(218, 109, 94)');
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

  useEffect(() => {}, [color, accentColor]);

  const setStyle = () => {
    const { r, g, b } = getRGBFromString(color);
    const { r: r1, b: b1, g: g1 } = shadeColor(r, g, b, -40);
    const { r: aR, g: aG, b: aB } = getRGBFromString(accentColor);
    const { r: aR1, b: aB1, g: aG1 } = shadeColor(aR, aG, aB, -40);

    return {
      '--brand-primary': `${r} ${g} ${b}`,
      '--brand-primary-alt': `${r1} ${g1} ${b1}`,
      '--brand-primary-text': `${
        useDarkText(r, g, b) ? '0 0 0' : '255 255 255'
      }`,
      '--brand-accent': `${aR} ${aG} ${aB}`,
      '--brand-accent-alt': `${aR1} ${aG1} ${aB1}`,
      '--brand-accent-text': `${
        useDarkText(aR, aG, aB) ? '0 0 0' : '255 255 255'
      }`,
    };
  };

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
            <ColorInput
              label="Primary Brand Color"
              id="brand-primary"
              className="col-span-6 md:col-span-3"
              value={color}
              onChange={setColor}
            />
            <ColorInput
              label="Accent Brand Color"
              id="brand-accent"
              className="col-span-6 md:col-span-3"
              value={accentColor}
              onChange={setAccentColor}
            />
            <div
              style={setStyle() as React.CSSProperties}
              className="col-span-6  pt-1"
            >
              <LabelBar label="Color Viewer" />
              <div className="flex gap-2">
                <Button
                  onClick={() => null}
                  className="w-full  hover:cursor-not-allowed"
                  color="variable"
                >
                  Primary Color Button
                </Button>
                <Button
                  onClick={() => null}
                  className="w-full hover:cursor-not-allowed"
                  color="variable-accent"
                >
                  Accent Color Button
                </Button>
              </div>
            </div>
          </TwoColumnCard>
          <TwoColumnCard
            id="membership"
            title="Membership"
            subTitle="View Membership Destails"
            className="pt-5"
          >
            <h1>Membership Details</h1>
          </TwoColumnCard>
        </div>
      </Container>
    </DefaultLayout>
  );
};

MyProfile.auth = true;

export default MyProfile;
