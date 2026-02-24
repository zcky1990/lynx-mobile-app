/**
 * Explicit value variant instead of boolean (per composition rules).
 * interaction variant instead of disabled boolean.
 */
export type LoaderType = "spinner" | "loader";
export type LoaderInteraction = "enabled" | "disabled";
export type LoaderProperties = {
  spinner?: {
    size: number;
    colorStroke?: string;
    colorFill?: string;
  };
  loader?: {
   textColor?: string;
   animate?: boolean;
   progressBarColor?: string;
   progressBarBackgroundColor?: string;
  };
};

/** Convenience props for a single-component usage (still uses Root under the hood). */
export interface LoaderProps {
  percentage?: number;
  label?: String;
  type: LoaderType;
  properties?: LoaderProperties;
}
