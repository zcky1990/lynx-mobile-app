import { createContext } from "@lynx-js/react";
import type { SwitchContextValue } from "./SwitchCommon";

export const SwitchContext = createContext<SwitchContextValue | null>(null);
