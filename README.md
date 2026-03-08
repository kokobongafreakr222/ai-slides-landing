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

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript (strict)
- Шрифты: Cinzel (headings), Cormorant Garamond (body), JetBrains Mono (mono)

---

## Структура

```
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

## Редизайн (Март 2026)

Полный редизайн в premium стиле:
- **Типографика:** Cinzel + Cormorant Garamond
- **Цвета:** Тёмная тема с золотым акцентом (#d4af37)
- **Анимации:** Micro-animations, hover effects, gold glow
- **Иконки:** Только SVG, без эмодзи
