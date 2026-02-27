import { useState, useCallback, useRef } from '@lynx-js/react';
import { DrawerContext } from './DrawerContext';
import type { DrawerRootProps } from './DrawerCommon';

export function DrawerRoot(props: DrawerRootProps) {
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
  const closeHandlerRef = useRef<() => void>(() => {});

  const setOpen = useCallback(
    (next: boolean) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange]
  );

  const openDrawer = useCallback(() => setOpen(true), [setOpen]);
  const closeDrawer = useCallback(() => setOpen(false), [setOpen]);
  const requestClose = useCallback(() => {
    closeHandlerRef.current();
  }, []);
  const registerCloseHandler = useCallback((handler: () => void) => {
    closeHandlerRef.current = handler;
  }, []);

  const contextValue = {
    open,
    setOpen,
    openDrawer,
    closeDrawer,
    requestClose,
    registerCloseHandler,
  };

  return (
    <DrawerContext.Provider value={contextValue}>
      <view className={className}>{children}</view>
    </DrawerContext.Provider>
  );
}
