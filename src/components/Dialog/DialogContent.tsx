import { useContext } from '@lynx-js/react';
import { twMerge } from 'tailwind-merge';
import { DialogContext } from './DialogContext';
import type { DialogContentProps } from './DialogCommon';

const defaultOverlayClass =
  'fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4';
const defaultPanelClass =
  'relative max-h-[90vh] w-full max-w-lg overflow-auto rounded-xl border border-border bg-card text-card-foreground shadow-lg';

export function DialogContent(props: DialogContentProps) {
  const {
    children,
    closeOnBackdropPress = true,
    overlayClassName = '',
    className = '',
    style,
  } = props;
  const context = useContext(DialogContext);

  if (!context?.open) return null;

  const handleBackdropPress = () => {
    if (closeOnBackdropPress) context.closeDialog();
  };

  // Prevent backdrop close when tapping inside the panel (stop propagation if supported)
  const handlePanelPress = () => {};

  return (
    <view
      className={twMerge(defaultOverlayClass, overlayClassName)}
      bindtap={handleBackdropPress}
    >
      <view
        className={twMerge(defaultPanelClass, className)}
        style={style}
        bindtap={handlePanelPress}
      >
        {children}
      </view>
    </view>
  );
}
