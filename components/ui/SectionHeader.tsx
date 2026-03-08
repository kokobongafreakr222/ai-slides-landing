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
        <p className="text-gold uppercase tracking-[0.15em] text-xs font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          {eyebrow}
        </p>
      )}
      <h2 className="text-text font-semibold text-3xl leading-snug tracking-[0.02em] mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-muted text-lg leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
