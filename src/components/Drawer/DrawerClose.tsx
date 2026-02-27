import { useContext } from '@lynx-js/react';
import { DrawerContext } from './DrawerContext';
import type { DrawerCloseProps } from './DrawerCommon';

export function DrawerClose(props: DrawerCloseProps) {
  const { children, className = '' } = props;
  const context = useContext(DrawerContext);
  const handlePress = () => context?.requestClose();

  return (
    <view className={`inline-flex ${className}`.trim()} bindtap={handlePress}>
      {children}
    </view>
  );
}
