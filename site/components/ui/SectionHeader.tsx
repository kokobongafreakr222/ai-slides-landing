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
        <p className="text-accent uppercase tracking-wider text-xs font-medium mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-text font-bold text-3xl leading-snug tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-muted text-md leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
