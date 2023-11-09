import { IInstructionItem } from '@/types/instructionItem';
import TextArea from '../inputs/text-area';
import IconButton from '../buttons/iconButton';
import { IIngredientItem } from '@/types/ingredinetItem';
import { NewIngredientItem } from './newIngredientItem';
import { Button } from '../buttons/button';

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
  function handleChange(value: unknown, key: string) {
    onChange({ ...instruction, [key]: value });
  }

  // function handleChecked(checked: boolean, id: string) {
  //   if (checked) {
  //     handleChange([...instruction.ingredients, id], 'ingredients');
  //   } else {
  //     handleChange(
  //       instruction.ingredients.filter((ing) => ing !== id),
  //       'ingredients',
  //     );
  //   }
  // }
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
                onClick={() => onCopy(instruction.id)}
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
                onClick={() => onDelete(instruction.id)}
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
      <div>
        {instruction.ingredients.map((ing, i) => (
          <NewIngredientItem
            key={ing.id}
            ingredient={ing}
            index={i}
            onChange={onIngredientChange}
            // onCopy={() => updateIngredientItem(ing, 'copy')}
            // onDelete={() => updateIngredientItem(ing, 'delete')}
          />
        ))}
        <Button onClick={addIngredientItem} size="lg" className="col-span-full">
          Add Another Ingredient
        </Button>
      </div>
      {/* <div className="flex pt-1 overflow-x-scroll hide-scrollbars">
        {availableIngredients.map((ing) => (
          <ChipToggle
            key={ing.id}
            id={`${instruction.id}-${ing.id}`}
            label={ing.food}
            checked={instruction.ingredients.includes(ing.id)}
            onChange={(checked) => handleChecked(checked, ing.id)}
          />
        ))}
      </div> */}
    </div>
  );
}
