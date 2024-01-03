import { getRecipe } from '@/api/queries/getRecipe';
import { DefaultLayout } from '@/components/Layouts/page/DefaultLayout';
import { Button } from '@/components/buttons/button';
import { IRecipe } from '@/types/recipe';
import React, { useState } from 'react';

const StepIndex = ({ recipe }: { recipe: IRecipe }) => {
  const [stepNum, setStepNum] = useState(0);
  console.log(recipe);

  function goToNextStep() {
    const nextStep = stepNum + 1;
    if (nextStep > recipe.instructions.length - 1) {
      setStepNum(recipe.instructions.length - 1);
    } else setStepNum(nextStep);
  }

  function getInstruction() {
    const instruction = recipe.instructions[stepNum];
    return instruction;
  }

  function getIngredients() {
    return recipe.ingredients.filter(
      (ing) => ing.instructionRefId === getInstruction()?.refId,
    );
  }

  return (
    <DefaultLayout
      crumbs={[
        { name: recipe.name, href: `/recipe/${recipe.id}` },
        { name: 'Cook', href: `/recipe/${recipe.id}/cook`, current: true },
      ]}
    >
      <div className=" py-4 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
          <div className="grid grid-cols-1 gap-4 lg:col-span-2">
            <section aria-labelledby="section-1-title">
              <div className="overflow-hidden rounded-lg bg-surface shadow">
                <div className="p-6">
                  <h2 className="text-xl pb-2" id="section-1-title">
                    Step {stepNum + 1}
                  </h2>
                  <div className="md:flex">
                    <div className="w-full aspect-square md:h-60 md:w-60 flex-none rounded-md object-cover object-center bg-gray-400 mr-2"></div>
                    <div>
                      <p>{getInstruction()?.description}</p>
                      <ul>
                        {/* {recipe.ingredients.filter(
                          (ing) => ing.instructionRefId === '123',
                        )} */}
                        {getIngredients().map((ing) => (
                          <li key={ing.refId}>
                            {ing.count}
                            {ing.type} {ing.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <section aria-labelledby="section-2-title">
              <h2 className="sr-only" id="section-2-title">
                Recipe Steps
              </h2>
              <div className=" rounded-lg bg-surface shadow">
                <div className="p-6">
                  <div>
                    <h2 className=" text-lg pb-1">{recipe.name}</h2>
                    <p className="pb-1">{recipe.description}</p>
                  </div>
                  <div className="overflow-hidden border-none rounded-full bg-surface-2">
                    <div
                      className="h-2 rounded-full bg-brand-variable"
                      style={{
                        width: `${
                          ((stepNum + 1) / recipe.instructions.length) * 100
                        }%`,
                      }}
                    />
                  </div>
                  <ul
                    role="list"
                    className="relative flex-auto divide-y divide-surface-3 py-2"
                  >
                    {recipe.instructions.map((instruction, index) => (
                      <li key={instruction.id}>
                        <button
                          onClick={() => setStepNum(index)}
                          className={`flex space-x-6 py-6 px-2 w-full rounded bg-opacity-50 p ${
                            index === stepNum
                              ? 'border-brand-variable bg-brand-variable'
                              : 'border-transparent'
                          }`}
                        >
                          {/* <img
                            // src={product.imageSrc}
                            // alt={product.imageAlt}
                            className="h-20 w-20 flex-none rounded-md object-cover object-center"
                          /> */}
                          <div className="h-20 w-20 flex-none rounded-md object-cover object-center bg-gray-400"></div>
                          <div className="flex flex-col justify-between space-y-4">
                            <div className="space-y-1 text-sm font-medium">
                              {/* <h3 className="text-surface-1">{product.name}</h3> */}
                              <p className="text-surface-2">
                                {instruction.description}
                              </p>
                            </div>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="sticky bottom-2 pt-2">
                    <Button className="w-full" size="lg" onClick={goToNextStep}>
                      Next Step
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getServerSideProps(context: any) {
  const id = context?.params?.id;
  const recipe = await getRecipe(id);

  if (!recipe) {
    return {
      notFound: true,
    };
  }

  return { props: { recipe } };
}

export default StepIndex;
