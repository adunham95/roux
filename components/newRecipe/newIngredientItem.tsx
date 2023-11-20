import { IIngredientItem } from '@/types/ingredinetItem';
import React from 'react';
import TextInput from '../inputs/text-input';
import SelectInput from '../inputs/select';

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
}: {
  ingredient: IIngredientItem;
  index?: number;
  onChange: (ingredient: IIngredientItem) => void;
  onDelete?: (id: string) => void;
  onCopy?: (id: string) => void;
}) {
  function handleChange(value: string | number, key: string) {
    onChange({ ...ingredient, [key]: value });
  }

  return (
    <div className="col-span-full  group">
      <div className="grid col-span-1 gap-x-2 gap-y-1 md:grid-cols-3">
        <TextInput
          className="group/ingredientName col-span-1"
          label="Ingredient name"
          id={`ingredient-${index}-name`}
          value={ingredient.name}
          onChange={(value) => handleChange(value, 'name')}
        />
        <TextInput
          className="col-span-1"
          label="Ingredient Count"
          id={`ingredient-${index}-count`}
          type="number"
          min={0}
          value={ingredient.count.toString()}
          onChange={(value) => handleChange(parseInt(value), 'count')}
        />
        <SelectInput
          className="col-span-1"
          label="Ingredient type"
          id={`ingredient-${index}-type`}
          value={ingredient.type}
          onChange={(value) => handleChange(value, 'type')}
          options={[{ value: '', label: 'Select Type' }, ...measurementTypes]}
        />
      </div>
    </div>
  );
}
