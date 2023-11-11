import { IInstructionItem } from '@/types/instructionItem';
import TextArea from '../inputs/text-area';
import IconButton from '../buttons/iconButton';
import { IIngredientItem } from '@/types/ingredinetItem';
import { NewIngredientItem } from './newIngredientItem';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Popover } from 'react-tiny-popover';

export function NewInstructionItem({
  instruction,
  onChange,
  onDelete,
  onCopy,
  onIngredientChange,
  addIngredientItem,
}: {
  instruction: IInstructionItem;
  availableIngredients: IIngredientItem[];
  onChange: (instruction: IInstructionItem) => void;
  onDelete?: (id: string) => void;
  onCopy?: (id: string) => void;
  onIngredientChange: (ingredient: IIngredientItem) => void;
  addIngredientItem: () => void;
}) {
  const [ingredientIndex, setIngredientIndex] = useState<number | null>(null);
  function handleChange(value: unknown, key: string) {
    onChange({ ...instruction, [key]: value });
  }
  return (
    <div className="col-span-full  group">
      <TextArea
        label={`Instruction ${instruction.order + 1}`}
        id={`${instruction.id}-description`}
        value={instruction.description}
        placeholder="Cut the carrots, ..."
        onChange={(v) => handleChange(v, 'description')}
        labelHintSlot={
          <div className="flex justify-end text-gray-500">
            {onCopy && (
              <IconButton
                title="Copy Items"
                onClick={() => onCopy(instruction?.id || '')}
                className=" bg-gray-400 p-2 text-white rounded-full hover:bg-gray-500  focus-visible:outline-gray-600 md:scale-0 group-hover:scale-100 transition-transform duration-300"
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
                onClick={() => onDelete(instruction?.id || '')}
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
        {instruction.ingredients.map((ing, i) => (
          <IngredientButton
            label={ing.food.slice(0, 1) || `${i}`}
            key={ing.id}
            onClick={() => setIngredientIndex(i)}
            content={<div>{ing.food}</div>}
            isActive={ingredientIndex === i}
          />
        ))}
        <IconButton
          onClick={() => {
            addIngredientItem();
            setIngredientIndex(instruction.ingredients.length - 1);
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
        {instruction.ingredients[ingredientIndex || 0] && (
          <NewIngredientItem
            ingredient={instruction.ingredients[ingredientIndex || 0]}
            index={ingredientIndex || 0}
            onChange={onIngredientChange}
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
    <Popover
      padding={10} // adjust padding here!
      reposition={false}
      isOpen={isPopoverOpen}
      positions={['bottom']}
      content={
        <div className="p-1 bg-gray-400 text-white rounded text-sm">
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
