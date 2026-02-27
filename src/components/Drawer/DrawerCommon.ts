/**
 * Drawer component types.
 * Composition API: Drawer (root), Drawer.Trigger, Drawer.Content, Drawer.Close.
 * Panel slides in from left, right, or bottom.
 */

export type DrawerSide = 'left' | 'right' | 'bottom';

export interface DrawerContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  /** Request close with exit animation (used by Drawer.Content and Drawer.Close) */
  requestClose: () => void;
  /** Register handler to run when requestClose is called (used by Drawer.Content) */
  registerCloseHandler: (handler: () => void) => void;
}

export interface DrawerRootProps {
  children: React.ReactNode;
  /** Controlled: when provided, open state is controlled by parent */
  open?: boolean;
  /** Called when open state would change (for controlled use) */
  onOpenChange?: (open: boolean) => void;
  /** Uncontrolled: initial open state */
  defaultOpen?: boolean;
  className?: string;
}

export interface DrawerTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export interface DrawerContentProps {
  children: React.ReactNode;
  /** Which side the panel slides in from */
  side?: DrawerSide;
  /** When true, tapping the backdrop closes the drawer */
  closeOnBackdropPress?: boolean;
  /** Optional class for the overlay (backdrop) */
  overlayClassName?: string;
  /** Optional class for the panel */
  className?: string;
  /** Optional style for the panel */
  style?: string;
}

export interface DrawerCloseProps {
  children: React.ReactNode;
  className?: string;
}
