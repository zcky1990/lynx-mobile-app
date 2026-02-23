/**
 * Badge component types.
 * Styled after HyperUI Application badges (pill/count style).
 */

export type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'destructive' | 'outline';

export interface BadgeProps {
  /** Badge label (e.g. count or short text) */
  children: React.ReactNode;
  /** Visual variant */
  variant?: BadgeVariant;
  /** Additional class name for the root view */
  className?: string;
}
