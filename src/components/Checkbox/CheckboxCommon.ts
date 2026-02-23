/**
 * Checkbox component types.
 * Styled after HyperUI Application checkboxes (base, described, described with divide).
 */

export type CheckboxInteraction = 'enabled' | 'disabled';

export interface CheckboxProps {
  /** Checked state */
  checked: boolean;
  /** Called when user toggles the checkbox */
  onCheckedChange?: (checked: boolean) => void;
  /** Label shown next to the checkbox (base style) */
  label?: string;
  /** Optional description below the label (described style) */
  description?: string;
  /** Disabled when "disabled" */
  interaction?: CheckboxInteraction;
  /** Additional class name for the root container */
  className?: string;
}

export interface CheckboxGroupItem {
  label: string;
  description?: string;
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
  interaction?: CheckboxInteraction;
}

export interface CheckboxGroupProps {
  /** List of checkbox items; dividers are shown between items (described with divide) */
  items: CheckboxGroupItem[];
  /** Additional class name for the root container */
  className?: string;
}
