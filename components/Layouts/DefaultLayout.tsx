import React from 'react';
import { AppHead } from '../appHead';
import NavBar from '../navbar';

interface IProps {
  pageName?: string;
  children: React.ReactNode;
  hideNav?: boolean;
}

export const DefaultLayout = (props: IProps) => {
  return (
    <div>
      <AppHead pageName={props.pageName} />
      {!props.hideNav && <NavBar />}
      <main>{props.children}</main>
    </div>
  );
};
