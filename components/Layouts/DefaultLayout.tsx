import React from 'react';
import { AppHead } from '../appHead';
import NavBar from '../navbar';

interface IProps {
  pageName?: string;
  children: React.ReactNode;
}

export const DefaultLayout = (props: IProps) => {
  return (
    <div>
      <AppHead pageName={props.pageName} />
      <NavBar />
      <main>{props.children}</main>
    </div>
  );
};
