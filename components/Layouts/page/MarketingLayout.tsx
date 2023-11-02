import React from 'react';
import { AppHead } from '../../appHead';
import { MarketingNavBar } from '../../marketing/navBar';

interface IProps {
  pageName?: string;
  children: React.ReactNode;
  containerClassName?: string;
}

const MarketingLayout = (props: IProps) => {
  return (
    <>
      <AppHead pageName={props.pageName} />
      <MarketingNavBar />
      <main className={props.containerClassName}>{props.children}</main>
    </>
  );
};

export default MarketingLayout;
