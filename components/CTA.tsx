import FadeIn from '@/components/ui/FadeIn';
import Button from '@/components/ui/Button';

export default function CTA() {
  return (
    <section id="cta" className="cta-glow relative overflow-hidden" style={{ paddingBlock: 'var(--spacing-section)' }}>
      <div className="container relative z-10">
        <FadeIn direction="scale" duration={700}>
          <div
            className="relative mx-auto text-center flex flex-col items-center gap-6 rounded-2xl p-8 md:p-14 border border-border bg-bg-card overflow-hidden group"
            style={{ maxWidth: '720px' }}
          >
            {/* Animated background glow */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-60 group-hover:opacity-80 transition-opacity duration-700"
              style={{
                background: 'radial-gradient(ellipse 100% 80% at 50% 0%, rgba(79, 91, 213, 0.15), transparent 60%)',
              }}
            />
            
            {/* Subtle border glow animation */}
            <div 
              className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                boxShadow: 'inset 0 0 0 1px rgba(124, 140, 248, 0.3)',
              }}
            />
            
            <FadeIn direction="up" delay={1}>
              <h2
                className="relative text-text font-bold text-3xl md:text-4xl leading-tight tracking-tight"
              >
                Следующая презентация —
                <span className="block text-accent mt-1">без PowerPoint и дизайнера.</span>
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={2}>
              <p className="relative text-text-muted text-lg leading-relaxed max-w-md">
                Попробуйте на реальной задаче. Первая презентация — бесплатно. Результат через 3–5 минут.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={3}>
              <div className="relative flex flex-col items-center gap-4 w-full">
                <Button variant="primary" size="lg" fullWidth href="#hero" className="w-full md:w-auto md:min-w-[320px]">
                  Создать презентацию
                </Button>
                <p className="text-sm text-text-subtle flex items-center gap-2">
                  <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Без регистрации · Результат виден сразу
                </p>
              </div>
            </FadeIn>
            
            {/* Trust indicators */}
            <FadeIn direction="up" delay={4}>
              <div className="relative flex items-center justify-center gap-8 mt-4 pt-6 border-t border-border/50 w-full">
                {[
                  { value: '10K+', label: 'презентаций' },
                  { value: '4.9', label: 'рейтинг' },
                  { value: '3 мин', label: 'среднее время' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-text">{stat.value}</div>
                    <div className="text-xs text-text-subtle uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
