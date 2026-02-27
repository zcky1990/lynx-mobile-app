import { DialogRoot } from './Dialog';
import { DialogTrigger } from './DialogTrigger';
import { DialogContent } from './DialogContent';
import { DialogClose } from './DialogClose';

export const Dialog = Object.assign(DialogRoot, {
  Trigger: DialogTrigger,
  Content: DialogContent,
  Close: DialogClose,
});

export type {
  DialogRootProps,
  DialogTriggerProps,
  DialogContentProps,
  DialogCloseProps,
  DialogContextValue,
} from './DialogCommon';
