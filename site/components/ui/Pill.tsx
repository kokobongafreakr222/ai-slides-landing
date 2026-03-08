interface PillProps {
  label: string;
  variant?: 'default' | 'accent' | 'muted';
}

const variantStyles: Record<NonNullable<PillProps['variant']>, string> = {
  default: 'bg-[var(--color-bg-card)] text-[var(--color-text-muted)] border border-[var(--color-border)]',
  accent: 'bg-[var(--color-accent-muted)] text-[var(--color-accent)]',
  muted: 'bg-[var(--color-primary-muted)] text-[var(--color-primary)]',
};

export default function Pill({ label, variant = 'default' }: PillProps) {
  return (
    <span
      className={[
        'inline-flex items-center px-3 py-1.5 rounded-[var(--radius-full)] text-[var(--text-xs)] font-medium uppercase',
        variantStyles[variant],
      ].join(' ')}
      style={{ letterSpacing: 'var(--tracking-wide)' }}
    >
      {label}
    </span>
  );
}
