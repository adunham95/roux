import React from 'react';
import { DefaultLayout, IDefaultLayoutProps } from './DefaultLayout';
import { Container } from '../../container';

interface ISidecarLayoutProps extends IDefaultLayoutProps {
  sideCar?: React.ReactNode;
  sideCarStyle?: string;
}

const SidecarLayout = (props: ISidecarLayoutProps) => {
  return (
    <DefaultLayout {...props}>
      <Container className="md:flex justify-center">
        <div className="w-full">{props.children}</div>
        {props.sideCar && (
          <div className={props.sideCarStyle}>{props.sideCar}</div>
        )}
      </Container>
    </DefaultLayout>
  );
};

export default SidecarLayout;
