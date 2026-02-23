/**
 * Divider component types.
 * Styled after HyperUI Application dividers (base, gradient, left/right align).
 */

export type DividerVariant = 'base' | 'gradient';

export type DividerAlign = 'center' | 'left' | 'right';

export interface DividerProps {
  /** Style: solid line or gradient fade */
  variant?: DividerVariant;
  /** Alignment: full width (center), or aligned left/right */
  align?: DividerAlign;
  /** Additional class name for the root container */
  className?: string;
}
