import { getRecipe } from '@/api/queries/getRecipe';
import { DefaultLayout } from '@/components/Layouts/page/DefaultLayout';
import Flyout from '@/components/flyout/flyout';
import { IRecipe } from '@/types/recipe';
import React, { useState } from 'react';
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/20/solid';

const StepIndex = ({ recipe }: { recipe: IRecipe }) => {
  const [stepNum, setStepNum] = useState(0);
  console.log(recipe);

  function goToNextStep() {
    const nextStep = stepNum + 1;
    if (nextStep > recipe.instructions.length - 1) {
      setStepNum(recipe.instructions.length - 1);
    } else setStepNum(nextStep);
  }

  function goToPrevStep() {
    const nextStep = stepNum - 1;
    if (nextStep <= 0) {
      setStepNum(0);
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
      removeFootingMargin
      crumbs={[
        { name: recipe.name, href: `/recipe/${recipe.id}` },
        { name: 'Cook', href: `/recipe/${recipe.id}/cook`, current: true },
      ]}
      crumbsSlot={
        <Flyout title="All Instructions">
          <>
            <div className="mt-2 overflow-hidden border-none rounded-full bg-surface-2">
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
          </>
        </Flyout>
      }
    >
      <nav className="bg-surface pb-2 flex items-center justify-between border-t border-surface-2 px-4 sm:px-2">
        <div className="-mt-px flex w-0 flex-1">
          <button
            onClick={goToPrevStep}
            className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-surface-2 hover:border-surface-3 hover:text-surface-3 rounded-b"
          >
            <ArrowLongLeftIcon
              className="mr-3 h-5 w-5 text-surface-2"
              aria-hidden="true"
            />
            Previous
          </button>
        </div>
        <div className="hidden md:-mt-px md:flex">
          {recipe.instructions.map((inst, index) => (
            <button
              key={`goto-${index}`}
              onClick={() => setStepNum(index)}
              className={`inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium  ${
                index === stepNum
                  ? 'border-brand-variable text-brand-variable'
                  : 'border-transparent text-surface-2 hover:text-surface-3 hover:border-surface-3'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className="-mt-px flex w-0 flex-1 justify-end">
          <button
            onClick={goToNextStep}
            className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-surface-2 hover:border-surface-3 hover:text-surface-3 rounded-b"
          >
            Next
            <ArrowLongRightIcon
              className="ml-3 h-5 w-5 text-surface-2"
              aria-hidden="true"
            />
          </button>
        </div>
      </nav>
      <div className="py-4 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-3 lg:gap-8">
          <div className="grid grid-cols-1 gap-4 md:col-span-2">
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
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="grid grid-cols-1 ">
            <div className="rounded-lg bg-surface shadow py-4 px-4">
              <div className="text-lg font-semibold leading-6 text-gray-400">
                Ingredients
              </div>
              <ul role="list" className="mt-2 space-y-1">
                {getIngredients().map((item) => (
                  <li key={item.name}>
                    <div
                      className={
                        'text-brand-variable group flex gap-x-3 rounded-md  text-sm leading-6 font-semibold'
                      }
                    >
                      <span
                        className={
                          'text-brand-variable border-brand-variable flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-surface'
                        }
                      >
                        {item.name[0]}
                      </span>
                      <span>
                        <span className="pr-1">
                          {item.count}
                          {item.type}
                        </span>
                        {item.name}
                      </span>
                    </div>
                  </li>
                ))}
                {getIngredients().length <= 0 && (
                  <li className="text-sm leading-6">
                    No Ingredients with this instruction
                  </li>
                )}
              </ul>
            </div>
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
