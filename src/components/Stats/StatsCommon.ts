/**
 * Stats component types.
 * Styled after HyperUI Application stats: title, value, optional from value,
 * optional icon, and themed growth indicator (e.g. +12.5%).
 */

export type GrowthTrend = 'up' | 'down';

export interface StatsGrowthType {
  /** Display text, e.g. "+12.5%" or "-3.2%" */
  value: string;
  trend: GrowthTrend;
}

export interface StatsProps {
  /** Stat label, e.g. "Total Revenue" */
  title: string;
  /** Main value, e.g. "€45,231" */
  value: string | number;
  /** Optional context line, e.g. "from last week" */
  fromValue?: string;
  /** Optional growth indicator with trend for color (success/destructive) */
  growth?: StatsGrowthType;
  /** Optional icon name (Icon component), e.g. "user", "calendar" */
  icon?: string;
  /** Stacked layout (title/value vertical) vs default inline-friendly layout */
  stacked?: boolean;
  theme?: string;
  className?: string;
}
