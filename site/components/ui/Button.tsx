import React from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost' | 'outline';
  size: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonProps['variant'], string> = {
  primary:
    'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]',
  secondary:
    'bg-[var(--color-bg-card)] text-[var(--color-text)] hover:bg-[var(--color-bg-alt)]',
  ghost:
    'bg-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text)]',
  outline:
    'bg-transparent border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-primary)]',
};

const sizeStyles: Record<ButtonProps['size'], string> = {
  sm: 'px-4 py-2 text-[var(--text-sm)]',
  md: 'px-6 py-3 text-[var(--text-base)]',
  lg: 'px-8 py-4 text-[var(--text-md)]',
};

export default function Button({
  variant,
  size,
  fullWidth,
  disabled,
  loading,
  href,
  onClick,
  children,
  className = '',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-[var(--radius-md)] font-medium transition-[background-color,color,border-color,transform] duration-[var(--transition-base)] cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2 min-h-[44px]';

  const combinedStyles = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? 'w-full' : '',
    disabled || loading
      ? 'opacity-40 cursor-not-allowed pointer-events-none'
      : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = loading ? (
    <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
  ) : (
    children
  );

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      className={combinedStyles}
    >
      {content}
    </button>
  );
}
