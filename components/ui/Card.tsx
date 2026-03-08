import React from 'react';

interface CardProps {
  variant?: 'default' | 'elevated' | 'bordered';
  padding?: 'sm' | 'md' | 'lg';
  hoverable?: boolean;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<NonNullable<CardProps['variant']>, string> = {
  default: 'bg-bg-card border border-border transition-all duration-400',
  elevated: 'bg-bg-card border border-border shadow-md transition-all duration-400',
  bordered: 'bg-transparent border border-border transition-all duration-400',
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
    'rounded-lg',
    variantStyles[variant],
    paddingStyles[padding],
    hoverable
      ? 'card-hover'
      : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={combinedStyles}>{children}</div>;
}
