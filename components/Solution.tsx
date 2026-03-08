import FadeIn from '@/components/ui/FadeIn';
import SectionHeader from '@/components/ui/SectionHeader';
import Pill from '@/components/ui/Pill';
import { IconCheck, IconX } from '@/components/icons';

const styles = ['Минимализм', 'Corporate', 'Storytelling', 'Vibrant', 'Dark', 'Light'];

interface ComparisonRow {
  tool: string;
  description: string;
  isUs: boolean;
}

const comparisonData: ComparisonRow[] = [
  {
    tool: 'Canva',
    description: 'Вы делаете всё сам: выбираете шаблон, подгоняете, мучаетесь с выравниванием',
    isUs: false,
  },
  {
    tool: 'Gamma',
    description: 'Генерирует из текста, но контроль стиля ограничен — под нишу не адаптирует',
    isUs: false,
  },
  {
    tool: 'DeckMind',
    description: 'Вы ставите задачу — система строит структуру и слайды под вашу аудиторию',
    isUs: true,
  },
];

export default function Solution() {
  return (
    <section id="solution" style={{ paddingBlock: 'var(--spacing-section)' }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <FadeIn>
            <SectionHeader
              title="Система думает о структуре. Вы думаете о содержании."
              subtitle="Вы ставите задачу: формат, аудитория, тон, ключевые тезисы. Система строит нарратив, раскладывает по слайдам, подбирает визуальную логику. Результат — через 3–5 минут. Не шаблон — архитектура под вашу задачу."
            />

            <div className="mt-8">
              <p
                className="text-xs uppercase font-medium mb-3 text-text-subtle tracking-[0.15em]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Доступные стили
              </p>
              <div className="scroll-x flex flex-nowrap gap-2 pb-1">
                {styles.map((style) => (
                  <Pill key={style} label={style} variant="muted" />
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={1}>
            <div
              className="rounded-lg overflow-hidden"
              style={{ border: '1px solid var(--color-border)' }}
            >
              <div
                className="grid grid-cols-[1fr_2fr] text-xs uppercase font-medium px-4 py-3 bg-bg-card text-text-subtle tracking-wide"
                style={{
                  borderBottom: '1px solid var(--color-border)',
                }}
              >
                <span style={{ fontFamily: 'var(--font-heading)' }}>Инструмент</span>
                <span style={{ fontFamily: 'var(--font-heading)' }}>Что происходит</span>
              </div>

              {comparisonData.map((row, i) => (
                <div
                  key={row.tool}
                  className="grid grid-cols-[1fr_2fr] items-start gap-4 px-4 py-4"
                  style={{
                    backgroundColor: row.isUs ? 'var(--color-gold-muted)' : 'var(--color-bg-card)',
                    borderBottom: i < comparisonData.length - 1 ? '1px solid var(--color-border)' : undefined,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className={row.isUs ? 'text-gold' : 'text-text-subtle'}>
                      {row.isUs ? <IconCheck size={14} /> : <IconX size={14} />}
                    </span>
                    <span
                      className="font-semibold text-sm"
                      style={{ color: row.isUs ? 'var(--color-text)' : 'var(--color-text-muted)', fontFamily: 'var(--font-heading)' }}
                    >
                      {row.tool}
                    </span>
                  </div>
                  <span
                    className="text-sm leading-relaxed"
                    style={{
                      color: row.isUs ? 'var(--color-text)' : 'var(--color-text-muted)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {row.description}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
