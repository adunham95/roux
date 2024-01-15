import React from 'react';

interface IProps {
  name: string;
  description?: string;
  servings?: number;
}

export const RecipeMetaData = (props: IProps) => {
  const { name, description, servings } = props;
  return (
    <div className="@container">
      <div className="py-2 @xs:grid @xs:grid-cols-3 @xs:gap-4 @xs:px-0">
        <div className="text-sm font-medium leading-6 text-text-tc-1">Name</div>
        <div className="mt-1 text-sm leading-6 text-text-tc-2 @xs:col-span-2 @xs:mt-0">
          {name}
        </div>
      </div>
      {description && (
        <div className="pb-2">
          <div className="text-sm font-medium leading-6 text-text-tc-1">
            Description
          </div>
          <div className="mt-1 text-sm leading-6 text-text-tc-2">
            {description}
          </div>
        </div>
      )}
      {servings && (
        <div className="py-2 @xs:grid @xs:grid-cols-3 @xs:gap-4 @xs:px-0">
          <div className="text-sm font-medium leading-6 text-text-tc-1">
            Servings
          </div>
          <div className="mt-1 text-sm leading-6 text-text-tc-2 @xs:col-span-2 @xs:mt-0">
            {servings}
          </div>
        </div>
      )}
    </div>
  );
};
