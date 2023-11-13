import { CheckCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps {}

export const ActivityFeed = (props: IProps) => {
  const {} = props;
  const activity = [
    {
      id: 1,
      type: 'created',
      person: { name: 'Chelsea Hagon' },
      date: '7d ago',
      dateTime: '2023-01-23T10:32',
    },
    {
      id: 2,
      type: 'edited',
      person: { name: 'Chelsea Hagon' },
      date: '6d ago',
      dateTime: '2023-01-23T11:03',
    },
    {
      id: 3,
      type: 'sent',
      person: { name: 'Chelsea Hagon' },
      date: '6d ago',
      dateTime: '2023-01-23T11:24',
    },
    {
      id: 4,
      type: 'commented',
      person: {
        name: 'Chelsea Hagon',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      comment:
        'Called client, they reassured me the invoice would be paid by the 25th.',
      date: '3d ago',
      dateTime: '2023-01-23T15:56',
    },
    {
      id: 5,
      type: 'viewed',
      person: { name: 'Alex Curren' },
      date: '2d ago',
      dateTime: '2023-01-24T09:12',
    },
    {
      id: 6,
      type: 'paid',
      person: { name: 'Alex Curren' },
      date: '1d ago',
      dateTime: '2023-01-24T09:20',
    },
  ];
  return (
    <ul role="list" className="mt-6 space-y-6">
      {activity.map((activityItem, activityItemIdx) => (
        <li key={activityItem.id} className="relative flex gap-x-4">
          <div
            className={twMerge(
              activityItemIdx === activity.length - 1 ? 'h-6' : '-bottom-6',
              'absolute left-0 top-0 flex w-6 justify-center',
            )}
          >
            <div className="w-px bg-surface-5" />
          </div>
          {activityItem.type === 'commented' ? (
            <>
              <img
                src={activityItem.person.imageUrl}
                alt=""
                className="relative mt-3 h-6 w-6 flex-none rounded-full bg-surface-background"
              />
              <div className="flex-auto rounded-md p-3 ring-1 ring-inset ring-surface-5">
                <div className="flex justify-between gap-x-4">
                  <div className="py-0.5 text-xs leading-5 text-surface-3">
                    <span className="font-medium text-surface-1">
                      {activityItem.person.name}
                    </span>{' '}
                    commented
                  </div>
                  <time
                    dateTime={activityItem.dateTime}
                    className="flex-none py-0.5 text-xs leading-5 text-surface-1"
                  >
                    {activityItem.date}
                  </time>
                </div>
                <p className="text-sm leading-6 text-surface-1">
                  {activityItem.comment}
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-surface-background">
                {activityItem.type === 'paid' ? (
                  <CheckCircleIcon
                    className="h-6 w-6 text-brand"
                    aria-hidden="true"
                  />
                ) : (
                  <div className="h-1.5 w-1.5 rounded-full bg-surface-5 ring-1 ring-surface-4" />
                )}
              </div>
              <p className="flex-auto py-0.5 text-xs leading-5 text-surface-3">
                <span className="font-medium text-brand-1">
                  {activityItem.person.name}
                </span>{' '}
                {activityItem.type} the invoice.
              </p>
              <time
                dateTime={activityItem.dateTime}
                className="flex-none py-0.5 text-xs leading-5 text-surface-3"
              >
                {activityItem.date}
              </time>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};
