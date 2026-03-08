export default function Footer() {
  return (
    <footer
      className="border-t border-border"
      style={{
        paddingBlock: '32px',
      }}
    >
      <div className="container">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <span
            className="font-bold text-md text-text-muted"
            style={{
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
              className="min-h-[44px] inline-flex items-center text-sm text-text-muted no-underline hover:text-text transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="min-h-[44px] inline-flex items-center text-sm text-text-muted no-underline hover:text-text transition-colors"
            >
              Условия использования
            </a>
            <a
              href="mailto:hello@deckmind.io"
              className="min-h-[44px] inline-flex items-center text-sm text-text-muted no-underline hover:text-text transition-colors"
            >
              hello@deckmind.io
            </a>
          </nav>

          <p className="text-sm text-text-subtle">
            © 2026 DeckMind
          </p>
        </div>
      </div>
    </footer>
  );
}
