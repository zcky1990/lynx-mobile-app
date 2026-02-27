import { createContext } from '@lynx-js/react';
import type { DialogContextValue } from './DialogCommon';

export const DialogContext = createContext<DialogContextValue | null>(null);
