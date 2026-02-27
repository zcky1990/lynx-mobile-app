import { DrawerRoot } from './Drawer';
import { DrawerTrigger } from './DrawerTrigger';
import { DrawerContent } from './DrawerContent';
import { DrawerClose } from './DrawerClose';

export const Drawer = Object.assign(DrawerRoot, {
  Trigger: DrawerTrigger,
  Content: DrawerContent,
  Close: DrawerClose,
});

export type {
  DrawerRootProps,
  DrawerTriggerProps,
  DrawerContentProps,
  DrawerCloseProps,
  DrawerContextValue,
  DrawerSide,
} from './DrawerCommon';
