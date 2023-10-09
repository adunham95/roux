import { AppHead } from '@/components/appHead';
import React from 'react';

interface IProps {
  pageName?: string;
  children: React.ReactNode;
  containerClassName?: string;
}

const NoHeaderLayout = (props: IProps) => {
  return (
    <>
      <AppHead pageName={props.pageName} />
      <main className={props.containerClassName}>{props.children}</main>
    </>
  );
};

export default NoHeaderLayout;
