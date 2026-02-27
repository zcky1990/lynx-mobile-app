import { useContext } from '@lynx-js/react';
import { DialogContext } from './DialogContext';
import type { DialogTriggerProps } from './DialogCommon';

export function DialogTrigger(props: DialogTriggerProps) {
  const { children, className = '' } = props;
  const context = useContext(DialogContext);
  const handlePress = () => context?.openDialog();

  return (
    <view className={`inline-flex ${className}`.trim()} bindtap={handlePress}>
      {children}
    </view>
  );
}
