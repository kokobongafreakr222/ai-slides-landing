# SITE_ARCHITECTURE.md — UX-архитектура и дизайн-система
## AI-ассистент для создания презентаций

---

## Обоснование дизайн-решений

### Тема: тёмная
ЦА — деловые люди: консультанты, менеджеры, руководители агентств. Работают в конференц-залах, на MacBook, в ночь перед питчем. Тёмная тема снижает визуальную усталость, создаёт ощущение инструмента, а не рекламной страницы. Конкуренты (Canva, Gamma) — светлые и игривые. Тёмный фон + точечные акценты = серьёзный продукт для серьёзных задач.

### Типографика: геометрическая + читаемая
- Заголовки: `Inter` — нейтральный, деловой, читаем на любом экране
- Тело: `Inter` — единый шрифт снижает когнитивную нагрузку
- Моно (код/данные): `JetBrains Mono` — для числовых акцентов и технических деталей

### Анимации: сдержанные
IntersectionObserver, появление снизу с opacity. Никаких параллакс-эффектов, никаких частиц, никакого "wow-фактора". Инструмент не должен отвлекать от сообщения.

---

## Карта страниц

Один URL: `/`

### Якорные секции (в порядке сверху вниз)

| id | Секция |
|----|--------|
| `#hero` | Hero — главный экран |
| `#problem` | Проблема |
| `#solution` | Решение |
| `#how-it-works` | Как работает |
| `#cases` | Кейсы / Примеры |
| `#faq` | FAQ |
| `#cta` | Финальный CTA |

---

## Блочная структура

### Header (sticky)
**Назначение:** Навигация + CTA доступны в любой момент скролла.

**Компоненты:**
- Логотип (текстовый, слева)
- Nav-ссылки: Как работает / Кейсы / FAQ (скрыты на мобильном)
- Кнопка CTA: "Создать презентацию" (primary, справа)

**Мобильный (до 768px):**
- Логотип + кнопка CTA. Nav-ссылки скрыты (нет бургер-меню — CTA важнее навигации).
- Высота: 56px. Фон: `--color-bg` с `backdrop-filter: blur(12px)` + бордер снизу.

**Десктоп (768px+):**
- Высота: 64px. Nav-ссылки видны. Кнопка CTA.

---

### Hero (`#hero`)
**Назначение:** Единственный экран, который видит пользователь без скролла. Задача — удержать и дать понять, что это про него.

**Компоненты:**
- Суперзаголовок (eyebrow): строка с ситуацией — "Питч инвестору. Отчёт директорам. Обучающий курс."
- H1 (главный заголовок): "У вас есть задача. У нас есть слайды."
- Подзаголовок: конкретная механика в 1-2 предложения. "Описываете задачу — система строит структуру, подбирает стиль, компонует слайды. Вы правите детали."
- CTA-блок: кнопка primary "Создать презентацию" + строка снятия риска "Первая — бесплатно. Без регистрации."
- Визуальный якорь: мокап интерфейса или абстрактная preview слайда (статичный, без анимации загрузки)

**Мобильный:**
- Eyebrow: 12px, uppercase, `--color-accent`, letter-spacing 0.08em
- H1: 32px / line-height 1.15
- Подзаголовок: 16px / `--color-text-muted`
- CTA: полная ширина кнопка
- Мокап: под CTA, ширина 100%, border-radius `--radius-lg`
- padding-top: 96px (под sticky header)

**Десктоп:**
- Двухколоночная сетка: текст слева (50%), мокап справа (50%)
- H1: 56px / line-height 1.1
- CTA: inline, не растянутый

---

### Проблема (`#problem`)
**Назначение:** Узнавание. Пользователь должен сказать "это про меня". Лёгкое раздражение от знакомой ситуации.

**Компоненты:**
- Заголовок секции: "Вы знаете, что хотите сказать. Слайды — отдельная история."
- Три карточки проблем (grid 1→3):
  1. **PowerPoint отнимает часы.** Выравнивание, шрифты, цвета — технические детали вместо смысла.
  2. **Дизайнер — это дорого и долго.** От 10 000 ₽ за deck. Итерации — отдельно.
  3. **Шаблоны выглядят как шаблоны.** Canva узнаётся с первого взгляда.
- Опционально (для B2B-аудитории): подблок "Для агентств" — "Каждый клиент в своём стиле. Дизайнер — узкое горлышко. Итерации съедают маржу."

**Мобильный:**
- Карточки: вертикальный стек, gap 16px
- Каждая карточка: иконка (24px, `--color-accent`) + заголовок + 1-2 предложения

**Десктоп:**
- Grid 3 колонки, gap 24px

---

### Решение (`#solution`)
**Назначение:** Ясность. Объяснить механику без воды.

**Компоненты:**
- Заголовок: "Система думает о структуре. Вы думаете о содержании."
- Описание механики: "Вы ставите задачу: формат, аудитория, тон, ключевые тезисы. Система строит нарратив, раскладывает по слайдам, подбирает визуальную логику. Результат — через 3–5 минут."
- Сравнительная таблица или список отличий от конкурентов:
  - Canva: ты делаешь сам
  - Gamma: генерация без контроля стиля
  - Мы: задача → структура → слайды под вашу нишу
- Список стилей (pill-теги): Минимализм / Corporate / Storytelling / Vibrant / Dark / Light

**Мобильный:**
- Заголовок + описание — вертикально
- Сравнение — простой список с иконками
- Pill-теги — горизонтальный скролл

**Десктоп:**
- Опционально: двухколоночный layout: текст + visual

---

### Как работает (`#how-it-works`)
**Назначение:** Снятие тревоги. "Это реально просто."

**Компоненты:**
- Заголовок: "Три шага — и презентация готова."
- StepCard × 3:
  1. **Описываете задачу.** Формат, аудитория, тон, ключевые тезисы. Можно в свободной форме.
  2. **Система строит структуру.** Нарратив, компоновка слайдов, визуальная логика — без вашего участия.
  3. **Правите детали. Скачиваете.** Любой элемент редактируется. Экспорт в PowerPoint, PDF, Google Slides.
- Временной акцент: "3–5 минут от задачи до готового deck."

**Мобильный:**
- Вертикальный стек с нумерацией (01 / 02 / 03)
- Соединяющая линия между шагами (CSS, вертикальная)

**Десктоп:**
- Горизонтальный layout: три колонки с соединяющими линиями

---

### Кейсы / Примеры (`#cases`)
**Назначение:** Доверие через узнавание. "Похоже на мою ситуацию."

**Компоненты:**
- Заголовок: "Работает в реальных задачах."
- CaseCard × 4 (grid 2×2 на desktop, стек на mobile):
  1. **Питч инвестору.** Консультант. 10 минут, строгий стиль, три ключевых аргумента.
  2. **Квартальный отчёт.** Менеджер. Данные + динамика + выводы. Корпоративные цвета.
  3. **Обучающий курс.** Эксперт. 40 слайдов, структура модулей, единый стиль.
  4. **Клиентский deck.** Агентство. Три варианта стиля под разные сегменты за один сеанс.
- Каждый кейс: тег ниши + описание задачи (1-2 предложения) + визуальный превью (мокап слайда)

**Мобильный:**
- Вертикальный стек, каждая карточка занимает полную ширину

**Десктоп:**
- Grid 2×2, gap 24px
- Hover-эффект: лёгкое поднятие карточки (translateY -4px, transition 200ms)

---

### FAQ (`#faq`)
**Назначение:** Снятие финальных возражений перед CTA.

**Компоненты:**
- Заголовок: "Ожидаемые вопросы."
- AccordionItem × 7:
  1. Будет ли шаблонно, без моего стиля?
  2. Мне всё равно придётся всё переделывать?
  3. Можно загрузить брендбук с корпоративными цветами?
  4. Экспортируется в PowerPoint / PDF / Google Slides?
  5. Это дорого. Как окупается?
  6. ИИ может исказить мои тезисы?
  7. Чем отличается от Canva и Gamma?

**Мобильный и десктоп (одинаково):**
- Аккордеон на полную ширину контейнера (max-width 720px, центрирован)
- Открывается один элемент за раз (exclusive)
- Иконка: + / − справа
- Анимация: max-height transition 250ms ease

---

### Финальный CTA (`#cta`)
**Назначение:** Конвертация. Максимально низкий барьер входа.

**Компоненты:**
- Заголовок: "Следующая презентация — без PowerPoint и без дизайнера."
- Подзаголовок: "Попробуйте на реальной задаче. Первая — бесплатно."
- Кнопка: "Создать презентацию" (large, primary)
- Строка снятия риска: "Без регистрации. Результат виден сразу."
- Опционально: input для email (если есть waitlist/ранний доступ)

**Мобильный:**
- Вертикальный stack, кнопка — полная ширина
- Секция с вертикальным padding 80px

**Десктоп:**
- Центрированный блок, max-width 640px
- Padding 120px вертикально

---

### Footer
**Назначение:** Юридика и контакты. Минимальный.

**Компоненты:**
- Логотип (текст)
- Ссылки: Политика конфиденциальности / Условия использования
- Копирайт: © 2025
- Опционально: ссылка на email / Telegram

**Мобильный и десктоп:**
- Одна строка (flex, space-between) или два уровня на совсем маленьком экране
- Цвет: `--color-text-muted`
- Border-top: 1px solid `--color-border`

---

## Дизайн-токены (CSS Custom Properties)

```css
:root {
  /* ─── Colors ─── */
  --color-bg: #0a0a0f;
  --color-bg-alt: #111118;
  --color-bg-card: #16161e;
  --color-border: #1e1e2a;

  --color-primary: #5b6af0;
  --color-primary-hover: #4a58e0;
  --color-primary-muted: rgba(91, 106, 240, 0.12);

  --color-accent: #7c8cf8;
  --color-accent-muted: rgba(124, 140, 248, 0.15);

  --color-text: #e8e8f0;
  --color-text-muted: #7a7a8c;
  --color-text-subtle: #4a4a5e;

  --color-success: #3ecf8e;
  --color-warning: #f5a623;
  --color-error: #e54d4d;

  /* ─── Typography ─── */
  --font-heading: 'Inter', system-ui, -apple-system, sans-serif;
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

  /* Font sizes (fluid, clamp-based) */
  --text-xs: clamp(0.7rem, 0.65rem + 0.25vw, 0.75rem);
  --text-sm: clamp(0.8rem, 0.75rem + 0.25vw, 0.875rem);
  --text-base: clamp(0.9rem, 0.85rem + 0.25vw, 1rem);
  --text-md: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1rem + 0.6vw, 1.25rem);
  --text-xl: clamp(1.25rem, 1rem + 1.25vw, 1.5rem);
  --text-2xl: clamp(1.5rem, 1.1rem + 2vw, 2rem);
  --text-3xl: clamp(1.875rem, 1.3rem + 2.875vw, 2.5rem);
  --text-4xl: clamp(2.25rem, 1.5rem + 3.75vw, 3rem);
  --text-5xl: clamp(2.75rem, 1.75rem + 5vw, 3.75rem);

  /* Font weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Line heights */
  --leading-tight: 1.1;
  --leading-snug: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.65;

  /* Letter spacing */
  --tracking-tight: -0.02em;
  --tracking-normal: 0em;
  --tracking-wide: 0.04em;
  --tracking-wider: 0.08em;

  /* ─── Spacing ─── */
  --spacing-section: clamp(64px, 5vw + 32px, 120px);
  --spacing-block: clamp(32px, 3vw + 16px, 64px);
  --spacing-element: clamp(16px, 1.5vw + 8px, 24px);

  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-5: 20px;
  --spacing-6: 24px;
  --spacing-8: 32px;
  --spacing-10: 40px;
  --spacing-12: 48px;
  --spacing-16: 64px;
  --spacing-20: 80px;
  --spacing-24: 96px;

  /* ─── Border radius ─── */
  --radius-xs: 4px;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* ─── Shadows ─── */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.4);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.5);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.6);
  --shadow-glow: 0 0 24px rgba(91, 106, 240, 0.2);

  /* ─── Transitions ─── */
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;

  /* ─── Layout ─── */
  --container-max: 1200px;
  --container-padding: clamp(16px, 4vw, 48px);
  --header-height-mobile: 56px;
  --header-height-desktop: 64px;

  /* ─── Z-index scale ─── */
  --z-base: 0;
  --z-raised: 10;
  --z-overlay: 100;
  --z-modal: 200;
  --z-header: 300;
  --z-toast: 400;
}
```

---

## Breakpoints

| Breakpoint | px | Назначение |
|---|---|---|
| `xs` | 320px | Маленький мобильный (iPhone SE) |
| `sm` | 375px | Стандартный мобильный |
| `md` | 768px | Планшет / переход к desktop-layout |
| `lg` | 1024px | Ноутбук |
| `xl` | 1440px | Широкий desktop |

### Tailwind config (если используется Tailwind 4)
```css
@theme {
  --breakpoint-xs: 320px;
  --breakpoint-sm: 375px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1440px;
}
```

---

## Компоненты

### Button
**Описание:** Основной интерактивный элемент, CTA-якорь.

**Props:**
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost' | 'outline';
  size: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  href?: string; // если ссылка — рендерится как <a>
  onClick?: () => void;
  children: React.ReactNode;
}
```

**Варианты:**
- `primary` — `--color-primary` фон, белый текст. Основной CTA.
- `secondary` — `--color-bg-card` фон, `--color-text` текст. Второстепенные действия.
- `ghost` — прозрачный фон, `--color-text-muted` текст. Nav-ссылки.
- `outline` — прозрачный фон, border `--color-border`. Альтернативный CTA.

**Размеры:**
- `sm`: padding 8px 16px, font-size `--text-sm`
- `md`: padding 12px 24px, font-size `--text-base`
- `lg`: padding 16px 32px, font-size `--text-md`

**Поведение:**
- `loading`: показывает spinner (CSS, 16px), текст скрыт
- `disabled`: opacity 0.4, cursor not-allowed, pointer-events none
- Hover: `--transition-base`, `primary` → `--color-primary-hover`
- Focus-visible: outline 2px solid `--color-accent`, offset 2px

---

### Card
**Описание:** Контейнер для контентных блоков (проблемы, кейсы, преимущества).

**Props:**
```typescript
interface CardProps {
  variant?: 'default' | 'elevated' | 'bordered';
  padding?: 'sm' | 'md' | 'lg';
  hoverable?: boolean;
  children: React.ReactNode;
  className?: string;
}
```

**Варианты:**
- `default` — фон `--color-bg-card`, без тени
- `elevated` — фон `--color-bg-card`, `--shadow-md`
- `bordered` — прозрачный фон, border 1px solid `--color-border`

**Hoverable:**
- `transform: translateY(-4px)`, `--shadow-lg`, transition 200ms

---

### AccordionItem
**Описание:** Элемент FAQ.

**Props:**
```typescript
interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}
```

**Поведение:**
- Кнопка toggle: полная ширина, flex space-between
- Иконка: + при закрытом, − при открытом, rotate transition 200ms
- Контент: `max-height` анимация 250ms ease, overflow hidden
- Один открыт за раз (управляется родительским состоянием)
- Border-bottom между элементами: 1px solid `--color-border`

---

### StepCard
**Описание:** Карточка шага в секции "Как работает".

**Props:**
```typescript
interface StepCardProps {
  number: '01' | '02' | '03';
  title: string;
  description: string;
  isLast?: boolean;
}
```

**Поведение:**
- Номер: `--font-mono`, 48px, `--color-primary-muted` цвет
- Соединяющая линия: отображается если `!isLast`
  - Mobile: вертикальная линия 2px, `--color-border`, по центру
  - Desktop: горизонтальная линия между карточками

---

### CaseCard
**Описание:** Карточка кейса/примера.

**Props:**
```typescript
interface CaseCardProps {
  tag: string; // "Консультант" | "Менеджер" | "Эксперт" | "Агентство"
  title: string;
  description: string;
  mockupSrc?: string; // путь к изображению мокапа слайда
}
```

**Поведение:**
- Tag: pill, `--color-accent-muted` фон, `--color-accent` текст, font-size `--text-xs`, uppercase
- Мокап: aspect-ratio 16/9, border-radius `--radius-md`, object-fit cover
- Hover: `translateY(-4px)`, `--shadow-glow`

---

### ProblemCard
**Описание:** Карточка проблемы в секции "Проблема".

**Props:**
```typescript
interface ProblemCardProps {
  icon: React.ReactNode; // SVG icon, 24px
  title: string;
  description: string;
}
```

---

### SectionHeader
**Описание:** Заголовок секции (переиспользуется в каждой секции).

**Props:**
```typescript
interface SectionHeaderProps {
  eyebrow?: string; // надзаголовок — строка ситуации/контекста
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}
```

**Поведение:**
- Eyebrow: `--text-xs`, uppercase, `--tracking-wider`, `--color-accent`
- Title: `--text-3xl` → `--text-4xl` (desktop), `--font-weight-bold`, `--tracking-tight`
- Subtitle: `--text-md`, `--color-text-muted`, `--leading-relaxed`
- `align: center` — текст по центру, max-width 640px, margin auto

---

### Pill / Tag
**Описание:** Теги для стилей, ниш, категорий.

**Props:**
```typescript
interface PillProps {
  label: string;
  variant?: 'default' | 'accent' | 'muted';
}
```

---

### Eyebrow
**Описание:** Надзаголовок-строка, маленький текст контекста над H1/H2.

**Props:**
```typescript
interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}
```

**Стиль:** `--text-xs`, uppercase, `--tracking-wider` (0.08em), `--color-accent`, font-weight 500.

---

## Анимации

### Появление при скролле (IntersectionObserver)
```typescript
// Базовые стили для элементов с анимацией
.fade-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 400ms ease, transform 400ms ease;
}

.fade-up.in-view {
  opacity: 1;
  transform: translateY(0);
}
```

- Задержка для staggered-эффекта: `transition-delay: calc(var(--item-index, 0) * 80ms)`
- Threshold IntersectionObserver: `0.15`
- `once: true` — анимируется один раз при первом появлении

### Правила:
- Никаких автоматических анимаций без взаимодействия (no autoplay, no looping)
- `prefers-reduced-motion`: все анимации отключены
- Hover-эффекты: только transform + opacity, никаких color-flash
- Не анимировать width / height (layout thrashing)

---

## Типографическая шкала (применение)

| Элемент | Размер | Вес | Цвет |
|---|---|---|---|
| H1 (Hero) | `--text-5xl` | 700 | `--color-text` |
| H2 (секция) | `--text-3xl` | 700 | `--color-text` |
| H3 (карточка) | `--text-xl` | 600 | `--color-text` |
| Eyebrow | `--text-xs` | 500 | `--color-accent` |
| Body | `--text-base` | 400 | `--color-text` |
| Body muted | `--text-base` | 400 | `--color-text-muted` |
| Caption | `--text-xs` | 400 | `--color-text-subtle` |
| Mono/числа | `--text-2xl` | 600 | `--color-primary` |

---

## Решения по мобильному UX

- **Touch targets:** минимум 44×44px для всех интерактивных элементов
- **Header CTA:** всегда виден — кнопка "Создать презентацию" в правом углу, без бургера
- **Горизонтальный скролл:** только для pill-тегов стилей, с `overscroll-behavior: contain`
- **FAQ:** аккордеон одинаков на mobile и desktop — не требует отдельного паттерна
- **Мокапы слайдов:** aspect-ratio фиксирован (16:9), не ломается при изменении ширины
- **Padding контейнера:** `--container-padding` — уменьшается на маленьких экранах через clamp
