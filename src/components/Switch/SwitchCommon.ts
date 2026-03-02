/**
 * Explicit value variant instead of boolean (per composition rules).
 * interaction variant instead of disabled boolean.
 */
export type SwitchValue = "on" | "off";
export type SwitchInteraction = "enabled" | "disabled";

export interface IconType {
  name: string;
  size?: number;
  color?: string;
}

export interface ThumbIcon {
  on?: IconType
  off?: IconType
  default?: IconType
}

export interface SwitchContextValue {
  value: SwitchValue;
  onValueChange: (value: SwitchValue) => void;
  interaction: SwitchInteraction;
  thumbIcon?: ThumbIcon;
}

export interface SwitchRootProps {
  value: SwitchValue;
  onValueChange: (value: SwitchValue) => void;
  interaction?: SwitchInteraction;
  thumbIcon?: ThumbIcon;
  children?: React.ReactNode;
}

/** Convenience props for a single-component usage (still uses Root under the hood). */
export interface SwitchProps {
  theme?: string;
  value: SwitchValue;
  onValueChange: (value: SwitchValue) => void;
  interaction?: SwitchInteraction;
  thumbIcon?: ThumbIcon;
}
