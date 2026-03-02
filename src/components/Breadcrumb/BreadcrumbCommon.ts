/**
 * Breadcrumb component types.
 * Styled after HyperUI Application breadcrumbs (base, slash/chevron divider, optional home icon).
 */

export type BreadcrumbDivider = 'chevron' | 'slash';

export interface BreadcrumbItemType {
  label: string;
  current?: boolean;
  icon?: string;
  url?: string;
  onPress?: () => void;
}

export interface BreadcrumbProps {
  items: BreadcrumbItemType[];
  divider?: BreadcrumbDivider;
  showHomeIcon?: boolean;
  className?: string;
  theme?: string;
}
