import { ActivityFeed } from '@/components/activityFeed/activityFeed';
import React from 'react';

interface IProps {
  history: RecipeHistoryArray[];
}

export const RecipeHistory = (props: IProps) => {
  const { history } = props;
  console.log('history', history);
  return (
    <div>
      <ActivityFeed
        backgroundColor="bg-surface"
        items={history.map((hist) => {
          return {
            id: hist.id,
            user: hist.user,
            type: 'edited',
            dateTime: new Date(parseInt(hist.createdAt)),
            value: (
              <ul>
                {hist.elements.map((elm) => (
                  <li key={elm.key as string} className=" text-tc-2 text-sm">
                    {elm.key as string} - {elm.value as string}
                  </li>
                ))}
              </ul>
            ),
          };
        })}
      />
    </div>
  );
};
