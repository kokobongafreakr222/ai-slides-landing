import FadeIn from '@/components/ui/FadeIn';
import SectionHeader from '@/components/ui/SectionHeader';

interface StepCardProps {
  number: '01' | '02' | '03';
  title: string;
  description: string;
  isLast?: boolean;
  index: number;
}

function StepCard({ number, title, description, isLast, index }: StepCardProps) {
  return (
    <FadeIn delay={index} className="relative flex flex-col md:flex-row gap-0">
      <div className="flex md:flex-col items-start gap-4 flex-1">
        <div className="relative flex flex-col items-center">
          <span
            className="font-bold text-[var(--text-2xl)] select-none"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--color-primary)',
              lineHeight: 1,
            }}
          >
            {number}
          </span>
          {!isLast && (
            <div
              className="block md:hidden mt-4 w-px flex-1 min-h-[32px]"
              style={{ backgroundColor: 'var(--color-border)' }}
              aria-hidden="true"
            />
          )}
        </div>

        <div className="flex flex-col gap-2 pb-8 md:pb-0">
          <h3
            className="text-[var(--color-text)] font-semibold text-[var(--text-xl)]"
            style={{ lineHeight: 'var(--leading-snug)' }}
          >
            {title}
          </h3>
          <p
            className="text-[var(--color-text-muted)] text-[var(--text-base)]"
            style={{ lineHeight: 'var(--leading-relaxed)' }}
          >
            {description}
          </p>
        </div>
      </div>

      {!isLast && (
        <div
          className="hidden md:block absolute top-3 w-full h-px"
          style={{
            backgroundColor: 'var(--color-border)',
            left: '50%',
            width: '100%',
          }}
          aria-hidden="true"
        />
      )}
    </FadeIn>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{
        backgroundColor: 'var(--color-bg-alt)',
        paddingBlock: 'var(--spacing-section)',
      }}
    >
      <div className="container">
        <FadeIn>
          <SectionHeader
            title="Три шага — и презентация готова."
            align="center"
          />
        </FadeIn>

        <div className="relative mt-12 grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8">
          <StepCard
            number="01"
            title="Описываете задачу."
            description="Формат, аудитория, тон, ключевые тезисы. Можно в свободной форме — система разберётся."
            index={1}
          />
          <StepCard
            number="02"
            title="Система строит структуру."
            description="Нарратив, компоновка слайдов, визуальная логика — без вашего участия. Один тезис — один слайд. Заголовки как утверждения, данные отдельно от выводов."
            index={2}
          />
          <StepCard
            number="03"
            title="Правите детали. Скачиваете."
            description="Любой элемент редактируется. Экспорт в PowerPoint, PDF, Google Slides — в один клик."
            isLast
            index={3}
          />
        </div>

        <FadeIn delay={4} className="mt-10 text-center">
          <p
            className="inline-block text-[var(--color-text-muted)] text-[var(--text-sm)] px-4 py-2 rounded-[var(--radius-full)]"
            style={{
              border: '1px solid var(--color-border)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            3–5 минут от задачи до готового deck.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
