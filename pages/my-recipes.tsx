import { DefaultLayout } from '@/components/Layouts/page/DefaultLayout';
import { Container } from '@/components/container';
import React from 'react';

const MyRecipes = () => {
  return (
    <DefaultLayout pageName="Dashboard">
      <Container className="py-5">My Recipe</Container>
    </DefaultLayout>
  );
};

export default MyRecipes;
