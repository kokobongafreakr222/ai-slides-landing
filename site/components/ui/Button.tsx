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
    'bg-primary text-white hover:bg-primary-hover',
  secondary:
    'bg-bg-card text-text hover:bg-bg-alt',
  ghost:
    'bg-transparent text-text-muted hover:text-text',
  outline:
    'bg-transparent border border-border text-text hover:border-primary',
};

const sizeStyles: Record<ButtonProps['size'], string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-md',
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
    'inline-flex items-center justify-center rounded-md font-semibold transition-all duration-300 ease-out cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 min-h-[44px] active:scale-[0.98] hover:-translate-y-0.5 hover:shadow-glow';

  const combinedStyles = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? 'w-full' : '',
    disabled || loading
      ? 'opacity-40 cursor-not-allowed pointer-events-none hover:translate-y-0 hover:shadow-none'
      : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = loading ? (
    <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
  ) : (
    <span className="flex items-center gap-2">
      {children}
      {variant === 'primary' && !loading && (
        <svg 
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      )}
    </span>
  );

  if (href) {
    return (
      <a href={href} className={`group ${combinedStyles}`}>
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      className={`group ${combinedStyles}`}
    >
      {content}
    </button>
  );
}
