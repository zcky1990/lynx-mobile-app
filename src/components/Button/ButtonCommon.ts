/**
 * Button component types.
 * Styled after HyperUI Application/Marketing buttons (solid, outline, ghost).
 */

export type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'destructive';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  /** Button label */
  children: React.ReactNode;
  /** Visual variant: solid (primary), outline, ghost, destructive */
  variant?: ButtonVariant;
  /** Size: sm, md (default), lg */
  size?: ButtonSize;
  /** Press handler */
  onPress?: () => void;
  /** Disabled state */
  disabled?: boolean;
  /** Additional class name for the root view */
  className?: string;
}
