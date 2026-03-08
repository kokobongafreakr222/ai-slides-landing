# Security Audit — DeckMind Landing (ai-slides-landing)

**Дата:** 2026-03-08
**Проект:** `/Users/malovnik/Documents/Dev/Projects/ai-slides-landing/site/`
**Стек:** Next.js 16.1.6, React 19.2.3, Tailwind 4

---

## Результаты по категориям

| Категория | Статус | Детали |
|-----------|--------|--------|
| XSS (innerHTML / dangerous HTML injection) | PASS | Не найдено ни одного использования опасных HTML-методов. Весь вывод через JSX — React экранирует автоматически. |
| Опасные конструкции JS (eval, динамический код) | PASS | Не найдено. Динамическое выполнение кода отсутствует. |
| Секреты в исходном коде | PASS | Переменных API_KEY, SECRET, token, password в ts/tsx файлах не обнаружено. Файлы .env отсутствуют — проект не делает API-запросов. |
| Next.js data утечки | PASS | Кастомных серверных данных нет. Проект является статическим лендингом без серверных данных. |
| Server Actions (валидация входных данных) | N/A | Server Actions отсутствуют. Проект — чистый статический лендинг без форм, API-роутов и серверной обработки. |
| CSRF-защита форм | N/A | Интерактивных форм с серверной отправкой данных нет. Единственные интерактивные элементы — FAQ-аккордеон (клиентский useState) и кнопки-ссылки (якорная навигация). |
| CSP Headers (Content-Security-Policy) | FAIL | next.config.ts пустой — security headers не настроены. Отсутствуют: Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, Strict-Transport-Security. |
| X-Frame-Options | FAIL | Не настроен. Страница потенциально уязвима к clickjacking через iframe. |
| Зависимости (npm audit) | PASS | 0 уязвимостей (0 critical, 0 high, 0 moderate, 0 low). 428 пакетов проверено. |
| Отладочный код (console.log) | PASS | Не найдено в tsx компонентах. |
| Открытые ссылки в Footer | INFO | href="#" для "Политика конфиденциальности" и "Условия использования" — заглушки. Не уязвимость, но требует заполнения перед production-запуском. |

---

## Детали критических находок

### FAIL: Отсутствие security headers

**Файл:** `/Users/malovnik/Documents/Dev/Projects/ai-slides-landing/site/next.config.ts`

**Текущее состояние:** nextConfig полностью пустой, никаких headers не задано.

**Рекомендуемый минимум для production:**

```ts
const securityHeaders = [
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
    ].join('; '),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }];
  },
};
```

**Риск без headers:**
- Clickjacking через iframe (без X-Frame-Options)
- MIME-type sniffing атаки (без X-Content-Type-Options)
- Нежелательная утечка Referer (без Referrer-Policy)
- Для статического лендинга без авторизации — умеренный риск

---

## Итог

**FAIL: Отсутствуют security headers в next.config.ts**

Список проблем:
1. Content-Security-Policy не настроен
2. X-Frame-Options не настроен (clickjacking)
3. X-Content-Type-Options не настроен
4. Referrer-Policy не настроен
5. Permissions-Policy не настроен

Все остальные категории: **PASS** или **N/A** (проект является статическим лендингом без серверной логики, форм и API).

Критичность для текущего типа сайта (статический лендинг, без авторизации, без обработки данных пользователя) — **умеренная**. Устранение требует правки одного файла next.config.ts.
