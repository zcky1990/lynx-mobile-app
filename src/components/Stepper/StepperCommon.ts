/**
 * Stepper component types.
 * Styled after HyperUI Application steps: title, icon, progress bar, step/total, grouped, timeline.
 * Icons use dark/light (theme) instead of on/off: same pattern as Switch ThumbIcon.
 */

export interface IconType {
  name: string;
  size?: number;
  color?: string;
}

/** Theme-based icon config: dark and light (and optional default) for step icons. */
export interface StepIconConfig {
  dark?: IconType;
  light?: IconType;
  default?: IconType;
}

export interface StepItem {
  title?: string;
  description?: string;
  /** Icon per step; resolved by theme (dark/light/default). */
  icon?: StepIconConfig;
}

export type StepperVariant =
  | "progress"
  | "stepCounter"
  | "grouped"
  | "timeline";

export interface StepperProps {
  steps: StepItem[];
  /** Current step index (0-based). */
  currentStep: number;
  variant?: StepperVariant;
  theme?: "light" | "dark";
  showProgressBar?: boolean;
  className?: string;
}
