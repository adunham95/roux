import { useUpdateUser } from '@/api/mutation/updateUser';
import { TwoColumnCard } from '@/components/Layouts/components/twoColumnCard';
import { DefaultLayout } from '@/components/Layouts/page/DefaultLayout';
import { Container } from '@/components/container';
import TextInput from '@/components/inputs/text-input';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const MyProfile = () => {
  const { data, update } = useSession();
  const { mutateAsync: updateUser } = useUpdateUser();
  const [account, setAccount] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    setAccount({ ...account, ...data?.user });
  }, [data]);

  function handleChange(v: string, id: string) {
    const user = { ...account, [id]: v };
    setAccount(user);
  }

  function handleUpdateUser() {
    updateUser(
      {
        input: {
          userID: data?.user.id || '',
          email: account.email,
          firstName: account.firstName,
          lastName: account.lastName,
          password: account.password,
        },
      },
      {
        onSuccess(data: { updateUser: IBaseUser }) {
          console.log(data.updateUser);
          update(data.updateUser);
        },
      },
    );
  }

  return (
    <DefaultLayout pageName="My Profile">
      <Container className="py-4">
        <div className="space-y-10 gap-y-1 divide-y divide-surface-1/10">
          <TwoColumnCard
            title="Profile"
            subTitle="Update Your personal account information"
            onSubmit={handleUpdateUser}
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
        </div>
      </Container>
    </DefaultLayout>
  );
};

MyProfile.auth = true;

export default MyProfile;
