import React from 'react';

interface IProps {
  history: RecipeHistoryArray[];
}

export const RecipeHistory = (props: IProps) => {
  const { history } = props;
  console.log('history', history);
  return <div></div>;
};
