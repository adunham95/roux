import { IIngredientItem } from '@/types/ingredinetItem';
import { IInstructionItem } from '@/types/instructionItem';
import React from 'react';

interface IInstructionListProps {
  instructions: IInstructionItem[];
  ingredients: IIngredientItem[];
}

const SidecarInstructionList = (props: IInstructionListProps) => {
  const { instructions } = props;
  return (
    <div className="@container">
      <ul role="list" className="divide-y divide-gray-200 mt-3">
        {instructions.map((inst) => (
          <li
            key={inst.id}
            className="flex items-center justify-between gap-x-6 py-3"
          >
            <div className="min-w-0">
              <div className="flex items-start gap-x-3">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {inst.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidecarInstructionList;
