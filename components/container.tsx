import React from 'react';

interface IProps {
  children: React.ReactNode;
}

export const Container = (props: IProps) => {
  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {props.children}
    </div>
  );
};
