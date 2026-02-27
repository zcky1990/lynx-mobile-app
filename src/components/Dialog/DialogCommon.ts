/**
 * Dialog component types.
 * Composition API: Dialog (root), Dialog.Trigger, Dialog.Content, Dialog.Close.
 */

export interface DialogContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  openDialog: () => void;
  closeDialog: () => void;
}

export interface DialogRootProps {
  children: React.ReactNode;
  /** Controlled: when provided, open state is controlled by parent */
  open?: boolean;
  /** Called when open state would change (for controlled use) */
  onOpenChange?: (open: boolean) => void;
  /** Uncontrolled: initial open state */
  defaultOpen?: boolean;
  className?: string;
}

export interface DialogTriggerProps {
  children: React.ReactNode;
  /** Optional: render as child of a Button; if not set, children are wrapped in a pressable view */
  asChild?: boolean;
  className?: string;
}

export interface DialogContentProps {
  children: React.ReactNode;
  /** When true, tapping the backdrop closes the dialog */
  closeOnBackdropPress?: boolean;
  /** Optional class for the overlay (backdrop) */
  overlayClassName?: string;
  /** Optional class for the content panel */
  className?: string;
  /** Optional style for the content panel */
  style?: string;
}

export interface DialogCloseProps {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}
