import FadeIn from '@/components/ui/FadeIn';
import Button from '@/components/ui/Button';

export default function CTA() {
  return (
    <section id="cta" style={{ paddingBlock: 'var(--spacing-section)' }}>
      <div className="container">
        <FadeIn>
          <div
            className="mx-auto text-center flex flex-col items-center gap-6"
            style={{ maxWidth: '640px', paddingBlock: '40px' }}
          >
            <h2
              className="text-[var(--color-text)] font-bold text-[var(--text-3xl)]"
              style={{
                lineHeight: 'var(--leading-snug)',
                letterSpacing: 'var(--tracking-tight)',
              }}
            >
              Следующая презентация — без PowerPoint и без дизайнера.
            </h2>

            <p
              className="text-[var(--color-text-muted)] text-[var(--text-md)]"
              style={{ lineHeight: 'var(--leading-relaxed)' }}
            >
              Попробуйте на реальной задаче. Первая — бесплатно.
            </p>

            <div className="flex flex-col items-center gap-3 w-full">
              <Button variant="primary" size="lg" fullWidth href="#hero" className="w-full md:w-auto">
                Создать презентацию
              </Button>
              <p
                className="text-[var(--text-sm)]"
                style={{ color: 'var(--color-text-subtle)' }}
              >
                Без регистрации. Результат виден сразу.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
