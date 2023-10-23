import SidecarLayout from '@/components/Layouts/SidecarLayout';
import Sidecar from '@/components/sidecar/sidecar';
import dynamic from 'next/dynamic';
import React from 'react';

const RecipeForm = dynamic(
  () => import('@/components/newRecipe/newRecipeForm'),
  { ssr: false },
);

const NewRecipe = () => {
  // function updateInstruction(item: IInstructionItem) {
  //   const ing = [...instructions];
  //   const found = ing.findIndex(({ id }) => id === item.id);
  //   if (found >= 0) {
  //     ing[found] = item;
  //     setInstructions(ing);
  //   }
  // }

  // function copyInstruction(id: string) {
  //   const index = instructions.findIndex((ing) => ing.id === id);
  //   if (index >= 0) {
  //     setInstructions([
  //       ...instructions,
  //       { ...instructions[index], id: generateID() },
  //     ]);
  //   }
  // }

  // function deleteInstruction(id: string) {
  //   setInstructions([...instructions.filter((ing) => ing.id !== id)]);
  // }

  return (
    <SidecarLayout
      sideCar={<Sidecar />}
      sideCarStyle="w-full md:ml-4 md:max-w-sm"
      heroImg="/images/foods.jpg"
      heroTitle="New Recipe"
    >
      <RecipeForm />
    </SidecarLayout>
  );
};

export default NewRecipe;
