import { ActivityFeed } from '@/components/activityFeed/activityFeed';
import { generateChangeLog } from '@/utils/generateChangeLog';
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
                {generateChangeLog(hist.elements).map((item) => (
                  <li key={item as string} className=" text-tc-2 text-sm">
                    {item}
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
