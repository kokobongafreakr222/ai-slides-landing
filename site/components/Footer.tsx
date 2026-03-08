export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border)',
        paddingBlock: '32px',
      }}
    >
      <div className="container">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <span
            className="font-bold text-[var(--text-md)]"
            style={{
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-heading)',
            }}
          >
            DeckMind
          </span>

          <nav
            className="flex flex-wrap gap-4 md:gap-6"
            aria-label="Навигация футера"
          >
            <a
              href="#"
              className="min-h-[44px] inline-flex items-center text-[var(--text-sm)] no-underline hover:text-[var(--color-text)] transition-colors"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="min-h-[44px] inline-flex items-center text-[var(--text-sm)] no-underline hover:text-[var(--color-text)] transition-colors"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Условия использования
            </a>
            <a
              href="mailto:hello@deckmind.io"
              className="min-h-[44px] inline-flex items-center text-[var(--text-sm)] no-underline hover:text-[var(--color-text)] transition-colors"
              style={{ color: 'var(--color-text-muted)' }}
            >
              hello@deckmind.io
            </a>
          </nav>

          <p
            className="text-[var(--text-sm)]"
            style={{ color: 'var(--color-text-subtle)' }}
          >
            © 2026 DeckMind
          </p>
        </div>
      </div>
    </footer>
  );
}
