/**
 * Breadcrumb component types.
 * Styled after HyperUI Application breadcrumbs (base, slash/chevron divider, optional home icon).
 */

export type BreadcrumbDivider = 'chevron' | 'slash';

export interface BreadcrumbItemType {
  /** Display label */
  label: string;
  /** Press handler; omit for current (non-clickable) item */
  onPress?: () => void;
}

export interface BreadcrumbProps {
  /** List of breadcrumb items; last item is typically current page (no onPress) */
  items: BreadcrumbItemType[];
  /** Separator between items: chevron (›) or slash (/) */
  divider?: BreadcrumbDivider;
  /** Show home icon before the first item */
  showHomeIcon?: boolean;
  /** Additional class name for the root container */
  className?: string;
}
