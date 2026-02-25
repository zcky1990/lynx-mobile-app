import type { CSSProperties } from "react";

export type InputType = 'text' | 'number' | 'digit' | 'password' | 'tel' | 'email';
export type InputInteraction = "enabled" | "disabled";


/** Convenience props for a single-component usage (still uses Root under the hood). */
export interface InputComponentsProps {
  value?: string | number;
  placeholder?: string;
  label?: string;
  type: InputType;
  maxlength?: number;
  interaction?: InputInteraction;
  showIcon?: boolean;
  icon?: string;
  iconPosition?: 'left' | 'right';
  theme?: 'light' | 'dark';
  onPress?: (value:string|number) => void;
  onChange?: (value:string|number) => void;
  validate?:(value:string|number) => string | null;
  properties?: {
    label?: {
      className?: string;
      style?: string;
    };
    input?: {
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
