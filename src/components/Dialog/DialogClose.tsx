import { useContext } from '@lynx-js/react';
import { DialogContext } from './DialogContext';
import type { DialogCloseProps } from './DialogCommon';

export function DialogClose(props: DialogCloseProps) {
  const { children, className = '' } = props;
  const context = useContext(DialogContext);
  const handlePress = () => context?.closeDialog();

  return (
    <view className={`inline-flex ${className}`.trim()} bindtap={handlePress}>
      {children}
    </view>
  );
}
