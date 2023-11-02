import { useSession } from 'next-auth/react';
import React from 'react';

const User = () => {
  const { data: session, status } = useSession();
  console.log({ session, status });
  return <div></div>;
};

User.auth = true;

export default User;
