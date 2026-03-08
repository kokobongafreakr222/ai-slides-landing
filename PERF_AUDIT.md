# PERF_AUDIT — React/Next.js Bundle & Component Audit

**Проект:** DeckMind (ai-slides-landing)
**Дата:** 2026-03-08
**Директория:** `site/`

---

## Результат проверки

| Категория | Статус | Детали |
|-----------|--------|--------|
| `'use client'` обоснованность | **PASS** | 2 компонента: `FAQ.tsx` (useState для аккордеона), `FadeIn.tsx` (useEffect + useRef для IntersectionObserver). Оба требуют браузерного API — директива обоснована |
| `next/image` | **WARN** | Компонент не используется нигде. Изображений на странице нет (Hero использует CSS-мокап из div-ов). При добавлении реальных изображений — обязательно использовать `next/image` |
| `next/font` | **PASS** | `Inter` и `JetBrains_Mono` подключены через `next/font/google` в `layout.tsx` с `display: 'swap'` и правильными subsets. CDN-ссылок нет |
| Code splitting | **WARN** | Нет `React.lazy` или `next/dynamic`. Для лендинга приемлемо — все секции критичны для первого экрана. При росте проекта рассмотреть lazy-load для FAQ и Cases |
| Loading/Error boundaries | **WARN** | `loading.tsx` и `error.tsx` отсутствуют. Для статического лендинга некритично, но рекомендуется добавить `error.tsx` для production |
| Bundle dependencies | **PASS** | Зависимости минимальны: только `next`, `react`, `react-dom`. Нет тяжёлых сторонних библиотек (нет framer-motion, lodash, moment, etc.) |

---

## Детальный анализ

### `'use client'` компоненты (2 из 15)

**`components/ui/FadeIn.tsx`** — ОБОСНОВАНО
- Использует `useEffect`, `useRef`, `IntersectionObserver`
- Браузерный API недоступен в Server Components
- Компонент оборачивает children — не блокирует Server-рендеринг родителей

**`components/FAQ.tsx`** — ОБОСНОВАНО
- Использует `useState` для управления состоянием аккордеона
- Интерактивный UI требует клиентского рендеринга
- Альтернатива через CSS `details/summary` без JS возможна, но текущая реализация корректна

### Шрифты (`layout.tsx`)

```tsx
const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});
```

Правильная реализация: `next/font/google`, CSS-переменные, `display: 'swap'`, нужные subsets.

### Архитектура страницы

`app/page.tsx` — полностью Server Component. Все 8 секций (`Header`, `Hero`, `Problem`, `Solution`, `HowItWorks`, `Cases`, `FAQ`, `CTA`, `Footer`) импортируются как статические компоненты. `'use client'` граница проходит только там где нужно.

### Bundle зависимости

```json
{
  "next": "16.1.6",
  "react": "19.2.3",
  "react-dom": "19.2.3"
}
```

Нулевой overhead от сторонних зависимостей. DevDependencies (Tailwind, TypeScript, ESLint) в бандл не попадают.

---

## Рекомендации

1. **Добавить `app/error.tsx`** — минимальная страница ошибки для production
2. **Следить при добавлении изображений** — всегда использовать `next/image`, не `<img>`
3. **FAQ можно оптимизировать через CSS `details/summary`** — убрать `'use client'`, но текущая реализация с анимацией через `maxHeight` этого не позволяет без JS
4. **Метаданные** — добавить `openGraph` и `twitter` в `metadata` в `layout.tsx` для социального шеринга

---

## Итог

**PASS**

Архитектура чистая: минимальный клиентский бандл, правильные шрифты, нет тяжёлых зависимостей, `'use client'` только там где нужен. Предупреждения не блокирующие — актуальны при дальнейшем развитии проекта.
