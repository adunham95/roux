import { ChipToggle } from '@/components/chipToggle/chipToggle';
import { IIngredientItem } from '@/types/ingredinetItem';
import React from 'react';

interface IInstructionListProps {
  instructions: IInstructionItem[];
  ingredients: IIngredientItem[];
}

const SidecarInstructionList = (props: IInstructionListProps) => {
  const { instructions, ingredients } = props;
  return (
    <div className="@container">
      <ul role="list" className="divide-y divide-surface-4 mt-3">
        {instructions.map((inst) => (
          <li
            key={inst.refId}
            className="flex items-center justify-between gap-x-6 py-3"
          >
            <div className="min-w-0">
              <div className="flex items-start gap-x-3">
                <p className="text-sm font-semibold leading-6 text-tc-1">
                  {inst.order + 1}: {inst.description}
                </p>
              </div>
              <div className="mt-1 flex items-center text-xs overflow-x-scroll hide-scrollbars">
                {ingredients
                  .filter((ing) => ing.instructionRefId === inst.refId)
                  .map((ing) => (
                    <ChipToggle
                      key={`${ing.refId}-${inst.refId}`}
                      id={ing.refId || ''}
                      label={ing.name}
                      checked
                      disabled
                    />
                  ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidecarInstructionList;
