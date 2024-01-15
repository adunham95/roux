import React from 'react';
import { twMerge } from 'tailwind-merge';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const activity = [
  {
    id: '1',
    type: 'created',
    person: { firstName: 'Chelsea' },
    date: '7d ago',
    dateTime: '2023-01-23T10:32',
  },
  {
    id: '2',
    type: 'edited',
    person: {
      firstName: 'Chelsea',
    },
    date: '6d ago',
    dateTime: '2023-01-23T11:03',
  },
  {
    id: '3',
    type: 'sent',
    person: { firstName: 'Chelsea' },
    date: '6d ago',
    dateTime: '2023-01-23T11:24',
  },
  {
    id: '4',
    type: 'commented',
    person: {
      firstName: 'Chelsea',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    comment:
      'Called client, they reassured me the invoice would be paid by the 25th.',
    date: '3d ago',
    dateTime: '2023-01-23T15:56',
  },
  {
    id: '5',
    type: 'viewed',
    person: { firstName: 'Alex' },
    date: '2d ago',
    dateTime: '2023-01-24T09:12',
  },
  {
    id: '6',
    type: 'paid',
    person: { firstName: 'Alex' },
    date: '1d ago',
    dateTime: '2023-01-24T09:20',
  },
];

interface ActivityItem {
  id: string;
  type: string | 'edited';
  person: {
    name?: string;
    imageUrl?: string;
    firstName: string;
    lastName: string;
  };
  dateTime: Date;
  value?: React.ReactNode;
}

interface IProps {
  items?: ActivityItem[];
  backgroundColor?: string;
}

export const ActivityFeed = (props: IProps) => {
  const { backgroundColor = 'bg-surface-background', items = activity } = props;

  console.log(items);

  return (
    <ul role="list" className="mt-6 space-y-6">
      {items.map((activityItem, activityItemIdx) => (
        <li
          id={activityItem.id}
          key={activityItem.id}
          className="relative flex gap-x-4"
        >
          <div
            className={twMerge(
              activityItemIdx === activity.length - 1 ? 'h-6' : '-bottom-6',
              'absolute left-0 top-0 flex w-6 justify-center',
            )}
          >
            <div className="w-px bg-brand-variable" />
          </div>
          {activityItem.type === 'edited' ? (
            <>
              <div
                className={`relative flex h-6 w-6 flex-none items-center justify-center ${backgroundColor}`}
              >
                <div className="h-1.5 w-1.5 rounded-full bg-brand-variable ring-1 ring-surface-4" />
              </div>
              <div className="flex-auto rounded-md self-end">
                <details className="flex justify-between  items-center">
                  <summary className="flex justify-between gap-x-4 cursor-pointer">
                    <div className="py-0.5 text-xs leading-5 text-tc-3">
                      <span className="font-medium ">
                        {activityItem.person.firstName}
                      </span>{' '}
                      edited
                    </div>
                    <time
                      dateTime={activityItem.dateTime.toString()}
                      className="flex-none py-0.5 text-xs leading-5 text-tc-3"
                    >
                      {dayjs(activityItem.dateTime).from(new Date())}
                    </time>
                  </summary>
                  <p className="text-sm leading-6 text-tc-1">
                    Epcot is a theme park at Walt Disney World Resort featuring
                    exciting attractions, international pavilions, award-winning
                    fireworks and seasonal special events.
                  </p>
                </details>
              </div>
            </>
          ) : (
            <>
              <div
                className={`relative flex h-6 w-6 flex-none items-center justify-center ${backgroundColor}`}
              >
                <div className="h-1.5 w-1.5 rounded-full bg-brand-variable ring-1 ring-surface-4" />
              </div>
              <p className="flex-auto py-0.5 text-xs leading-5 text-tc-3">
                <span className="font-medium">
                  {activityItem.person.firstName}
                </span>{' '}
                {activityItem.type}
              </p>
              <time
                dateTime={activityItem.dateTime.toString()}
                className="flex-none py-0.5 text-xs leading-5 text-tc-3"
              >
                {dayjs(activityItem.dateTime).from(new Date())}
              </time>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};
