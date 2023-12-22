import React from 'react';

interface IProps {}

export const CardStack = (props: IProps) => {
  const {} = props;
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-r from-brand to-brand-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
      <div className="relative px-4 py-10 bg-surface shadow-lg sm:rounded-3xl sm:p-10" />
    </>
  );
};
