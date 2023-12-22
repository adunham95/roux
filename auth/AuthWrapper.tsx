import { useViewer } from '@/api/queries/getViewer';
import React from 'react';

interface IProps {
  children: React.ReactNode;
}

const AuthWrapper = ({ children }: IProps) => {
  const { data } = useViewer();
  console.log(data);
  return <div>{children}</div>;
};

export default AuthWrapper;
