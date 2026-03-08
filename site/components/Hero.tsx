import Button from '@/components/ui/Button';

function SlidesMockup() {
  return (
    <div
      className="w-full aspect-video rounded-[var(--radius-lg)] overflow-hidden relative"
      style={{
        background: 'var(--color-bg-card)',
        border: '1px solid var(--color-border)',
        boxShadow: 'var(--shadow-lg)',
      }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 flex flex-col">
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{ borderBottom: '1px solid var(--color-border)' }}
        >
          <div className="w-2 h-2 rounded-full bg-[var(--color-error)]" />
          <div className="w-2 h-2 rounded-full bg-[var(--color-warning)]" />
          <div className="w-2 h-2 rounded-full bg-[var(--color-success)]" />
          <div
            className="ml-auto text-[10px]"
            style={{
              color: 'var(--color-text-subtle)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            DeckMind AI
          </div>
        </div>

        <div className="flex-1 flex gap-0">
          <div
            className="w-24 md:w-32 flex-shrink-0 flex flex-col gap-1.5 p-2"
            style={{ borderRight: '1px solid var(--color-border)' }}
          >
            {[0.9, 0.7, 0.6, 0.75, 0.55].map((opacity, i) => (
              <div
                key={i}
                className="rounded aspect-video"
                style={{
                  background: `rgba(91, 106, 240, ${opacity * 0.15})`,
                  border: i === 0 ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                }}
              />
            ))}
          </div>

          <div className="flex-1 flex flex-col items-center justify-center p-6 gap-4">
            <div
              className="w-full h-2 rounded-full"
              style={{ background: 'var(--color-primary)', maxWidth: '60%' }}
            />
            <div
              className="w-full h-1.5 rounded-full"
              style={{ background: 'var(--color-border)', maxWidth: '80%' }}
            />
            <div
              className="w-full h-1.5 rounded-full"
              style={{ background: 'var(--color-border)', maxWidth: '70%' }}
            />
            <div className="flex gap-3 mt-2">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="rounded-[var(--radius-sm)]"
                  style={{
                    width: 48,
                    height: 32,
                    background: 'var(--color-primary-muted)',
                    border: '1px solid rgba(91, 106, 240, 0.3)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)]"
    >
      <div
        className="container"
        style={{ paddingTop: 'var(--spacing-section)', paddingBottom: 'var(--spacing-section)' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <p
              className="text-[var(--color-accent)] uppercase font-medium text-[var(--text-xs)]"
              style={{ letterSpacing: 'var(--tracking-wider)' }}
            >
              Питч инвестору. Отчёт директорам. Обучающий курс.
            </p>

            <h1
              className="text-[var(--color-text)] font-bold text-[var(--text-5xl)]"
              style={{
                lineHeight: 'var(--leading-tight)',
                letterSpacing: 'var(--tracking-tight)',
                fontFamily: 'var(--font-heading)',
              }}
            >
              У вас есть задача. У нас есть слайды.
            </h1>

            <p
              className="text-[var(--color-text-muted)] text-[var(--text-md)] max-w-lg"
              style={{ lineHeight: 'var(--leading-relaxed)' }}
            >
              Описываете задачу — система строит структуру, подбирает стиль, компонует слайды. Вы правите детали, а не начинаете с белого листа.
            </p>

            <div className="flex flex-col gap-3">
              <Button variant="primary" size="lg" fullWidth={false} href="#cta" className="md:w-auto w-full">
                Создать презентацию
              </Button>
              <p
                className="text-[var(--text-sm)]"
                style={{ color: 'var(--color-text-subtle)' }}
              >
                Первая — бесплатно. Без регистрации.
              </p>
            </div>
          </div>

          <div>
            <SlidesMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
