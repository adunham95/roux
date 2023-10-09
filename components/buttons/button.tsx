import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface IButtonProps {
  type?: 'button' | 'submit';
  className?: string;
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'filled' | 'outline' | 'text';
  color?: 'brand' | 'success' | 'danger' | 'warning';
  onClick?: () => void;
}

export const Button = (props: IButtonProps) => {
  const {
    className,
    children,
    size,
    variant = 'filled',
    color = 'brand',
    type = 'button',
    onClick,
  } = props;

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

  function getVariant() {
    switch (variant) {
      case 'filled':
        return `font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${colorItems[color].background} ${colorItems[color].hover} ${colorItems[color].focusOutline}`;
      case 'text':
        return `font-semibold ${colorItems[color].text}`;
      case 'outline':
        return `font-semibold ${colorItems[color].text} shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${colorItems[color].border} ${colorItems[color].hoverLight} ${colorItems[color].focusOutline} border`;
      default:
        return '';
    }
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={twMerge(getSize(), getVariant(), className)}
    >
      {children}
    </button>
  );
};

const colorItems = {
  brand: {
    background: 'bg-brand',
    text: 'text-brand',
    hover: 'hover:bg-brand-300',
    hoverLight: 'hover:bg-brand-50',
    focusOutline: 'focus-visible:outline-brand',
    border: 'border-brand',
  },
  success: {
    background: 'bg-green-600',
    border: 'border-green-600',
    text: 'text-green-600',
    hover: 'hover:bg-green-500',
    hoverLight: 'hover:bg-green-50',
    focusOutline: 'focus-visible:outline-green-600',
  },
  danger: {
    background: 'bg-rose-600',
    border: 'border-rose-600',
    text: 'text-rose-600',
    hover: 'hover:bg-rose-500',
    hoverLight: 'hover:bg-rose-50',
    focusOutline: 'focus-visible:outline-rose-600',
  },
  warning: {
    background: 'bg-amber-600',
    border: 'border-amber-600',
    text: 'text-amber-600',
    hover: 'hover:bg-amber-500',
    hoverLight: 'hover:bg-amber-50',
    focusOutline: 'focus-visible:outline-amber-600',
  },
};