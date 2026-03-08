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
      className="w-full rounded-md overflow-hidden relative bg-bg"
      style={{
        border: '1px solid var(--color-border)',
        height: '100px',
      }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 flex flex-col gap-2 p-3">
        <div
          className="rounded-sm"
          style={{ height: 6, width: '45%', backgroundColor: color, opacity: 0.9 }}
        />
        <div
          className="rounded-sm bg-border"
          style={{ height: 4, width: '65%' }}
        />
        <div
          className="rounded-sm bg-border"
          style={{ height: 4, width: '55%' }}
        />
        <div className="flex gap-1.5 mt-auto">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="flex-1 rounded-sm"
              style={{
                height: 16,
                backgroundColor: `${color}15`,
                border: `1px solid ${color}30`,
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
        className="flex flex-col gap-4 p-6 rounded-lg h-full transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] bg-bg-card"
        style={{
          border: '1px solid var(--color-border)',
        }}
      >
        <CaseMockup tag={tag} />
        <div className="flex flex-col gap-3">
          <Pill label={tag} variant="accent" />
          <h3 className="text-text font-semibold text-xl leading-snug">
            {title}
          </h3>
          <p className="text-text-muted text-base leading-relaxed">
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
