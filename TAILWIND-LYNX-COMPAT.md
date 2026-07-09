# Tailwind-Lynx Compatibility Reference

`@lynx-js/tailwind-preset` whitelists 57 core plugins + 34 Lynx-native replacements.
Everything else is **disabled**. Below: unsupported utilities **in use** in this codebase + replacements.

---

## Responsive breakpoints

`sm:`, `md:`, `lg:`, `xl:`, `2xl:` — Lynx has fixed viewport, no breakpoint concept.

| File | In use | Replacement |
|---|---|---|
| `Accordion.tsx` | `md:mb-4`, `lg:mb-6`, `lg:text-4xl` | Remove prefix, use base class |
| `AccordionItem.tsx` | `sm:mb-1`, `sm:py-1`, `lg:mb-2`, `lg:py-2`, `lg:text-lg` | Remove prefix, use base class |
| `App.tsx` | `md:text-3xl`, `lg:text-4xl`, `lg:mb-6`, `md:text-pretty` | Remove prefix, use base class |
| `SectionContentImage.tsx` | `md:text-3xl` | `text-3xl` |
| `ContactUs.tsx` | `md:text-3xl` | `text-3xl` |
| `Alert.tsx` | `md:text-pretty` | Remove (not Lynx-supported anyway) |
| `Toast.tsx` | `md:text-pretty` | Remove (not Lynx-supported anyway) |

**Rule:** Remove responsive prefix; base class applies always.

---

## Pseudo-class variants (`hover:`, `focus:`, `focus-visible:`, `active:`)

Lynx engine does not support CSS pseudo-classes. Replace with `ui-*` class-based variants.

| File | In use | Lynx replacement |
|---|---|---|
| `Alert.tsx` | `hover:bg-primary/90`, `hover:bg-secondary/90` | `ui-active:bg-primary/90` (tap feedback) or remove |
| `Alert.tsx` | `focus-visible:outline`, `focus-visible:outline-2`, `focus-visible:outline-offset-2`, `focus-visible:outline-primary` | Remove — no keyboard focus in Lynx |
| `Button.tsx` | `active:opacity-90` | `ui-active:opacity-90` |
| `BottomNavigation.tsx` | `active:opacity-80` | `ui-active:opacity-80` |
| `DatePicker.tsx` | `active:opacity-80`, `active:opacity-70` | `ui-active:opacity-80`, `ui-active:opacity-70` |
| `Breadcrumb.tsx` | `active:text-foreground` | `ui-active:text-foreground` |
| `Dropdown.tsx` | `active:bg-accent`, `active:text-accent-foreground` | `ui-active:bg-accent`, `ui-active:text-accent-foreground` |

**Rule:** `active:X` → `ui-active:X`. Remove `hover:`, `focus-visible:`, `focus:` variants entirely.

---

## `first:`, `last:`, `odd:`, `even:` DOM-order variants

Lynx does not support `:first-child`, `:nth-child` etc. No direct replacement.

| File | In use | Lynx replacement |
|---|---|---|
| `AvatarGroup.tsx` | `first:ml-0` | Apply negative margin to all items, don't reset first. Or use `gap` instead. |
| `Timeline.tsx` | `group-odd:flex-row-reverse`, `group-odd:text-right`, `group-even:order-last` | Static layout — all items same direction. Or pass `index` prop and compute `flexDirection` via style. |

**Rule:** Replace with static layout or pass index-based props.

---

## `group-*` / `peer-*` variants

Standard `group-hover:`, `group-focus:` are removed. Lynx provides `group-ui-*` instead.

| File | In use | Lynx replacement |
|---|---|---|
| `Timeline.tsx` | `group`, `group-odd:flex-row-reverse`, `group-odd:text-right`, `group-even:order-last` | Remove `group`, use static alignment or index-based style |

---

## `container` class

Not in `DEFAULT_CORE_PLUGINS`. Use `w-full max-w-*` instead.

| File | In use | Replacement |
|---|---|---|
| `Accordion.tsx` | `container` | `w-full` or remove (already has `w-full`) |

---

## `ring-*` utilities

Not in `DEFAULT_CORE_PLUGINS`.

| File | In use | Replacement |
|---|---|---|
| `AvatarGroup.tsx` | `ring-2`, `ring-background` | `border-2 border-background` (creates same visual) |

**Rule:** `ring-{n}` → `border-{n}`, `ring-{color}` → `border-{color}`.

---

## `outline-*` utilities

Not in `DEFAULT_CORE_PLUGINS`. Used only via `focus-visible:outline-*` in Alert.tsx — remove entirely.

---

## `object-cover`

Not in `DEFAULT_CORE_PLUGINS`. Lynx `<image>` element may not support `object-fit`.

| File | In use | Replacement |
|---|---|---|
| `Avatar.tsx` | `object-cover` | Lynx `<image>` mode="scaleToFill" or CSS `background-size: cover` on wrapper |
| `SectionContentImage.tsx` | `object-cover` | Same as above |

---

## Non-standard Tailwind classes (`text-balance`, `text-pretty`)

Not Tailwind utilities. No-op in Lynx. Remove or keep (harmless).

| File | In use |
|---|---|
| `Alert.tsx` | `text-balance` |
| `Toast.tsx` | `text-balance` |

---

## Gray/red/blue color classes

Standard Tailwind color palette is NOT whitelisted. Only theme variable colors (e.g. `text-foreground`, `bg-card`) are available.

| File | In use | Replacement |
|---|---|---|
| `TabsTriggers.tsx` | `text-gray-600` | `text-muted-foreground` |
| `TabsList.tsx` | `border-gray-200` | `border-border` |
| `Toast.tsx` | `border-gray-100` | `border-border` |
| `Timeline.tsx` | `bg-red-600`, `bg-blue-600` | Define custom CSS vars or use theme tokens |

---

## `space-*` utilities

Not in `DEFAULT_CORE_PLUGINS`. Already fixed in `TimeLine.tsx` → `flex flex-col gap-8`.

---

## Quick reference: Key Lynx `ui-*` variants

| Standard Tailwind | Lynx equivalent |
|---|---|
| `active:` | `ui-active:` |
| `disabled:` | `ui-disabled:` |
| `checked:` | `ui-checked:` |
| `open:` / `[open]` | `ui-open:` |
| `group-active:` | `group-ui-active:` |
| `group-disabled:` | `group-ui-disabled:` |
| `peer-disabled:` | `peer-ui-disabled:` |

Available prefixes: `active`, `disabled`, `readonly`, `checked`, `selected`, `indeterminate`, `invalid`, `initial`, `open`, `closed`, `leaving`, `entering`, `animating`, `busy`, `ui-side-*` (left/right/top/bottom), `ui-align-*` (start/end/center), `group-ui-*`, `peer-ui-*`, `parent-ui-*`.

---

## Summary of impact

| Priority | Category | Files affected | Action |
|---|---|---|---|
| **HIGH** | Responsive breakpoints | 7 files | Strip prefix |
| **MEDIUM** | `active:` variants | 5 files | `active:` → `ui-active:` |
| **MEDIUM** | `first:` / `group-odd:` | 2 files | Static layout |
| **LOW** | `hover:` / `focus-visible:` | 1 file | Remove |
| **LOW** | `ring-*` | 1 file | Replace w/ `border-*` |
| **LOW** | `container` | 1 file | Replace w/ `w-full` |
| **LOW** | `object-cover` | 2 files | Lynx image mode |
| **LOW** | Gray/red/blue colors | 3 files | Use theme tokens |
| **NONE** | `text-balance` | 2 files | Harmless no-op |
