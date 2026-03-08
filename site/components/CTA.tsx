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
              className="text-text font-bold text-3xl leading-snug tracking-tight"
            >
              Следующая презентация — без PowerPoint и без дизайнера.
            </h2>

            <p className="text-text-muted text-md leading-relaxed">
              Попробуйте на реальной задаче. Первая — бесплатно.
            </p>

            <div className="flex flex-col items-center gap-3 w-full">
              <Button variant="primary" size="lg" fullWidth href="#hero" className="w-full md:w-auto">
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
