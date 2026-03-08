'use client';

import { useState } from 'react';
import FadeIn from '@/components/ui/FadeIn';
import SectionHeader from '@/components/ui/SectionHeader';
import { IconPlus, IconMinus } from '@/components/icons';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function AccordionItem({ question, answer, isOpen, onToggle, index }: AccordionItemProps) {
  const id = `faq-answer-${index}`;
  const triggerId = `faq-trigger-${index}`;

  return (
    <div style={{ borderBottom: '1px solid var(--color-border)' }}>
      <button
        id={triggerId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={id}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        style={{
          color: 'var(--color-text)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          minHeight: '44px',
        }}
      >
        <span
          className="font-medium text-[var(--text-md)]"
          style={{ lineHeight: 'var(--leading-snug)' }}
        >
          {question}
        </span>
        <span
          className="flex-shrink-0 transition-transform duration-200"
          style={{ color: 'var(--color-accent)' }}
          aria-hidden="true"
        >
          {isOpen ? <IconMinus size={20} /> : <IconPlus size={20} />}
        </span>
      </button>

      <div
        id={id}
        role="region"
        aria-labelledby={triggerId}
        style={{
          maxHeight: isOpen ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 250ms ease',
        }}
      >
        <p
          className="text-[var(--text-base)] pb-5"
          style={{
            color: 'var(--color-text-muted)',
            lineHeight: 'var(--leading-relaxed)',
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

const faqItems = [
  {
    question: 'Будет ли шаблонно, без моего стиля?',
    answer:
      'Система не берёт готовый шаблон — она собирает структуру под ваш контент и заданный стиль. Укажите нишу, тон, аудиторию — и получите deck, который не похож на Canva-заготовку. Можно показать пример своей прошлой работы: система учтёт визуальную логику.',
  },
  {
    question: 'Мне всё равно придётся всё переделывать?',
    answer:
      'Переделка занимает 20 минут, не 4 часа. Структура уже правильная, визуальная логика выстроена — вы корректируете детали. Это в 5–10 раз быстрее, чем с нуля. Если что-то не так — итерации без дополнительной платы.',
  },
  {
    question: 'Можно загрузить брендбук с корпоративными цветами?',
    answer:
      'Да. Загружаете брендбук или указываете цвета и шрифты вручную — система адаптирует deck под корпоративные ограничения. Это не проблема, это входные данные.',
  },
  {
    question: 'Экспортируется в PowerPoint / PDF / Google Slides?',
    answer:
      'Да, все три формата. Скачиваете в один клик после того, как отредактировали детали. Файл открывается в привычном редакторе без потери форматирования.',
  },
  {
    question: 'Это дорого. Как окупается?',
    answer:
      'Один час работы дизайнера стоит 2 000–5 000 ₽. Один deck — от 10 000 ₽. Один месяц подписки дешевле одного заказа. Первая презентация бесплатно — проверьте сами, прежде чем платить.',
  },
  {
    question: 'ИИ может исказить мои тезисы?',
    answer:
      'Вы всегда контролируете финальный результат — редактировать можно любой элемент. Система предлагает, вы утверждаете. Ваши слова, ваши мысли — но уже в структуре, которую не нужно придумывать самому.',
  },
  {
    question: 'Чем отличается от Canva и Gamma?',
    answer:
      'Canva — это редактор. Вы всё равно делаете всё сам: выбираете шаблон, подгоняете, тратите время на детали. Gamma генерирует из текста, но не думает об архитектуре под вашу нишу. Мы берём задачу целиком: нарратив, структура слайдов, визуальная логика — всё это уже в системе. Вы ставите задачу — не тащите блоки по экрану.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      style={{
        backgroundColor: 'var(--color-bg-alt)',
        paddingBlock: 'var(--spacing-section)',
      }}
    >
      <div className="container">
        <FadeIn>
          <SectionHeader title="Ожидаемые вопросы." align="center" />
        </FadeIn>

        <FadeIn delay={1} className="mx-auto mt-12" style={{ maxWidth: '720px' }}>
          <div style={{ borderTop: '1px solid var(--color-border)' }}>
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
                index={i}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
