import TextArea from '../inputs/text-area';
import { NewIngredientItem } from './newIngredientItem';
import { useState } from 'react';
import { IIngredientItem } from '@/types/ingredinetItem';
import { Button } from '../buttons/button';

export function NewInstructionItem({
  instruction,
  ingredients,
  onChange,
  onDelete,
  onCopy,
  onIngredientChange,
  onIngredientDelete = () => null,
  addIngredientItem,
}: {
  instruction: IInstructionItem;
  ingredients: IIngredientItem[];
  onChange: (id: string, value: string | number, key: string) => void;
  onDelete?: (id: string) => void;
  onCopy?: (id: string) => void;
  onIngredientChange: (id: string, value: string | number, key: string) => void;
  onIngredientDelete?: (id: string) => void;
  addIngredientItem: () => void;
}) {
  const [ingredientIndex, setIngredientIndex] = useState<string | null>(null);

  const activeIngredient = ingredients.find(
    (ing) => ing.refId === ingredientIndex,
  );

  console.log(activeIngredient, ingredients);

  return (
    <div
      className="col-span-full relative group"
      data-instruction-id={instruction.refId}
    >
      <div className="grid grid-cols-6 gap-2">
        <div className="col-span-1 aspect-square rounded-md object-cover object-center bg-gray-400"></div>

        <div className="col-span-5 flex flex-1 flex-col justify-between">
          <div className="relative">
            <div className="">
              <TextArea
                label={`Instruction ${instruction.order + 1}`}
                id={`${instruction.refId}-description`}
                value={instruction.description}
                placeholder="Cut the carrots, ..."
                onChange={(v) => onChange(instruction.refId, v, 'description')}
              />
              <div className="mt-1 flex text-sm overflow-x-scroll hide-scrollbars">
                <Button
                  variant="text"
                  className=" border-surface-2 rounded-none p-0 whitespace-nowrap"
                  onClick={addIngredientItem}
                >
                  Add Ingredient
                </Button>
                {ingredients.map((ing) => (
                  <div
                    key={ing.refId}
                    className={`text-tc-2 hover:text-tc-3 ml-4 border-l border-surface-2 flex items-center pl-4 rounded-none `}
                  >
                    <Button
                      variant="text"
                      className="p-0 text-inherit whitespace-nowrap"
                      onClick={() =>
                        setIngredientIndex(
                          ingredientIndex === ing.refId ? null : ing.refId,
                        )
                      }
                    >
                      {ing.name}
                    </Button>
                    <button
                      onClick={() => onIngredientDelete(ing.refId)}
                      className="md:scale-0 group-hover:scale-100 transition-transform duration-300 hover:text-error"
                    >
                      <svg
                        className="h-5 w-5 md:h-0 md:w-0 group-hover:h-5 group-hover:w-5 "
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
              {activeIngredient && (
                <NewIngredientItem
                  ingredient={activeIngredient}
                  onChange={(ingredientID, value, key) =>
                    onIngredientChange(ingredientID, value, key)
                  }
                />
              )}
            </div>
          </div>
        </div>

        <div className=" absolute top-0 right-0">
          <div className="flex flex-col w-full items-center justify-start">
            {onDelete && (
              <button
                type="button"
                onClick={() => onDelete(instruction.refId)}
                className="-m-2 inline-flex p-2 text-gray-400 hover:text-red-500 md:scale-0 group-hover:scale-100 transition-transform duration-300"
              >
                <span className="sr-only">Remove</span>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
                </svg>
              </button>
            )}
            {onCopy && (
              <button
                type="button"
                onClick={() => onCopy(instruction.refId)}
                className="-m-2 inline-flex p-2 text-tc-2 hover:text-tc-3 md:scale-0 group-hover:scale-100 transition-transform duration-300"
              >
                <span className="sr-only">Copy</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
