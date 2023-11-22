import { IIngredientItem } from '@/types/ingredinetItem';
import React from 'react';
import TextInput from '../inputs/text-input';
import SelectInput from '../inputs/select';
import { TrashIcon } from '@heroicons/react/24/outline';
import { Button } from '../buttons/button';

const measurementTypes = [
  { value: 'gal', label: 'Gallon' },
  { value: 'qt', label: 'Quart' },
  { value: 'pt', label: 'Pint' },
  { value: 'cup', label: 'Cup' },
  { value: 'tbsp', label: 'Tablespoon' },
  { value: 'tsp', label: 'Teaspoon' },
  { value: 'oz', label: 'Ounce' },
  { value: 'fl oz', label: 'Fluid Ounce' },
  { value: 'lb', label: 'Pound' },
  { value: 'ml', label: 'Milliliter' },
  { value: 'l', label: 'Liter' },
  { value: 'g', label: 'Gram' },
  { value: 'kg', label: 'Kilogram' },
];

export function NewIngredientItem({
  ingredient,
  index = 0,
  onChange,
  onDelete,
}: {
  ingredient: IIngredientItem;
  index?: number;
  onChange: (ingredient: IIngredientItem) => void;
  onDelete?: (ingredient: IIngredientItem) => void;
  onCopy?: (ingredient: IIngredientItem) => void;
}) {
  function handleChange(value: string | number, key: string) {
    onChange({ ...ingredient, [key]: value });
  }

  return (
    <div className="col-span-full  group">
      <div className="grid col-span-1 gap-x-2 gap-y-1 md:grid-cols-7">
        <TextInput
          className="group/ingredientName col-span-2"
          label="Ingredient name"
          id={`ingredient-${index}-name`}
          value={ingredient.name}
          onChange={(value) => handleChange(value, 'name')}
        />
        <TextInput
          className="col-span-2"
          label="Ingredient Count"
          id={`ingredient-${index}-count`}
          type="number"
          min={0}
          value={ingredient.count.toString()}
          onChange={(value) => handleChange(parseInt(value), 'count')}
        />
        <SelectInput
          className="col-span-2"
          label="Ingredient type"
          id={`ingredient-${index}-type`}
          value={ingredient.type}
          onChange={(value) => handleChange(value, 'type')}
          options={[{ value: '', label: 'Select Type' }, ...measurementTypes]}
        />
        <div className="flex items-end w-full md:col-span-1 col-span-2 pt-1">
          {onDelete && (
            <Button
              onClick={() => onDelete(ingredient)}
              className="bg-red-400 hover:bg-red-600 p-2 text-white focus-visible:outline-red-600 w-full flex items-end justify-center "
            >
              <p className="md:sr-only">Delete</p>
              <TrashIcon className="w-5 h-5 hidden md:block" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
