/**
 * DatePicker component types.
 * Styled after Shadcn/Radix date picker: trigger + calendar popover.
 */

export interface DatePickerProps {
  /** Selected date (Date, ISO string, or null) */
  value?: Date | string | null;
  /** Called when user selects a date */
  onChange?: (date: Date | null) => void;
  placeholder?: string;
  label?: string;
  theme?: "light" | "dark";
  /** Minimum selectable date (ISO string or Date) */
  minDate?: Date | string;
  /** Maximum selectable date (ISO string or Date) */
  maxDate?: Date | string;
  className?: string;
}
