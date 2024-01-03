import TextArea from '../inputs/text-area';
import IconButton from '../buttons/iconButton';
import { NewIngredientItem } from './newIngredientItem';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Popover } from 'react-tiny-popover';
import { IIngredientItem } from '@/types/ingredinetItem';

export function NewInstructionItem({
  instruction,
  ingredients,
  onChange,
  onDelete,
  onCopy,
  onIngredientChange,
  onIngredientDelete,
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
  const [ingredientIndex, setIngredientIndex] = useState<number | null>(null);

  return (
    <div
      className="col-span-full  group"
      data-instruction-id={instruction.refId}
    >
      <TextArea
        label={`Instruction ${instruction.order + 1}`}
        id={`${instruction.refId}-description`}
        value={instruction.description}
        placeholder="Cut the carrots, ..."
        onChange={(v) => onChange(instruction.refId, v, 'description')}
        labelHintSlot={
          <div className="flex justify-end text-surface-3">
            {onCopy && (
              <IconButton
                title="Copy Items"
                onClick={() => onCopy(instruction.refId)}
                className=" bg-surface-3 p-2 text-white rounded-full hover:bg-surface-2  focus-visible:outline-surface-2 md:scale-0 group-hover:scale-100 transition-transform duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                  />
                </svg>
              </IconButton>
            )}
            {onDelete && (
              <IconButton
                title="Delete"
                onClick={() => onDelete(instruction.refId)}
                className="rounded-full bg-red-400 hover:bg-red-600 p-2 text-white focus-visible:outline-red-600 ml-1 md:scale-0 group-hover:scale-100  transition-transform  duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
            )}
          </div>
        }
      />
      <div className="py-2 relative">
        {ingredients.map((ing, i) => (
          <IngredientButton
            label={ing.name.slice(0, 1) || `${i}`}
            key={ing.refId}
            onClick={() => setIngredientIndex(i)}
            content={<div>{ing.name}</div>}
            isActive={ingredientIndex === i}
          />
        ))}
        <IconButton
          onClick={() => {
            addIngredientItem();
            setIngredientIndex(ingredients.length - 1);
          }}
          title="Plus"
          className={
            'rounded-full p-2 w-[2.5em] h-[2.5em] justify-center inline-flex items-center'
          }
        >
          <span>+</span>
        </IconButton>
      </div>
      <div>
        {ingredients[ingredientIndex || 0] && (
          <NewIngredientItem
            ingredient={ingredients[ingredientIndex || 0]}
            index={ingredientIndex || 0}
            onChange={(ingredientID, value, key) =>
              onIngredientChange(ingredientID, value, key)
            }
            onDelete={onIngredientDelete}
          />
        )}
      </div>
    </div>
  );
}

function IngredientButton({
  onClick,
  isActive = false,
  label,
  content,
}: {
  onClick: () => void;
  isActive?: boolean;
  label: string;
  content: JSX.Element;
}) {
  const [isPopoverOpen, setPopoverOpen] = useState(true);

  return (
    <IconButton
      title="Plus"
      onClick={onClick}
      onMouseEnter={() => setPopoverOpen(true)}
      onMouseLeave={() => setPopoverOpen(false)}
      className={twMerge(
        'rounded-full p-2 w-[2.5em] h-[2.5em] mr-1 mb-1',
        isActive && ' bg-brand-600',
      )}
    >
      <span>{label}</span>
    </IconButton>
  );

  return (
    <Popover
      padding={10} // adjust padding here!
      reposition={false}
      isOpen={isPopoverOpen}
      positions={['bottom']}
      content={
        <div className="p-1 bg-surface-3 text-white rounded text-sm">
          {content}
        </div>
      }
    >
      <IconButton
        title="Plus"
        onClick={onClick}
        onMouseEnter={() => setPopoverOpen(true)}
        onMouseLeave={() => setPopoverOpen(false)}
        className={twMerge(
          'rounded-full p-2 w-[2.5em] h-[2.5em] mr-1 mb-1',
          isActive && ' bg-brand-600',
        )}
      >
        <span>{label}</span>
      </IconButton>
    </Popover>
  );
}

// TODO Rebuild
{
  /* <li className="flex py-6 sm:py-10">
  <div className="flex-shrink-0">
    <img
      src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg"
      alt="Front of men's Basic Tee in sienna."
      className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
    />
  </div>

  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
    <div className="relative pr-9">
      <div className="">
        <TextArea label="Instruction" value="" onChange={() => {}} id="null" />
        <div className="mt-1 flex text-sm">
          <p className="text-gray-500">Sienna</p>
          <p className="ml-4 border-l border-surface-2 pl-4 text-gray-500">
            Large
          </p>
          <Button
            variant="text"
            className="ml-4 border-l border-surface-2 rounded-none  p-0 pl-4"
          >
            Add Ingredient
          </Button>
        </div>
      </div>

      <div className="mt-4 sm:mt-0 sm:pr-9">
        <div className="absolute right-0 top-0">
          <button
            type="button"
            className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
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
        </div>
      </div>
    </div>

    <p className="mt-4 flex space-x-2 text-sm text-gray-700">
      <svg
        className="h-5 w-5 flex-shrink-0 text-green-500"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
          clipRule="evenodd"
        ></path>
      </svg>
      <span>In stock</span>
    </p>
  </div>
</li>; */
}
