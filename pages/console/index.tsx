import { AdminLayout } from '@/components/Layouts/page/AdminLayout';
import { StartingPoint } from '@/components/startingPoint/startingPoint';
import React from 'react';
import {
  UserCircleIcon,
  UsersIcon,
  UserGroupIcon,
  ChartBarIcon,
  FolderIcon,
  Squares2X2Icon,
  DocumentIcon,
} from '@heroicons/react/24/outline';

const items = [
  {
    title: 'Membership',
    description: 'Edit Teams Membership',
    icon: UsersIcon,
    color: '#9E9764',
    href: '/console/memberships',
  },
  {
    title: 'Teams',
    description: 'Edit a team account',
    icon: UserGroupIcon,
    color: '#5E2129',
    href: '/console/teams',
  },
  {
    title: 'Users',
    description: 'Reset Passwords and edit other user information',
    icon: UserCircleIcon,
    color: '#025669',
    href: '/console/users',
  },
  {
    title: 'Content',
    description: 'Edit featured recipes and other content',
    icon: DocumentIcon,
    color: '#C93C20',
    href: '/console/content',
  },
  {
    title: 'Membership Tiers',
    description: 'Edit membership tiers',
    icon: Squares2X2Icon,
    color: '#649dad',
    href: '/console/tiers',
  },
  {
    title: 'Challenges',
    description: 'View and update current and upcoming challenges',
    icon: FolderIcon,
    color: '#57A639',
    href: '/console/challenges',
  },
  {
    title: 'Reporting',
    description: 'View Reports',
    icon: ChartBarIcon,
    color: '#A2231D',
    href: '/console/reports',
  },
];

const AdminConsole = () => {
  return (
    <AdminLayout pageName="Admin Console">
      <StartingPoint title="Admin" items={items} />
    </AdminLayout>
  );
};

export default AdminConsole;
