import React from 'react';

interface CardProps {
  variant?: 'default' | 'elevated' | 'bordered';
  padding?: 'sm' | 'md' | 'lg';
  hoverable?: boolean;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<NonNullable<CardProps['variant']>, string> = {
  default: 'bg-[var(--color-bg-card)]',
  elevated: 'bg-[var(--color-bg-card)] shadow-[var(--shadow-md)]',
  bordered: 'bg-transparent border border-[var(--color-border)]',
};

const paddingStyles: Record<NonNullable<CardProps['padding']>, string> = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export default function Card({
  variant = 'default',
  padding = 'md',
  hoverable = false,
  children,
  className = '',
}: CardProps) {
  const combinedStyles = [
    'rounded-[var(--radius-lg)]',
    variantStyles[variant],
    paddingStyles[padding],
    hoverable
      ? 'transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]'
      : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={combinedStyles}>{children}</div>;
}
