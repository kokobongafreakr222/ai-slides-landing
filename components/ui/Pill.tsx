interface PillProps {
  label: string;
  variant?: 'default' | 'accent' | 'muted';
}

const variantStyles: Record<NonNullable<PillProps['variant']>, string> = {
  default: 'bg-bg-card text-text-muted border border-border',
  accent: 'bg-accent-muted text-accent',
  muted: 'bg-primary-muted text-primary',
};

export default function Pill({ label, variant = 'default' }: PillProps) {
  return (
    <span
      className={[
        'inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wide',
        variantStyles[variant],
      ].join(' ')}
    >
      {label}
    </span>
  );
}
