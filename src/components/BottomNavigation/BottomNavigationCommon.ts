/**
 * BottomNavigation component types.
 * Fixed bottom bar with icon + label per item; one active item.
 */

export interface BottomNavigationItem {
  id: string;
  label: string;
  /** Icon name (Icon component), e.g. "home", "search", "user" */
  icon: string;
}

export interface BottomNavigationProps {
  items: BottomNavigationItem[];
  /** ID of the currently active item */
  activeId: string;
  /** Called when an item is tapped */
  onChange: (activeId: string) => void;
  theme?: "light" | "dark";
  className?: string;
}
