'use client';

import Button from '@/components/ui/Button';
import FadeIn from '@/components/ui/FadeIn';

function SlidesMockup() {
  return (
    <div
      className="w-full aspect-video rounded-xl overflow-hidden relative bg-bg-card group"
      style={{
        border: '1px solid var(--color-border)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(212, 175, 55, 0.08)',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
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
                className="rounded aspect-video transition-all duration-300 hover:scale-105"
                style={{
                  background: `rgba(212, 175, 55, ${opacity * 0.12})`,
                  border: i === 0 ? '1px solid var(--color-gold)' : '1px solid var(--color-border)',
                  animationDelay: `${i * 100}ms`,
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
                  className="rounded-sm bg-gold-muted transition-all duration-300 hover:scale-110 hover:bg-gold/15"
                  style={{
                    width: 48,
                    height: 32,
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Glow effect */}
      <div 
        className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, transparent 50%, rgba(229, 193, 88, 0.08) 100%)',
        }}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-[var(--header-height-mobile)] md:pt-[var(--header-height-desktop)] section-glow relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(212, 175, 55, 0.06), transparent)',
        }}
      />
      
      <div
        className="container relative z-10"
        style={{ paddingTop: 'var(--spacing-section)', paddingBottom: 'var(--spacing-section)' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <FadeIn direction="up" delay={0}>
              <p
                className="text-gold uppercase font-medium text-xs tracking-[0.15em]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Питч инвестору · Отчёт директорам · Обучающий курс
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={1}>
              <h1
                className="text-text font-semibold text-4xl md:text-5xl lg:text-6xl leading-tight"
                style={{
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '0.02em',
                }}
              >
                У вас есть задача.
                <span className="block text-gold mt-2">У нас есть слайды.</span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={2}>
              <p
                className="text-text-muted text-lg leading-relaxed max-w-lg"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Описываете задачу — система строит структуру, подбирает стиль, компонует слайды. Вы правите детали, а не начинаете с белого листа.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={3}>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <Button variant="primary" size="lg" fullWidth={false} href="#cta" className="sm:w-auto w-full">
                  Создать презентацию
                </Button>
                <span className="text-sm text-text-subtle" style={{ fontFamily: 'var(--font-body)' }}>
                  Первая — бесплатно. Без регистрации.
                </span>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="scale" delay={2} duration={800}>
            <div className="relative">
              <SlidesMockup />
              
              {/* Floating badge */}
              <div 
                className="absolute -bottom-4 -right-4 bg-bg-card border border-gold/30 rounded-lg px-4 py-2 shadow-lg"
                style={{
                  animation: 'float 3s ease-in-out infinite',
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                  <span className="text-xs text-text-muted" style={{ fontFamily: 'var(--font-body)' }}>AI генерация</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}
