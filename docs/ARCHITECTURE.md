# Architecture — Vibe Coding Playground

## Структура файлов и папок

```
vibe-coding-playground/
├── docs/                          # Контекст для Cursor
│   ├── PROJECT_OVERVIEW.md
│   ├── ARCHITECTURE.md
│   ├── TECH_STACK.md
│   └── CURRENT_STATUS.md
│
├── public/
│   ├── favicon.ico
│   └── og-image.png               # Open Graph превью
│
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── layout.tsx             # Root layout (шрифты, метаданные, ThemeProvider)
│   │   ├── page.tsx               # Главная страница — собирает все секции
│   │   └── globals.css            # CSS переменные, базовые стили, @keyframes
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx         # Навигация + переключатель темы
│   │   │   └── Footer.tsx         # Футер с CTA
│   │   │
│   │   ├── sections/              # Основные секции страницы
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AnimationsSection.tsx
│   │   │   ├── InteractivitySection.tsx
│   │   │   ├── VisualEffectsSection.tsx
│   │   │   └── ResponsiveSection.tsx
│   │   │
│   │   ├── ui/                    # Переиспользуемые UI-компоненты
│   │   │   ├── SectionWrapper.tsx # Обёртка с общим padding и анимацией входа
│   │   │   ├── SectionHeader.tsx  # Заголовок + подзаголовок секции
│   │   │   ├── GlassCard.tsx      # Glassmorphism карточка
│   │   │   ├── GlowButton.tsx     # Кнопка с glow-эффектом
│   │   │   ├── ThemeToggle.tsx    # Кнопка переключения темы
│   │   │   └── Badge.tsx          # Бейдж/тег
│   │   │
│   │   └── effects/               # Визуальные эффекты
│   │       ├── AnimatedBackground.tsx  # Анимированный градиентный фон для Hero
│   │       ├── ParticleField.tsx       # Canvas-частицы (опционально)
│   │       └── NoiseTexture.tsx        # SVG-шум для текстуры
│   │
│   ├── hooks/
│   │   ├── useTheme.ts            # Хук для работы с темой
│   │   ├── useInView.ts           # Обёртка над Framer Motion useInView
│   │   └── useConfetti.ts         # Хук для запуска конфетти
│   │
│   ├── store/
│   │   └── themeStore.ts          # Zustand store для темы
│   │
│   ├── lib/
│   │   └── utils.ts               # cn() utility (clsx + tailwind-merge)
│   │
│   └── types/
│       └── index.ts               # Общие TypeScript типы
│
├── tailwind.config.ts             # Конфиг Tailwind с кастомными цветами и анимациями
├── next.config.ts                 # Next.js конфиг
├── tsconfig.json
└── package.json
```

---

## Компоненты — детальное описание

### `app/layout.tsx`
Root layout. Подключает шрифты через `next/font/google`, оборачивает в `ThemeProvider` (Zustand), задаёт метаданные (title, description, og:image).

### `app/page.tsx`
Главная страница. Просто импортирует и рендерит секции по порядку. Никакой логики.

```tsx
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AnimationsSection />
      <InteractivitySection />
      <VisualEffectsSection />
      <ResponsiveSection />
      <Footer />
    </main>
  )
}
```

### `app/globals.css`
```css
/* CSS переменные — темная тема */
:root {
  --bg: #0a0a0f;
  --surface: #12121a;
  --border: rgba(255,255,255,0.08);
  --text: #f0f0ff;
  --text-muted: #6b7280;
  --accent-1: #7c3aed;   /* фиолетовый */
  --accent-2: #06b6d4;   /* циан */
  --accent-3: #f59e0b;   /* янтарный */
  --glow: rgba(124,58,237,0.3);
}

/* Светлая тема */
[data-theme="light"] {
  --bg: #fafafa;
  --surface: #ffffff;
  --border: rgba(0,0,0,0.08);
  --text: #0f0f1a;
  --text-muted: #6b7280;
  --glow: rgba(124,58,237,0.15);
}
```

---

### `components/sections/HeroSection.tsx`
**Ответственность:** Первый экран. Wow-эффект.

**Содержимое:**
- `AnimatedBackground` — mesh-градиент, медленно анимируется
- Заголовок "Vibe Coding Playground" с `motion.h1` (появление снизу)
- Подзаголовок с задержкой
- Кнопка CTA с `GlowButton`
- Скролл-индикатор внизу (анимированная стрелка)

**Анимации:**
- `initial={{ opacity: 0, y: 40 }}` → `animate={{ opacity: 1, y: 0 }}`
- `staggerChildren: 0.15`

---

### `components/sections/AnimationsSection.tsx`
**Ответственность:** Демонстрация Framer Motion анимаций.

**Содержимое:**
- `SectionHeader` "Animations"
- 4 карточки (`GlassCard`) появляются по очереди при скролле
- Карточка 1: **Stagger** — шарики появляются один за другим
- Карточка 2: **Spring** — элемент с пружинной физикой при hover
- Карточка 3: **Path Drawing** — SVG линия рисуется при появлении
- Карточка 4: **Layout Animation** — список меняет порядок с анимацией

**Анимации:**
- `useInView` для trigger при скролле
- `variants` с `staggerChildren`

---

### `components/sections/InteractivitySection.tsx`
**Ответственность:** "Живые" элементы управления.

**Содержимое:**
- Кнопка "Взорви конфетти!" — `canvas-confetti` при клике
- Морфинг-кнопка: меняет форму/текст (Play → Loading → Done)
- Кастомный range slider с анимированным треком
- Toggle switch с `AnimatePresence`
- Счётчик с анимацией цифр (`motion.span`)

---

### `components/sections/VisualEffectsSection.tsx`
**Ответственность:** Визуальные приёмы 2025-2026.

**Содержимое:**
- 6 карточек-примеров в сетке 2×3:
  1. **Glassmorphism** — backdrop-blur карточка
  2. **Glow Effect** — кнопка/элемент с пульсирующим свечением
  3. **Gradient Text** — текст с градиентом
  4. **Noise Texture** — карточка с шумом поверх градиента
  5. **Aurora Background** — многослойный анимированный градиент
  6. **3D Tilt** — карточка наклоняется при движении мыши (transform perspective)

---

### `components/sections/ResponsiveSection.tsx`
**Ответственность:** Демонстрация адаптивности.

**Содержимое:**
- Переключатель: Desktop / Tablet / Mobile (три кнопки)
- `AnimatePresence` для смены режима
- Минированный UI внутри "устройства" — перестраивается при переключении
- Текст рядом объясняет что происходит

---

### `components/ui/SectionWrapper.tsx`
Общая обёртка для всех секций. Даёт одинаковый padding, max-width, анимацию входа через `useInView`. Принимает `id` для anchor-навигации.

### `components/ui/GlassCard.tsx`
```
background: rgba(255,255,255,0.03)
backdrop-filter: blur(12px)
border: 1px solid var(--border)
border-radius: 16px
```
Пропсы: `children`, `className`, `hover` (bool — включает lift эффект)

### `components/ui/GlowButton.tsx`
Кнопка с `box-shadow` цвета `--accent-1`. При hover увеличивается glow. Пропсы: `variant` (primary/secondary/ghost), `size`, `onClick`.

### `components/effects/AnimatedBackground.tsx`
Canvas или CSS-based mesh gradient. Несколько цветовых пятен медленно двигаются. Используется только в Hero, поэтому вынесен отдельно для производительности.

---

## Цветовая палитра

### Dark Theme (по умолчанию)
| Переменная | Hex | Применение |
|---|---|---|
| `--bg` | `#0a0a0f` | Фон страницы |
| `--surface` | `#12121a` | Карточки, поверхности |
| `--surface-2` | `#1a1a2e` | Вложенные поверхности |
| `--border` | `rgba(255,255,255,0.08)` | Границы |
| `--text` | `#f0f0ff` | Основной текст |
| `--text-muted` | `#6b7280` | Второстепенный текст |
| `--accent-1` | `#7c3aed` | Фиолетовый акцент |
| `--accent-2` | `#06b6d4` | Циановый акцент |
| `--accent-3` | `#f59e0b` | Янтарный акцент |
| `--accent-4` | `#ec4899` | Розовый акцент |

### Light Theme
| Переменная | Hex |
|---|---|
| `--bg` | `#fafafa` |
| `--surface` | `#ffffff` |
| `--surface-2` | `#f4f4f8` |
| `--border` | `rgba(0,0,0,0.08)` |
| `--text` | `#0f0f1a` |
| `--text-muted` | `#6b7280` |
| (акценты те же) | |

---

## Соглашения по коду

### Именование
- Компоненты: `PascalCase`
- Хуки: `camelCase` с префиксом `use`
- Файлы: `PascalCase.tsx` для компонентов, `camelCase.ts` для утилит

### Структура компонента
```tsx
// 1. Импорты (react, framer-motion, lucide, локальные)
// 2. Types/Props interface
// 3. Константы (variants для Framer Motion)
// 4. Компонент
// 5. Export default
```

### Framer Motion pattern
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}
```

### Темизация
Всегда используй CSS переменные, не хардкоди цвета в Tailwind:
```tsx
// ✅ Правильно
<div style={{ background: 'var(--surface)' }}>
// или через tailwind с кастомными переменными
<div className="bg-surface border-border">

// ❌ Неправильно
<div className="bg-zinc-900 border-zinc-800">
```
