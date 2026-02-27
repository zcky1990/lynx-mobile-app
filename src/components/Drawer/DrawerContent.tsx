import { useContext, useState, useCallback, useEffect } from '@lynx-js/react';
import { twMerge } from 'tailwind-merge';
import { DrawerContext } from './DrawerContext';
import type { DrawerContentProps, DrawerSide } from './DrawerCommon';

const DRAWER_EXIT_MS = 300;

const overlayBase = 'fixed inset-0 z-50 bg-black/50';

const panelBaseBySide: Record<DrawerSide, string> = {
  left:
    'fixed left-0 top-0 bottom-0 z-[51] w-[280px] max-w-[85vw] overflow-auto border-r border-border bg-card text-card-foreground shadow-xl',
  right:
    'fixed right-0 top-0 bottom-0 z-[51] w-[280px] max-w-[85vw] overflow-auto border-l border-border bg-card text-card-foreground shadow-xl',
  bottom:
    'fixed left-0 right-0 bottom-0 z-[51] max-h-[85vh] overflow-auto rounded-t-xl border border-border border-b-0 bg-card text-card-foreground shadow-xl',
};

const panelEnterClass: Record<DrawerSide, string> = {
  left: 'Drawer-panel--enter-left',
  right: 'Drawer-panel--enter-right',
  bottom: 'Drawer-panel--enter-bottom',
};

const panelExitClass: Record<DrawerSide, string> = {
  left: 'Drawer-panel--exit-left',
  right: 'Drawer-panel--exit-right',
  bottom: 'Drawer-panel--exit-bottom',
};

export function DrawerContent(props: DrawerContentProps) {
  const {
    children,
    side = 'right',
    closeOnBackdropPress = true,
    overlayClassName = '',
    className = '',
    style,
  } = props;
  const context = useContext(DrawerContext);
  const [isExiting, setIsExiting] = useState(false);

  const finishClose = useCallback(() => {
    context?.closeDrawer();
  }, [context]);

  useEffect(() => {
    if (!isExiting) return;
    const t = setTimeout(finishClose, DRAWER_EXIT_MS);
    return () => clearTimeout(t);
  }, [isExiting, finishClose]);

  useEffect(() => {
    context?.registerCloseHandler(() => setIsExiting(true));
  }, [context]);

  // Reset exiting state when drawer opens (fixes reopen when component doesn't unmount)
  useEffect(() => {
    if (context?.open) {
      setIsExiting(false);
    }
  }, [context?.open]);

  if (!context?.open) return null;

  const handleBackdropPress = () => {
    if (!closeOnBackdropPress) return;
    context?.requestClose();
  };

  const handlePanelPress = () => {};

  const overlayClass = isExiting ? 'Drawer-overlay--exit' : 'Drawer-overlay';
  const panelAnimClass = isExiting ? panelExitClass[side] : panelEnterClass[side];

  return (
    <view
      className={twMerge(overlayBase, overlayClass, overlayClassName)}
      bindtap={handleBackdropPress}
    >
      <view
        className={twMerge(panelBaseBySide[side], panelAnimClass, className)}
        style={style}
        bindtap={handlePanelPress}
      >
        {children}
      </view>
    </view>
  );
}
