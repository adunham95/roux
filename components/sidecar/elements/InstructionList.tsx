import { ChipToggle } from '@/components/chipToggle/chipToggle';
import { IInstructionItem } from '@/types/instructionItem';
import React from 'react';

interface IInstructionListProps {
  instructions: IInstructionItem[];
}

const SidecarInstructionList = (props: IInstructionListProps) => {
  const { instructions } = props;
  return (
    <div className="@container">
      <ul role="list" className="divide-y divide-surface-4 mt-3">
        {instructions.map((inst) => (
          <li
            key={inst.id}
            className="flex items-center justify-between gap-x-6 py-3"
          >
            <div className="min-w-0">
              <div className="flex items-start gap-x-3">
                <p className="text-sm font-semibold leading-6 text-surface-1">
                  {inst.order + 1}: {inst.description}
                </p>
              </div>
              <div className="mt-1 flex items-center text-xs overflow-x-scroll hide-scrollbars">
                {inst.ingredients.map((ing) => (
                  <ChipToggle
                    key={`${ing.id}-${inst.id}`}
                    id={ing.id || ''}
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
