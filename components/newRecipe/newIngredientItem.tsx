import { IIngredientItem } from '@/types/ingredinetItem';
import React from 'react';
import TextInput from '../inputs/text-input';
import SelectInput from '../inputs/select';

export function NewIngredientItem({
  ingredient,
  index = 0,
  onChange,
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
