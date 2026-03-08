import Button from '@/components/ui/Button';

function SlidesMockup() {
  return (
    <div
      className="w-full aspect-video rounded-lg overflow-hidden relative bg-bg-card"
      style={{
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
          <div className="w-2 h-2 rounded-full bg-error" />
          <div className="w-2 h-2 rounded-full bg-warning" />
          <div className="w-2 h-2 rounded-full bg-success" />
          <div
            className="ml-auto text-[10px] text-text-subtle"
            style={{
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
              className="w-full h-2 rounded-full bg-primary"
              style={{ maxWidth: '60%' }}
            />
            <div
              className="w-full h-1.5 rounded-full bg-border"
              style={{ maxWidth: '80%' }}
            />
            <div
              className="w-full h-1.5 rounded-full bg-border"
              style={{ maxWidth: '70%' }}
            />
            <div className="flex gap-3 mt-2">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="rounded-sm bg-primary-muted"
                  style={{
                    width: 48,
                    height: 32,
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
      className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)] section-glow"
    >
      <div
        className="container"
        style={{ paddingTop: 'var(--spacing-section)', paddingBottom: 'var(--spacing-section)' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <p
              className="text-accent uppercase font-medium text-xs tracking-wider"
            >
              Питч инвестору. Отчёт директорам. Обучающий курс.
            </p>

            <h1
              className="text-text font-bold text-5xl leading-tight tracking-tight"
              style={{
                fontFamily: 'var(--font-heading)',
              }}
            >
              У вас есть задача. У нас есть слайды.
            </h1>

            <p
              className="text-text-muted text-md leading-relaxed max-w-lg"
            >
              Описываете задачу — система строит структуру, подбирает стиль, компонует слайды. Вы правите детали, а не начинаете с белого листа.
            </p>

            <div className="flex flex-col gap-3">
              <Button variant="primary" size="lg" fullWidth={false} href="#cta" className="md:w-auto w-full">
                Создать презентацию
              </Button>
              <p className="text-sm text-text-subtle">
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
