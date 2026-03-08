import Button from '@/components/ui/Button';

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-[var(--z-header)] border-b border-border-subtle"
      style={{
        backgroundColor: 'rgba(10, 10, 12, 0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
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
            className="text-text font-semibold text-lg tracking-[0.05em] no-underline transition-colors duration-300 hover:text-gold elegant-underline"
            style={{
              fontFamily: 'var(--font-heading)',
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
              className="min-h-[44px] flex items-center text-text-muted hover:text-gold text-sm tracking-wide transition-colors duration-300 no-underline elegant-underline"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Как работает
            </a>
            <a
              href="#cases"
              className="min-h-[44px] flex items-center text-text-muted hover:text-gold text-sm tracking-wide transition-colors duration-300 no-underline elegant-underline"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Кейсы
            </a>
            <a
              href="#faq"
              className="min-h-[44px] flex items-center text-text-muted hover:text-gold text-sm tracking-wide transition-colors duration-300 no-underline elegant-underline"
              style={{ fontFamily: 'var(--font-body)' }}
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
