export type TextAreaType =
  | "text"
  | "number"
  | "digit"
  | "password"
  | "tel"
  | "email";
export type TextAreaInteraction = "enabled" | "disabled";

/** Convenience props for a single-component usage (still uses Root under the hood). */
export interface TextAreaComponentsProps {
  value?: string;
  placeholder?: string;
  label?: string;
  maxlines?: number;
  interaction?: TextAreaInteraction;
  theme?: "light" | "dark";
  onChange?: (value: string) => void;
  validate?: (value: string | number) => string | null;
  properties?: {
    label?: {
      className?: string;
      style?: string;
    };
    textArea?: {
      className?: string;
      style?: string;
    };
    icon?: {
      size?: number;
      style?: string;
    };
    errorMessage?: {
      className?: string;
      style?: string;
    };
  };
}
