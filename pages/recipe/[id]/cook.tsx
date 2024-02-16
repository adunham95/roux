import { getRecipe } from '@/api/queries/getRecipe';
import { DefaultLayout } from '@/components/Layouts/page/DefaultLayout';
import Flyout from '@/components/flyout/flyout';
import { IRecipe } from '@/types/recipe';
import React, { useState } from 'react';
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/20/solid';
import { Container } from '@/components/container';
import { Button } from '@/components/buttons/button';
import Heading from '@/components/text/heading';
import { useRecipe } from '@/stores/recipeStore';
import { useRouter } from 'next/router';

const StepIndex = ({ recipe }: { recipe: IRecipe }) => {
  const [stepNum, setStepNum] = useState(0);
  const { setRecipe } = useRecipe();
  const router = useRouter();

  function createNewVersion() {
    setRecipe({
      ...recipe,
      name: `${recipe.name} (Taylor's version)`,
    });
    router.push('/recipe/new');
  }

  function goToNextStep() {
    const nextStep = stepNum + 1;
    if (nextStep > recipe.instructions.length - 1) {
      setStepNum(recipe.instructions.length);
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

  function getContent() {
    if (stepNum > recipe.instructions.length - 1) {
      return (
        <Container className="grid grid-cols-1 md:grid-cols-3 gap-3 py-5 ">
          <div className="col-span-2">
            <img
              alt="Finished dish"
              className="w-full h-full object-cover rounded-md"
              src="/images/cooking.jpg"
              style={{
                aspectRatio: '4/3',
                objectFit: 'cover',
              }}
            />
          </div>
          <div>
            <Heading
              variant="h2"
              className="mt-4 font-bold text-2xl tracking-tight sm:text-3xl"
            >
              {recipe.name}
            </Heading>
            <div className="flex mt-4">
              <Button size="lg" variant="outline" onClick={createNewVersion}>
                Make My Own Version
              </Button>
            </div>
            <div className="mt-10 border-t border-gray-200 pt-10">
              <Heading>Share</Heading>
              <ul role="list" className="mt-4 flex items-center space-x-6">
                <li>
                  <a
                    href="#"
                    className="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Share on Facebook</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Share on Instagram</span>
                    <svg
                      className="h-6 w-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Share on X</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      );
    }
    return (
      <>
        <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-3 lg:gap-8">
          <div className="grid grid-cols-1 gap-4 md:col-span-2">
            <section aria-labelledby="section-1-title">
              <div className="overflow-hidden rounded-lg bg-surface shadow">
                <div className="p-6">
                  <h2 className="text-xl pb-2" id="section-1-title">
                    Step {stepNum + 1}
                  </h2>
                  <div className="md:flex">
                    <div className="w-full aspect-sq)uare md:h-60 md:w-60 flex-none rounded-md object-cover object-center bg-gray-400 mr-2"></div>
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
      </>
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
                    className={`flex space-x-6 py-6 px-2 w-full rounded bg-opacity-50 ${
                      index === stepNum
                        ? 'border-brand-variable bg-brand-variable hover:bg-brand-variable-alt'
                        : 'border-transparent hover:bg-surface-2 '
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
                        <p className="text-tc-2">{instruction.description}</p>
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
      <nav className="bg-surface pb-2  border-t border-surface-2 px-4 sm:px-2">
        <Container className="flex items-center justify-between">
          <div className="-mt-px flex w-0 flex-1">
            <button
              onClick={goToPrevStep}
              className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-tc-2 hover:border-surface-3 hover:text-tc-3 rounded-b"
            >
              <ArrowLongLeftIcon
                className="mr-3 h-5 w-5 text-tc-2"
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
                    : 'border-transparent text-tc-2 hover:text-tc-3 hover:border-surface-3'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="-mt-px flex w-0 flex-1 justify-end">
            <button
              onClick={goToNextStep}
              className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-tc-2 hover:border-surface-3 hover:text-tc-3 rounded-b"
            >
              Next
              <ArrowLongRightIcon
                className="ml-3 h-5 w-5 text-tc-2"
                aria-hidden="true"
              />
            </button>
          </div>
        </Container>
      </nav>
      <div className="py-4 px-4 sm:px-6 lg:px-8">
        <Container>{getContent()}</Container>
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
