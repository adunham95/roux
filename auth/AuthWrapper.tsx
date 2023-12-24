import { useSession } from '@/context/session';
import { useRouter } from 'next/router';
import React from 'react';

interface IProps {
  children: React.ReactNode;
}

const AuthWrapper = ({ children }: IProps) => {
  const { session } = useSession();
  const router = useRouter();
  console.log(session);
  if (!session) {
    typeof window !== 'undefined' ? router.push('/login') : null;
    return 'Loading....';
  }
  return <div>{children}</div>;
};

export default AuthWrapper;
