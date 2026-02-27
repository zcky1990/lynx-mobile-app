# Component Library

This document describes how to use all UI components in the Paguyuban Lynx app. Components follow composition patterns and support theming via `useTheme()` where applicable.

---

## Table of Contents

1. [Alert](#alert)
2. [Accordion](#accordion)
3. [Badge](#badge)
4. [Breadcrumb](#breadcrumb)
5. [Button](#button)
6. [Card](#card)
7. [Checkbox](#checkbox)
8. [Divider](#divider)
9. [Dropdown](#dropdown)
10. [Icon](#icon)
11. [Input](#input)
12. [Loader](#loader)
13. [SettingsNotifications](#settingsnotifications)
14. [Switch](#switch)
15. [Tabs](#tabs)
16. [Table](#table)
17. [TextArea](#textarea)
18. [Timeline](#timeline)
19. [Toast](#toast)

---

## Alert

Modal-style alert with title, description, and optional submit/cancel buttons.

**Import:** `import { Alert } from './components/Alert/Alert'`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `'Alert'` | Alert title |
| `description` | `string` | `''` | Body text |
| `variant` | `'success' \| 'error' \| 'warning' \| 'info'` | — | Visual variant |
| `showSubmitButton` | `boolean` | `true` | Show submit button |
| `showCancelButton` | `boolean` | `true` | Show cancel button |
| `buttonSubmitLabel` | `string` | `'Submit'` | Submit button label |
| `buttonSubmitOnClick` | `() => void` | — | Submit handler |
| `buttonCancelLabel` | `string` | `'Cancel'` | Cancel button label |
| `buttonCancelOnClick` | `() => void` | — | Cancel handler |

### Example

```tsx
<Alert
  title="Confirm"
  description="Are you sure you want to continue?"
  showSubmitButton
  showCancelButton
  buttonSubmitLabel="Yes"
  buttonCancelLabel="No"
  buttonSubmitOnClick={() => {}}
  buttonCancelOnClick={() => {}}
/>
```

---

## Accordion

Section with a title, description, and a list of expandable items (title + description per item).

**Import:** `import { Accordion } from './components/Accordion/Accordion'`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `'title'` | Section title |
| `description` | `string` | `'description'` | Section description |
| `items` | `AccordionItemProps[]` | `[]` | List of accordion items |
| `theme` | `'light' \| 'dark'` | — | Theme for icons |

**AccordionItemProps:** `title`, `description`, `open?: boolean`, `theme?: 'light' | 'dark'`

### Example

```tsx
<Accordion
  title="FAQ"
  description="Frequently asked questions"
  theme="light"
  items={[
    { title: 'What is this?', description: 'An accordion item.', open: false },
    { title: 'Another item', description: 'More content.', open: true },
  ]}
/>
```

---

## Badge

Pill-style label for counts or short text.

**Import:** `import { Badge } from './components/Badge/Badge'`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | — | Badge text |
| `variant` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'destructive' \| 'outline'` | `'default'` | Visual style |
| `className` | `string` | — | Extra class for root |

### Example

```tsx
<Badge variant="primary">New</Badge>
<Badge variant="success">3</Badge>
<Badge variant="outline">Draft</Badge>
```

---

## Breadcrumb

Navigation breadcrumb with optional home icon and chevron/slash divider.

**Import:** `import { Breadcrumb } from './components/Breadcrumb/Breadcrumb'`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `BreadcrumbItemType[]` | — | Breadcrumb items (last is usually current) |
| `divider` | `'chevron' \| 'slash'` | `'chevron'` | Separator: `›` or `/` |
| `showHomeIcon` | `boolean` | `false` | Show home icon before first item |
| `className` | `string` | — | Extra class for root |

**BreadcrumbItemType:** `{ label: string; onPress?: () => void }` — omit `onPress` for current (non-clickable) item.

### Example

```tsx
<Breadcrumb
  items={[
    { label: 'Home', onPress: () => {} },
    { label: 'Settings', onPress: () => {} },
    { label: 'Profile' },
  ]}
  divider="slash"
  showHomeIcon
/>
```

---

## Button

Pressable button with multiple variants and sizes.

**Import:** `import { Button } from './components/Button/Button'`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | — | Button label |
| `variant` | `'solid' \| 'outline' \| 'ghost' \| 'destructive'` | `'solid'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size |
| `onPress` | `() => void` | — | Press handler |
| `disabled` | `boolean` | `false` | Disabled state |
| `className` | `string` | — | Extra class for root |

### Example

```tsx
<Button variant="solid" size="md" onPress={() => {}}>Save</Button>
<Button variant="outline" size="sm" onPress={() => {}}>Cancel</Button>
<Button variant="destructive" disabled>Delete</Button>
```

---

## Card

Composable card with optional Header, Body, and Footer.

**Import:** `import { Card } from './components/Card/Card'`

### Usage

- **Card** — Root container. Props: `children`, `className`
- **Card.Header** — Top section with bottom border. Props: `children`, `className`
- **Card.Body** — Main content. Props: `children`, `className`
- **Card.Footer** — Bottom section with top border and secondary background. Props: `children`, `className`

### Example

```tsx
<Card className="max-w-md">
  <Card.Header>
    <text className="font-semibold">Card Title</text>
  </Card.Header>
  <Card.Body>
    <text className="text-muted-foreground">Card content goes here.</text>
  </Card.Body>
  <Card.Footer>
    <Button variant="solid" onPress={() => {}}>Action</Button>
  </Card.Footer>
</Card>
```

---

## Checkbox

Single checkbox with optional label and description. Use **Checkbox.Group** for a list with dividers.

**Import:** `import { Checkbox } from './components/Checkbox'`

### Checkbox props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | — | Checked state |
| `onCheckedChange` | `(checked: boolean) => void` | — | Toggle handler |
| `label` | `string` | — | Label next to checkbox |
| `description` | `string` | — | Description below label |
| `interaction` | `'enabled' \| 'disabled'` | `'enabled'` | Disabled when `'disabled'` |
| `className` | `string` | — | Extra class for root |

### Checkbox.Group props

| Prop | Type | Description |
|------|------|-------------|
| `items` | `CheckboxGroupItem[]` | List of items; dividers between each |
| `className` | `string` | Extra class for root |

**CheckboxGroupItem:** `label`, `description?`, `checked`, `onCheckedChange?`, `interaction?`

### Example

```tsx
// Single checkbox
<Checkbox
  checked={agreed}
  onCheckedChange={setAgreed}
  label="I agree"
  description="Terms and conditions apply"
/>

// Group
<Checkbox.Group
  items={[
    { label: 'Email', description: 'Receive email updates', checked: true, onCheckedChange: () => {} },
    { label: 'SMS', checked: false, onCheckedChange: () => {} },
  ]}
/>
```

---

## Divider

Horizontal line; optional gradient and alignment.

**Import:** `import { Divider } from './components/Divider/Divider'`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'base' \| 'gradient'` | `'base'` | Solid or gradient line |
| `align` | `'center' \| 'left' \| 'right'` | `'center'` | Line alignment |
| `className` | `string` | — | Extra class for root |

### Example

```tsx
<Divider />
<Divider variant="gradient" align="left" />
<Divider variant="base" align="right" className="my-4" />
```

---

## Dropdown

Trigger that opens a menu of items. Supports flat list, divided list, or grouped sections.

**Import:** `import { Dropdown } from './components/Dropdown/Dropdown'`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `triggerLabel` | `string` | — | Text on the trigger |
| `items` | `DropdownItem[]` | `[]` | Flat/divided menu items |
| `groups` | `DropdownGroup[]` | `[]` | For `variant="grouped"` |
| `variant` | `'base' \| 'divided' \| 'grouped'` | `'base'` | Menu layout |
| `theme` | `'light' \| 'dark'` | from `useTheme()` | Theme |
| `label` | `string` | — | Label above trigger |
| `properties` | object | — | Custom classNames/styles for label, trigger, menu, item, divider, groupLabel |

**DropdownItem:** `{ id: string; label: string; onSelect?: () => void }`  
**DropdownGroup:** `{ label?: string; items: DropdownItem[] }`

### Example

```tsx
<Dropdown
  triggerLabel="Options"
  label="Choose action"
  variant="divided"
  items={[
    { id: '1', label: 'Edit', onSelect: () => {} },
    { id: '2', label: 'Delete', onSelect: () => {} },
  ]}
/>

// Grouped
<Dropdown
  triggerLabel="Menu"
  variant="grouped"
  groups={[
    { label: 'Account', items: [{ id: 'a1', label: 'Profile', onSelect: () => {} }] },
    { label: 'Support', items: [{ id: 's1', label: 'Help', onSelect: () => {} }] },
  ]}
/>
```

---

## Icon

Inline icon by name (SVG-based). Used by Input, Dropdown, Accordion, etc.

**Import:** `import { Icon } from './components/Icon/Icon'`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | — | Icon name (see list below) |
| `size` | `number` | `15` | Width/height in px |
| `color` | `string` | `'#000000'` | Stroke color |
| `style` | `string` | — | Inline style |

**Available names:** `phone`, `email`, `password`, `tel`, `search`, `calendar`, `clock`, `user`, `setting`, `bell`, `chevronUp`, `chevronDown`

### Example

```tsx
<Icon name="user" size={24} color="var(--primary)" />
<Icon name="chevronDown" size={16} color="white" />
```

---

## Input

Text input with optional label, icon, validation, and theme.

**Import:** `import { Input } from './components/Input/Input'`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string \| number` | `''` | Controlled value |
| `placeholder` | `string` | — | Placeholder |
| `label` | `string` | — | Label above input |
| `type` | `'text' \| 'number' \| 'digit' \| 'password' \| 'tel' \| 'email'` | `'text'` | Input type |
| `maxlength` | `number` | — | Max length |
| `interaction` | `'enabled' \| 'disabled'` | `'enabled'` | Disabled when `'disabled'` |
| `showIcon` | `boolean` | `true` | Show icon in input |
| `icon` | `string` | `'phone'` | Icon name (see Icon) |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Icon position |
| `theme` | `'light' \| 'dark'` | `'light'` | Theme for icon/background |
| `onPress` | `(value: string \| number) => void` | — | Called when icon is pressed (e.g. paste) |
| `onChange` | `(value: string \| number) => void` | — | Input change |
| `validate` | `(value: string \| number) => string \| null` | — | Return error message or null |
| `properties` | object | — | classNames/styles for label, input, icon, errorMessage; icon.size |

### Example

```tsx
<Input
  label="Email"
  type="email"
  placeholder="you@example.com"
  value={email}
  onChange={setEmail}
  validate={(v) => (!v ? 'Required' : null)}
  showIcon
  icon="email"
  iconPosition="left"
/>
```

---

## Loader

Progress indicator: **spinner** (indeterminate) or **loader** (progress bar).

**Import:** `import { Loader } from './components/Loader/Loader'`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'spinner' \| 'loader'` | — | Kind of indicator |
| `percentage` | `number` | `0` | Progress 0–100 (for `type="loader"`) |
| `label` | `string` | — | Optional label next to spinner or below bar |
| `properties` | `LoaderProperties` | — | Spinner: size, colorStroke, colorFill. Loader: textColor, animate, progressBarColor, progressBarBackgroundColor |

### Example

```tsx
<Loader type="spinner" label="Loading..." />
<Loader type="loader" percentage={60} label="60%" />
<Loader
  type="spinner"
  properties={{ spinner: { size: 32, colorStroke: '#e4e4e4', colorFill: '#0f172b' } }}
/>
```

---

## SettingsNotifications

Vertical list of notification settings: each row has title, description, and a switch. Uses **Switch** and dividers.

**Import:** `import { SettingsNotifications } from './components/SettingsNotifications/SettingsNotifications'`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `NotificationItemProps[]` | `[]` | Rows to render |

**NotificationItemProps:** `title`, `description`, `value?: 'on' | 'off'`, `onValueChange?: (value) => void`, `interaction?: 'enabled' | 'disabled'`

### Example

```tsx
<SettingsNotifications
  items={[
    { title: 'Email', description: 'Receive email notifications', value: 'on', onValueChange: (v) => {} },
    { title: 'Push', description: 'Push notifications', value: 'off', onValueChange: (v) => {} },
  ]}
/>
```

---

## Switch

Toggle switch. Use the compound **Switch** (convenience) or **Switch.Root** + **Switch.Track** + **Switch.Thumb** for custom layout.

**Import:** `import { Switch } from './components/Switch/Switch'`

### Props (convenience component)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `'on' \| 'off'` | — | Current state |
| `onValueChange` | `(value: 'on' \| 'off') => void` | — | Change handler |
| `interaction` | `'enabled' \| 'disabled'` | — | Disabled when `'disabled'` |

### Example

```tsx
<Switch value={notify} onValueChange={setNotify} />
<Switch value="off" onValueChange={(v) => {}} interaction="disabled" />
```

---

## Tabs

Tabbed content. Use **Tabs** as root, **Tabs.List** for the tab strip, **Tabs.Trigger** per tab, **Tabs.Panel** per panel.

**Import:** `import { Tabs } from './components/Tabs'`

### Usage

- **Tabs** — Root. Props: `children`, `defaultValue` (active tab id string).
- **Tabs.List** — Wraps the triggers. Props: `children`.
- **Tabs.Trigger** — One tab button. Props: `id` (string), `children`.
- **Tabs.Panel** — One panel; rendered only when `id` matches active tab. Props: `id`, `children`.

### Example

```tsx
<Tabs defaultValue="tab1">
  <Tabs.List>
    <Tabs.Trigger id="tab1">Tab 1</Tabs.Trigger>
    <Tabs.Trigger id="tab2">Tab 2</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Panel id="tab1"><text>Content 1</text></Tabs.Panel>
  <Tabs.Panel id="tab2"><text>Content 2</text></Tabs.Panel>
</Tabs>
```

---

## Table

Data table with configurable columns and rows. Supports horizontal scroll, sticky header/first column, and variants.

**Import:** `import { Table } from './components/Table'`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `TableColumn[]` | — | Column definitions |
| `rows` | `TableRow[]` | — | Row data (keyed by column keys) |
| `variant` | `'base' \| 'bordered' \| 'striped'` | `'base'` | Table style |
| `stickyHeader` | `boolean` | `false` | Sticky header |
| `stickyFirstColumn` | `boolean` | `false` | Sticky first column |
| `theme` | `'light' \| 'dark'` | from `useTheme()` | Theme |
| `properties` | object | — | classNames/styles for wrapper, table, header, headerCell, body, row, cell |

**TableColumn:** `{ key: string; label: string }`  
**TableRow:** `Record<string, string | number>` (keys match column keys)

### Example

```tsx
<Table
  columns={[
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
  ]}
  rows={[
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
  ]}
  variant="striped"
  stickyHeader
/>
```

---

## TextArea

Multi-line text input with optional label, validation, and theme.

**Import:** `import { TextArea } from './components/TextArea/TextArea'`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `''` | Controlled value |
| `placeholder` | `string` | — | Placeholder |
| `label` | `string` | — | Label above textarea |
| `maxlines` | `number` | — | Max lines |
| `interaction` | `'enabled' \| 'disabled'` | `'enabled'` | Disabled when `'disabled'` |
| `theme` | `'light' \| 'dark'` | `'light'` | Background theme |
| `onChange` | `(value: string) => void` | — | Change handler |
| `validate` | `(value: string) => string \| null` | — | Error message or null |
| `properties` | object | — | classNames/styles for label, textArea, errorMessage |

### Example

```tsx
<TextArea
  label="Bio"
  placeholder="Tell us about yourself"
  value={bio}
  onChange={setBio}
  maxlines={5}
  validate={(v) => (v.length < 10 ? 'Min 10 characters' : null)}
/>
```

---

## Timeline

Vertical timeline with colored ball and line. Compose with **Timeline.Item** for each step.

**Import:** `import { Timeline } from './components/Timeline/TimeLine'`

### Props (Timeline root)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode[]` | — | Timeline items (use `Timeline.Item`) |
| `theme` | `'light' \| 'dark'` | — | Ball/line color theme |
| `ballColor` | `string` | — | Override ball color (style) |
| `lineColor` | `string` | — | Override line color |

**Timeline.Item** — Props: `children` (content for that step).

### Example

```tsx
<Timeline theme="light" ballColor="var(--primary)">
  <Timeline.Item><text>Step 1</text></Timeline.Item>
  <Timeline.Item><text>Step 2</text></Timeline.Item>
  <Timeline.Item><text>Step 3</text></Timeline.Item>
</Timeline>
```

---

## Toast

Temporary notification with title and description. Use with **useToast** for show/hide and duration.

**Import:**  
`import { Toast } from './components/Toast/Toast'`  
`import useToast from './components/Toast/hook/useToast'`

### Toast props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showToast` | `boolean` | `false` | Whether to show (drive from state) |
| `toastTitle` | `string` | — | Title |
| `toastDescription` | `string` | — | Description |
| `toastVariant` | `'success' \| 'error' \| 'warning' \| 'info'` | `'success'` | Style |
| `toastPosition` | `'top' \| 'bottom'` | `'top'` | Position on screen |
| `toastDuration` | `number` | `500` | Visible duration (ms) |
| `className` | `string` | — | Extra class for container |

**useToast(props)** returns `{ show, viewToast, getClassToastPosition, getBorderColor, getBackgroundColor, getFontColor }`. The Toast component uses these internally; typically you control visibility via `showToast` and call `viewToast` in an effect when `showToast` becomes true.

### Example

```tsx
const [showToast, setShowToast] = useState(false);

// When you want to show:
setShowToast(true);

<Toast
  showToast={showToast}
  toastTitle="Saved"
  toastDescription="Your changes have been saved."
  toastVariant="success"
  toastPosition="top"
  toastDuration={3000}
/>
```

---

## Theming

Many components accept a `theme` prop (`'light' | 'dark'`). When omitted, they use `useTheme()` from `../../providers` (e.g. **Table**, **Dropdown**). Wrap your app with the same theme provider so `resolvedTheme` is available.

## Styling

Components use Tailwind-style classes and support:

- **className** — Merged with default classes (via `twMerge` where used).
- **properties** — For fine-grained overrides (e.g. `properties.label.className`, `properties.input.style`). Structure matches the props tables above.

Use design tokens (e.g. `--primary`, `--border`, `--muted`) in custom styles for consistency with the theme.
