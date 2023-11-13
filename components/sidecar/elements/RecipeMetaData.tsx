import React from 'react';

interface IProps {
  name: string;
  description: string;
}

export const RecipeMetaData = (props: IProps) => {
  const { name, description } = props;
  return (
    <div className="@container">
      <div className="py-2 @xs:grid @xs:grid-cols-3 @xs:gap-4 @xs:px-0">
        <div className="text-sm font-medium leading-6 text-surface-1">Name</div>
        <div className="mt-1 text-sm leading-6 text-surface-2 @xs:col-span-2 @xs:mt-0">
          {name}
        </div>
      </div>
      <div className="pb-2">
        <div className="text-sm font-medium leading-6 text-surface-1">
          Description
        </div>
        <div className="mt-1 text-sm leading-6 text-surface-2">
          {description}
        </div>
      </div>
    </div>
  );
};
