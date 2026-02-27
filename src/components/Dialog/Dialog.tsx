import { useState, useCallback } from '@lynx-js/react';
import { DialogContext } from './DialogContext';
import type { DialogRootProps } from './DialogCommon';

export function DialogRoot(props: DialogRootProps) {
  const {
    children,
    open: controlledOpen,
    onOpenChange,
    defaultOpen = false,
    className = '',
  } = props;

  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const setOpen = useCallback(
    (next: boolean) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange]
  );

  const openDialog = useCallback(() => setOpen(true), [setOpen]);
  const closeDialog = useCallback(() => setOpen(false), [setOpen]);

  const contextValue = {
    open,
    setOpen,
    openDialog,
    closeDialog,
  };

  return (
    <DialogContext.Provider value={contextValue}>
      <view className={className}>{children}</view>
    </DialogContext.Provider>
  );
}
