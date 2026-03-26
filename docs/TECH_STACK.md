# Tech Stack — Vibe Coding Playground

## Основной стек

### Framework: Next.js 14 (App Router)
**Почему:**
- File-based routing из коробки — чисто и предсказуемо
- Server Components для статического контента (SEO)
- Client Components для интерактива (анимации)
- Встроенная оптимизация изображений и шрифтов
- Деплой на Vercel в 1 клик

### Язык: TypeScript
**Почему:**
- Автодополнение в Cursor → вайбкодинг идёт быстрее
- Меньше runtime ошибок
- Самодокументирующийся код

### Стилизация: Tailwind CSS v3 + CSS Variables
**Почему:**
- Быстро писать стили прямо в JSX
- CSS Variables для переключения тем
- JIT-компилятор — только нужные классы в бандле
- Хорошо работает с кастомными анимациями через `@keyframes`

### Анимации: Framer Motion v11
**Почему:**
- Декларативный API — анимации читаются как дизайн-описание
- `useInView` — анимации при скролле без лишнего кода
- `AnimatePresence` — плавные входы/выходы элементов
- `staggerChildren` — поочерёдное появление карточек
- Gesture support (drag, hover, tap) из коробки

### Конфетти: canvas-confetti
**Почему:** Лёгкая (~3KB), canvas-based, без зависимостей

### Иконки: Lucide React
**Почему:** Консистентный стиль, tree-shakeable, TypeScript типы

### Шрифты: Google Fonts (next/font)
- **Display:** `Syne` — геометрический, футуристичный, запоминающийся
- **Body:** `DM Sans` — читаемый, современный, нейтральный
- **Mono:** `JetBrains Mono` — для кодовых вставок

### State Management: Zustand (только для темы)
**Почему:** 
- Минимальный бойлерплейт
- Персистентность через `localStorage` в 3 строки
- Не нужен Redux для одного переключателя

## DevDependencies
- `eslint` + `eslint-config-next`
- `prettier` с `prettier-plugin-tailwindcss`
- `@types/node`, `@types/react`

## Деплой
- **Платформа:** Vercel
- **CI:** Auto-deploy на push в `main`
- **Домен:** vercel.app (бесплатно) или кастомный

## Команды

```bash
# Установка
npm install

# Разработка
npm run dev

# Билд
npm run build

# Линтинг
npm run lint
```

## Versions (на момент старта)
```json
{
  "next": "^14.2.0",
  "react": "^18.3.0",
  "framer-motion": "^11.0.0",
  "tailwindcss": "^3.4.0",
  "zustand": "^4.5.0",
  "canvas-confetti": "^1.9.0",
  "lucide-react": "^0.400.0"
}
```
