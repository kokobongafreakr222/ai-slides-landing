import FadeIn from '@/components/ui/FadeIn';
import Button from '@/components/ui/Button';

export default function CTA() {
  return (
    <section id="cta" className="cta-glow" style={{ paddingBlock: 'var(--spacing-section)' }}>
      <div className="container">
        <FadeIn>
          <div
            className="relative mx-auto text-center flex flex-col items-center gap-6 rounded-xl p-8 md:p-12 border border-border bg-bg-card"
            style={{ maxWidth: '680px' }}
          >
            <div
              className="absolute inset-0 rounded-xl pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(79, 91, 213, 0.1), transparent)',
              }}
            />
            <h2
              className="relative text-text font-bold text-3xl leading-snug tracking-tight"
            >
              Следующая презентация — без PowerPoint и без дизайнера.
            </h2>

            <p className="relative text-text-muted text-md leading-relaxed">
              Попробуйте на реальной задаче. Первая — бесплатно.
            </p>

            <div className="relative flex flex-col items-center gap-3 w-full">
              <Button variant="primary" size="lg" fullWidth href="#hero" className="w-full md:w-auto md:min-w-[280px]">
                Создать презентацию
              </Button>
              <p className="text-sm text-text-subtle">
                Без регистрации. Результат виден сразу.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
