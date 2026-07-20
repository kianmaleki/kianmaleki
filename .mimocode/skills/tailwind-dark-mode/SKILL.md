---
name: tailwind-dark-mode
description: Add or update Tailwind CSS dark mode support across React/Next.js components. Covers systematic `dark:` variant addition, RTL fixes, gradient direction prefixes, and Tailwind v4 config requirements.
---

# Tailwind Dark Mode Implementation

Systematic process for adding dark mode to React/Next.js + Tailwind CSS projects. Derived from repeated sessions with gold-project (100+ edits across 3 sessions).

## Prerequisites

1. **Tailwind v4 requires `@config`**: If using `@tailwindcss/vite` or `@tailwindcss/postcss` v4, custom colors are ignored unless `src/index.css` contains:
   ```css
   @config "../tailwind.config.js";
   ```
   Without this, all custom color scales (e.g. `gold-*`, `surface-*`) are undefined.

2. **Theme toggle mechanism**: Ensure a theme context/hook exists (e.g. `useTheme.ts`) that:
   - Toggles `dark` class on `document.documentElement`
   - Persists choice to `localStorage`
   - Supports three modes: `system` (uses `prefers-color-scheme`), `dark`, `light`

## Step-by-step Process

### 1. Audit components for theming

Scan all `.tsx` files for hardcoded colors that need `dark:` variants:

```bash
rg -n 'bg-|text-|border-|from-|to-|via-' src/ --include='*.tsx' | grep -v 'dark:'
```

Every component with light-only color classes needs a `dark:` counterpart.

### 2. Add `dark:` variants systematically

For each component, add `dark:` prefixed classes for:

| Element Type | Light Mode | Dark Mode |
|---|---|---|
| Page backgrounds | `bg-white` | `dark:bg-warm-950` |
| Card backgrounds | `bg-white` | `dark:bg-warm-900` |
| Text | `text-gray-900` | `dark:text-warm-50` |
| Muted text | `text-gray-500` | `dark:text-warm-400` |
| Borders | `border-gray-200` | `dark:border-warm-800` |
| Hover states | `hover:bg-gray-50` | `dark:hover:bg-warm-800` |
| Input backgrounds | `bg-gray-50` | `dark:bg-warm-900` |

**Convention**: Use a consistent dark palette. The gold-project uses `warm-50` through `warm-950` (neutral grays) for dark mode rather than `slate-*` for simplicity.

### 3. Gradient direction prefix (CRITICAL)

Every gradient MUST have a direction class. `from-*`/`to-*`/`via-*` without `bg-gradient-to-*` produces **no visible background**.

```tsx
{/* WRONG - invisible gradient */}
<div className="from-gold-500 to-gold-600">

{/* CORRECT */}
<div className="bg-gradient-to-r from-gold-500 to-gold-600">
```

Also add dark variants for gradients:
```tsx
className="bg-gradient-to-r from-gold-500 to-gold-600 dark:from-warm-800 dark:to-warm-900"
```

### 4. RTL toggle switches

In RTL layouts, toggle switches using `translate-x` need inversion:

```tsx
{/* WRONG in RTL - pushes circle off right edge */}
<input className="peer sr-only" />
<div className="peer-checked:after:translate-x-full" />

{/* CORRECT for RTL */}
<div className="peer-checked:after:-translate-x-full" />
```

Physical `translate-x` always moves right. RTL toggles need left movement (`-translate-x-full`).

### 5. RTL text alignment

```tsx
{/* WRONG in RTL */}
<p className="text-left">

{/* CORRECT in RTL */}
<p className="text-right">
```

### 6. Verify with build

After all edits, always run:

```bash
npm run build
```

Then visually verify with:
```bash
npm run dev
```

Toggle dark mode in the UI and check every page/tab for:
- No invisible text (dark text on dark bg)
- No missing gradients
- No misaligned toggles
- Consistent color scheme across all pages

## Common Pitfalls

| Pitfall | Symptom | Fix |
|---|---|---|
| Missing `@config` in Tailwind v4 | All custom colors undefined | Add `@config "../tailwind.config.js"` to `src/index.css` |
| Gradient without direction | Invisible background | Add `bg-gradient-to-r` (or `-l`, `-br`, etc.) |
| Hardcoded dark colors in sidebar | Sidebar ignores theme toggle | Replace `bg-black text-white` with `dark:bg-warm-950 dark:text-warm-50` |
| RTL toggle with `translate-x-full` | Circle goes off-screen | Change to `-translate-x-full` |
| `text-left` in RTL | Text misaligned visually | Change to `text-right` |

## Files Typically Modified

When adding dark mode to a full app, these files usually need changes:

- `src/index.css` — `@config` directive
- `src/hooks/useTheme.ts` — Theme context + localStorage
- `src/App.tsx` — Theme provider wrapper + root background
- `src/components/layout/Header.tsx` — Theme toggle button
- `src/components/layout/Sidebar.tsx` — Nav item dark variants
- `src/components/layout/MobileSidebar.tsx` — Overlay + nav dark variants
- `src/pages/*.tsx` — All page backgrounds, text, borders
- `src/components/cards/*.tsx` — Card dark variants
- `src/components/forms/*.tsx` — Modal + input dark variants
