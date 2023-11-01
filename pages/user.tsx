import { useSession } from 'next-auth/react';
import React from 'react';

const User = () => {
  const { data: session, status, update } = useSession();
  console.log(session, status, update);
  return <div></div>;
};

User.auth = true;

export default User;
