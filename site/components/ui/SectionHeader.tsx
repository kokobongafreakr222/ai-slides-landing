interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: SectionHeaderProps) {
  const alignStyles =
    align === 'center'
      ? 'text-center mx-auto max-w-[640px]'
      : '';

  return (
    <div className={alignStyles}>
      {eyebrow && (
        <p
          className="text-[var(--color-accent)] uppercase tracking-[var(--tracking-wider)] text-[var(--text-xs)] font-medium mb-3"
          style={{ letterSpacing: 'var(--tracking-wider)' }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="text-[var(--color-text)] font-bold text-[var(--text-3xl)] mb-4"
        style={{
          letterSpacing: 'var(--tracking-tight)',
          lineHeight: 'var(--leading-snug)',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-[var(--color-text-muted)] text-[var(--text-md)]"
          style={{ lineHeight: 'var(--leading-relaxed)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
