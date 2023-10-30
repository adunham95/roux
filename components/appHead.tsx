import { GLOBALS } from '@/utils/constants';
import Head from 'next/head';
import React from 'react';

interface IProps {
  pageName?: string;
}

export const AppHead = (props: IProps) => {
  const { pageName = '' } = props;
  return (
    <Head>
      <title>
        {pageName
          ? `${GLOBALS.appName} | ${pageName}`
          : `${GLOBALS.appName} | Recipe Remix`}
      </title>
    </Head>
  );
};
