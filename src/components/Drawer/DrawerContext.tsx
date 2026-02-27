import { createContext } from '@lynx-js/react';
import type { DrawerContextValue } from './DrawerCommon';

export const DrawerContext = createContext<DrawerContextValue | null>(null);
