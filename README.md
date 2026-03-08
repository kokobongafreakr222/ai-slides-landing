# DeckMind — AI-ассистент для создания презентаций

**Статус:** Готов к деплою  
**URL:** (требуется деплой)  
**Создан:** Март 2026

---

## Что это

AI-ассистент, который создаёт презентации из текстового описания. Не шаблонный конструктор — а генератор, который думает о структуре, компоновке и визуальной логике.

**ЦА:** Эксперты, спикеры, агентства, бизнесы — презентации "на вчера"

---

## Быстрый старт

```bash
cd site
npm install
npm run dev
```

Открыть http://localhost:3000

## Сборка

```bash
npm run build
```

---

## Стек

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript (strict)
- Шрифты: Inter, JetBrains Mono

---

## Документация

| Файл | Описание |
|------|----------|
| STRATEGY_BRIEF.md | ЦА, боли, УТП, возражения |
| COPY_FRAMEWORK.md | Голос бренда, запрещённые слова |
| SITE_ARCHITECTURE.md | Дизайн-токены, компоненты |
| SITE_COPY.md | Все тексты |
| SECURITY_AUDIT.md | Security-аудит |
| PERF_AUDIT.md | React/Next.js оптимизация |
| QA_REPORT.md | E2E тестирование |
| FINAL_AUDIT.md | Сводная таблица |

---

## Деплой

### Vercel
```bash
npx vercel
```

### Railway
```bash
railway up
```

---

## Структура

```
site/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── Solution.tsx
│   ├── HowItWorks.tsx
│   ├── Cases.tsx
│   ├── FAQ.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   └── ui/
└── next.config.ts
```

---

## Создано

Agent Swarm: UNIVERSAL_SITE_SWARM v2.0
