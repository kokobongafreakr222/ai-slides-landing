# DeckMind — AI-ассистент для создания презентаций

## Проект

Маркетинговый лендинг для DeckMind — AI-ассистента, который создаёт презентации из описания задачи. Не шаблонный конструктор, а генератор, который думает о структуре, компоновке и визуальной логике вместо пользователя.

**Ниша:** Сервисы для экспертов, спикеров, агентств и бизнесов — презентации "на вчера".

**ЦА:** Эксперты-одиночки, корпоративные менеджеры, маркетинговые агентства.

## Запуск

```bash
cd site && npm install && npm run dev
```

Открыть http://localhost:3000

### Сборка

```bash
cd site && npm run build
```

## Стек

| Слой | Технология |
|------|-----------|
| Фреймворк | Next.js 15 (App Router) |
| UI | React 19 |
| Стили | Tailwind CSS 4 + CSS Custom Properties |
| Язык | TypeScript (strict) |
| Шрифты | Inter, JetBrains Mono (next/font) |
| Тема | Тёмная (#0a0a0f) |

## Структура проекта

```
ai-slides-landing/
├── STRATEGY_BRIEF.md          # ЦА, боли, УТП, возражения
├── COPY_FRAMEWORK.md          # Голос бренда, 23 запрещённых слова
├── SITE_ARCHITECTURE.md       # Дизайн-токены, компоненты, breakpoints
├── SITE_COPY.md               # Все тексты для сайта
├── SECURITY_AUDIT.md          # Security-аудит
├── STYLE_AUDIT.md             # Визуальный аудит (4 breakpoints)
├── TEXT_AUDIT.md               # Проверка запрещённых слов
├── PERF_AUDIT.md              # React/Next.js оптимизация
├── QA_REPORT.md               # E2E тестирование
├── FINAL_AUDIT.md             # Сводная таблица аудитов
├── UNIVERSAL_SITE_SWARM.md    # Промпт сварма (reference)
│
└── site/                      # Next.js проект
    ├── app/
    │   ├── layout.tsx         # Root layout, шрифты, metadata
    │   ├── page.tsx           # Главная — сборка всех секций
    │   └── globals.css        # Tailwind + CSS custom properties
    ├── components/
    │   ├── Header.tsx         # Sticky header + backdrop-blur
    │   ├── Hero.tsx           # Главный экран
    │   ├── Problem.tsx        # 3 карточки проблем + B2B
    │   ├── Solution.tsx       # Механика + сравнение + pill-теги
    │   ├── HowItWorks.tsx     # 3 шага с соединяющими линиями
    │   ├── Cases.tsx          # 4 кейса (grid 2x2)
    │   ├── FAQ.tsx            # Accordion (7 вопросов, ARIA)
    │   ├── CTA.tsx            # Финальный CTA
    │   ├── Footer.tsx         # Минимальный footer
    │   ├── ui/
    │   │   ├── Button.tsx     # Primary/secondary/ghost/outline
    │   │   ├── Card.tsx       # Контейнер с вариантами
    │   │   ├── SectionHeader.tsx  # Eyebrow + title + subtitle
    │   │   ├── Pill.tsx       # Теги стилей
    │   │   └── FadeIn.tsx     # IntersectionObserver анимации
    │   └── icons/
    │       └── index.tsx      # SVG иконки
    ├── next.config.ts         # Security headers
    ├── package.json
    └── tsconfig.json

```

## Деплой

### Vercel (рекомендуется)

```bash
cd site
npx vercel
```

### Railway

```bash
cd site
railway up
```

### Ручной

```bash
cd site
npm run build
npm start
```

## Создано

Agent Swarm: UNIVERSAL_SITE_SWARM v2.0
- Волна 1: Картозия-Стратег + Картозия-Копирайтер (adversarial обмен)
- Волна 2: UX-Архитектор + Контент-Райтер
- Волна 3: Фронтенд-разработчик
- Волна 4: 5 валидаторов параллельно (Security, Style, Text, React, QA)
- Волна 5: Финальная сборка
