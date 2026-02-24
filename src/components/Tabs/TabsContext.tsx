import { createContext } from '@lynx-js/react'

export const TabsContext = createContext<{
    activeTab: string;
    setActiveTab: (id: string) => void;
  } | null>(null);