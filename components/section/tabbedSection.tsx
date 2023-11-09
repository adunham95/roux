import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface ITab {
  name: string;
  count: number;
  children: React.ReactNode;
}

interface IProps {
  tabs: ITab[];
}

export function TabbedSection(props: IProps) {
  const { tabs } = props;
  const [selectedTab, setSelectedTab] = useState(tabs[0].name || '');

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          onChange={(e) => setSelectedTab(e.target.value)}
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          value={selectedTab}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                onClick={() => setSelectedTab(tab.name)}
                key={tab.name}
                className={twMerge(
                  selectedTab === tab.name
                    ? 'border-brand-500 text-brand-600'
                    : 'border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700',
                  'flex whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium',
                )}
                aria-current={selectedTab === tab.name ? 'page' : undefined}
              >
                {tab.name}
                {tab.count ? (
                  <span
                    className={twMerge(
                      selectedTab === tab.name
                        ? 'bg-brand-100 text-brand-600'
                        : 'bg-gray-100 text-gray-900',
                      'ml-3 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block',
                    )}
                  >
                    {tab.count}
                  </span>
                ) : null}
              </button>
            ))}
          </nav>
        </div>
      </div>
      <div className="pt-3">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={tab.name === selectedTab ? '' : 'hidden'}
          >
            {tab.children}
          </div>
        ))}
      </div>
    </div>
  );
}
