import { IIngredientItem } from '@/types/ingredinetItem';
import React from 'react';
import LabelBar from '../inputs/labelBar';
import IconButton from '../buttons/iconButton';
import TextInput from '../inputs/text-input';
import SelectInput from '../inputs/select';

export function NewIngredientItem({
  ingredient,
  index = 0,
  onChange,
  onDelete,
  onCopy,
}: {
  ingredient: IIngredientItem;
  index?: number;
  onChange: (ingredient: IIngredientItem) => void;
  onDelete?: (id: string) => void;
  onCopy?: (id: string) => void;
}) {
  function handleChange(value: string, key: string) {
    onChange({ ...ingredient, [key]: value });
  }

  return (
    <div className="col-span-full  group">
      <div className="grid col-span-1 gap-x-2 gap-y-1 md:grid-cols-3">
        <LabelBar
          labelContainerClassName="col-span-full"
          label={`Ingredient ${index + 1}`}
          labelHintSlot={
            <div className="flex justify-end text-gray-500">
              {onCopy && (
                <IconButton
                  title="Copy"
                  onClick={() => onCopy(ingredient.id)}
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
                  onClick={() => onDelete(ingredient.id)}
                  className="rounded-full bg-red-400 p-2 hover:bg-red-600 text-white focus-visible:outline-red-600 ml-1 md:scale-0 group-hover:scale-100  transition-transform  duration-300"
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
        <TextInput
          className="group/ingredientName col-span-1"
          label="Ingredient name"
          id={`ingredient-${index}-name`}
          value={ingredient.food}
          onChange={(value) => handleChange(value, 'food')}
        />
        <TextInput
          className="col-span-1"
          label="Ingredient Count"
          id={`ingredient-${index}-count`}
          type="number"
          value={ingredient.count.toString()}
          onChange={(value) => handleChange(value, 'count')}
        />
        <SelectInput
          className="col-span-1"
          label="Ingredient type"
          id={`ingredient-${index}-type`}
          value={ingredient.type}
          onChange={(value) => handleChange(value, 'type')}
          options={[
            { value: 'gallon', label: 'Gallon' },
            { value: 'pint', label: 'Pint' },
          ]}
        />
      </div>
    </div>
  );
}
