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
        {GLOBALS.appName} | {pageName ? pageName : 'Recipe Remix'}
      </title>
    </Head>
  );
};
