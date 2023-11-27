import { IIngredientItem } from '@/types/ingredinetItem';
import React from 'react';

interface IProps {
  ingredients: IIngredientItem[];
}

export const SidecarIngredientList = (props: IProps) => {
  const { ingredients } = props;
  return (
    <div className="@container">
      <ul role="list" className="divide-y divide-surface-4 mt-3">
        {ingredients.map((ing) => (
          <li
            key={ing.refId}
            className="flex items-center justify-between gap-x-6 py-3"
          >
            <div className="min-w-0">
              <div className="flex items-start gap-x-3">
                <p className="text-sm font-semibold leading-6 text-surface-1">
                  {ing.name}
                </p>
              </div>
              <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-surface-2">
                <p className="whitespace-nowrap">x{ing.count}</p>
                <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <p className="truncate">{ing.type}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
