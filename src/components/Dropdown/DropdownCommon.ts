export type DropdownVariant = 'base' | 'divided' | 'grouped';

export interface DropdownItem {
  id: string;
  label: string;
  onSelect?: () => void;
}

export interface DropdownGroup {
  label?: string;
  items: DropdownItem[];
}

/** Props for Dropdown; theme can be passed or resolved from ThemeProvider via useTheme. */
export interface DropdownProps {
  /** Trigger label (e.g. "Options") */
  triggerLabel: string;
  /** Items for base/divided dropdown (flat list) */
  items?: DropdownItem[];
  /** Groups for grouped variant (sections with optional labels) */
  groups?: DropdownGroup[];
  /** Variant: base (simple list), divided (with dividers), grouped (sections) */
  variant?: DropdownVariant;
  /** Explicit theme; if not set, component uses useTheme().resolvedTheme */
  theme?: 'light' | 'dark';
  /** Optional label above trigger */
  label?: string;
  /** Custom class names / styles for theming (aligned with Input pattern) */
  properties?: {
    label?: { className?: string; style?: string };
    trigger?: { className?: string; style?: string };
    menu?: { className?: string; style?: string };
    item?: { className?: string; style?: string };
    divider?: { className?: string; style?: string };
    groupLabel?: { className?: string; style?: string };
  };
}
