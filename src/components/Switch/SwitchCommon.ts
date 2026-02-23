/**
 * Explicit value variant instead of boolean (per composition rules).
 * interaction variant instead of disabled boolean.
 */
export type SwitchValue = "on" | "off";
export type SwitchInteraction = "enabled" | "disabled";

export interface SwitchContextValue {
  value: SwitchValue;
  onValueChange: (value: SwitchValue) => void;
  interaction: SwitchInteraction;
}

export interface SwitchRootProps {
  value: SwitchValue;
  onValueChange: (value: SwitchValue) => void;
  interaction?: SwitchInteraction;
  children?: React.ReactNode;
}

/** Convenience props for a single-component usage (still uses Root under the hood). */
export interface SwitchProps {
  value: SwitchValue;
  onValueChange: (value: SwitchValue) => void;
  interaction?: SwitchInteraction;
}
