import { useContext } from '@lynx-js/react';
import { DrawerContext } from './DrawerContext';
import type { DrawerTriggerProps } from './DrawerCommon';

export function DrawerTrigger(props: DrawerTriggerProps) {
  const { children, className = '' } = props;
  const context = useContext(DrawerContext);
  const handlePress = () => context?.openDrawer();

  return (
    <view className={`inline-flex ${className}`.trim()} bindtap={handlePress}>
      {children}
    </view>
  );
}
