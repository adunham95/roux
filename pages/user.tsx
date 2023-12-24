import { useSession } from '@/context/session';
import React from 'react';

const User = () => {
  const { session } = useSession();
  console.log({ session });
  return <div></div>;
};

User.auth = true;

export default User;
