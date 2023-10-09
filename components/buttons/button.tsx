import React from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps {
  className?: string;
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  style?: 'filled' | 'outline' | 'text';
  color?: 'brand' | 'success' | 'danger' | 'warning';
}

export const Button = (props: IProps) => {
  const { className, children, size, style, color = 'brand' } = props;

  function getSize() {
    switch (size) {
      case 'xs':
        return 'rounded px-2 py-1 text-xs';
      case 'sm':
        return 'rounded px-2 py-1 text-sm';
      case 'lg':
        return 'rounded-md px-3 py-2 text-sm';
      case 'xl':
        return 'rounded-md px-3.5 py-2.5 text-sm';
      default:
        return 'rounded-md px-2.5 py-1.5 text-sm';
    }
  }

  function getStyle() {
    switch (style) {
      case 'filled':
        return `font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${colorItems[color].background} ${colorItems[color].hover} ${colorItems[color].focusOutline}`;
      case 'text':
        return `font-semibold ${colorItems[color].text}`;
      case 'outline':
        return `font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${colorItems[color].background} ${colorItems[color].hover} ${colorItems[color].focusOutline} bg-opacity-10`;
      default:
        return '';
    }
  }

  return (
    <button className={twMerge(getSize(), getStyle(), className)}>
      {children}
    </button>
  );
};

const colorItems = {
  brand: {
    background: 'bg-brand',
    text: 'text-brand',
    hover: 'hover:bg-brand-300',
    focusOutline: 'focus-visible:outline-brand',
  },
  success: {
    background: 'bg-green-600',
    text: 'text-brand-600',
    hover: 'hover:bg-brand-500',
    focusOutline: 'focus-visible:outline-brand-600',
  },
  danger: {
    background: 'bg-rose-600',
    text: 'text-rose-600',
    hover: 'hover:bg-rose-500',
    focusOutline: 'focus-visible:outline-rose-600',
  },
  warning: {
    background: 'bg-amber-600',
    text: 'text-amber-600',
    hover: 'hover:bg-amber-500',
    focusOutline: 'focus-visible:outline-amber-600',
  },
};
