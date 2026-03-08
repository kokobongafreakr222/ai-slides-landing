import FadeIn from '@/components/ui/FadeIn';
import SectionHeader from '@/components/ui/SectionHeader';
import Pill from '@/components/ui/Pill';

interface CaseCardProps {
  tag: string;
  title: string;
  description: string;
  index: number;
}

function CaseMockup({ tag }: { tag: string }) {
  const colors: Record<string, string> = {
    'Консультант': '#5b6af0',
    'Менеджер': '#3ecf8e',
    'Эксперт': '#f5a623',
    'Агентство': '#7c8cf8',
  };
  const color = colors[tag] || '#5b6af0';

  return (
    <div
      className="w-full aspect-video rounded-[var(--radius-md)] overflow-hidden relative"
      style={{
        background: 'var(--color-bg)',
        border: '1px solid var(--color-border)',
      }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 flex flex-col gap-3 p-4">
        <div
          className="rounded-sm"
          style={{ height: 8, width: '55%', backgroundColor: color, opacity: 0.9 }}
        />
        <div
          className="rounded-sm"
          style={{ height: 5, width: '75%', backgroundColor: 'var(--color-border)' }}
        />
        <div
          className="rounded-sm"
          style={{ height: 5, width: '65%', backgroundColor: 'var(--color-border)' }}
        />
        <div className="flex gap-2 mt-auto">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="flex-1 rounded-sm"
              style={{
                height: 24,
                backgroundColor: `${color}20`,
                border: `1px solid ${color}40`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CaseCard({ tag, title, description, index }: CaseCardProps) {
  return (
    <FadeIn delay={index}>
      <article
        className="flex flex-col gap-4 p-6 rounded-[var(--radius-lg)] h-full transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
        style={{
          backgroundColor: 'var(--color-bg-card)',
          border: '1px solid var(--color-border)',
        }}
      >
        <CaseMockup tag={tag} />
        <div className="flex flex-col gap-3">
          <Pill label={tag} variant="accent" />
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
      </article>
    </FadeIn>
  );
}

export default function Cases() {
  return (
    <section id="cases" style={{ paddingBlock: 'var(--spacing-section)' }}>
      <div className="container">
        <FadeIn>
          <SectionHeader title="Работает в реальных задачах." align="center" />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <CaseCard
            tag="Консультант"
            title="Питч инвестору за вечер."
            description="10 минут, строгий стиль, три ключевых аргумента. Структура выстроена, данные отделены от выводов — осталось добавить цифры."
            index={1}
          />
          <CaseCard
            tag="Менеджер"
            title="Квартальный отчёт без двух дней на оформление."
            description="Данные, динамика, выводы. Корпоративные цвета загружены через брендбук — система адаптировалась без лишних итераций."
            index={2}
          />
          <CaseCard
            tag="Эксперт"
            title="Обучающий курс на 40 слайдов."
            description="Структура модулей выстроена, единый стиль держится до последнего слайда. Содержание — ваше. Архитектура — наша."
            index={3}
          />
          <CaseCard
            tag="Агентство"
            title="Три варианта стиля за один сеанс."
            description="Клиентский deck в трёх вариантах под разные сегменты. Дизайнер занят другим проектом — delivery не сдвинулся."
            index={4}
          />
        </div>
      </div>
    </section>
  );
}
