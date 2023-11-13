import { Button } from '@/components/buttons/button';
import React, { FormEvent } from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps {
  title: string;
  subTitle?: string;
  children: React.ReactNode;
  onCancel?: () => void;
  onSubmit?: () => void;
  className?: string;
}

export const TwoColumnCard = (props: IProps) => {
  const { title, subTitle, children, onCancel, onSubmit, className } = props;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit && onSubmit();
  }

  return (
    <div
      className={twMerge(
        'grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3',
        className,
      )}
    >
      <div className="px-4 sm:px-0">
        <div className="sticky top-0">
          <h2 className="text-base font-semibold leading-7 text-surface-1 ">
            {title}
          </h2>
          {subTitle && (
            <p className="mt-1 text-sm leading-6 text-surface-2">{subTitle}</p>
          )}
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-surface shadow-sm ring-1 ring-surface-1/5 sm:rounded-xl md:col-span-2"
      >
        <div className="px-4 py-6 sm:p-8">
          <div className="grid max-w-2xl gap-x-6 gap-y-8 grid-cols-6">
            {children}
          </div>
        </div>
        {(onSubmit || onCancel) && (
          <div className="flex items-center justify-end gap-x-6 border-t border-surface-1/10 px-4 py-4 sm:px-8">
            {onCancel && (
              <Button variant="text" color="warning">
                Cancel
              </Button>
            )}
            {onSubmit && <Button type="submit">Save</Button>}
          </div>
        )}
      </form>
    </div>
  );
};
