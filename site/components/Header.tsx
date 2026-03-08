import Button from '@/components/ui/Button';

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-[var(--z-header)] border-b border-[var(--color-border)]"
      style={{
        backgroundColor: 'rgba(10, 10, 15, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div className="container">
        <div
          className="flex items-center justify-between"
          style={{
            height: 'var(--header-height-mobile)',
          }}
        >
          <a
            href="/"
            className="text-[var(--color-text)] font-bold text-[var(--text-lg)] tracking-tight no-underline"
            style={{
              fontFamily: 'var(--font-heading)',
              letterSpacing: 'var(--tracking-tight)',
            }}
          >
            DeckMind
          </a>

          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Основная навигация"
          >
            <a
              href="#how-it-works"
              className="min-h-[44px] flex items-center text-[var(--color-text-muted)] hover:text-[var(--color-text)] text-[var(--text-sm)] transition-colors duration-[var(--transition-base)] no-underline"
            >
              Как работает
            </a>
            <a
              href="#cases"
              className="min-h-[44px] flex items-center text-[var(--color-text-muted)] hover:text-[var(--color-text)] text-[var(--text-sm)] transition-colors duration-[var(--transition-base)] no-underline"
            >
              Кейсы
            </a>
            <a
              href="#faq"
              className="min-h-[44px] flex items-center text-[var(--color-text-muted)] hover:text-[var(--color-text)] text-[var(--text-sm)] transition-colors duration-[var(--transition-base)] no-underline"
            >
              Вопросы
            </a>
          </nav>

          <Button variant="primary" size="sm" href="#cta">
            Создать презентацию
          </Button>
        </div>
      </div>
    </header>
  );
}
