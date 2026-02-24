import { useContext } from "@lynx-js/react";
import { TabsContext } from "./TabsContext";

export const TabPanel = ({ id, children }: { id: string, children: React.ReactNode }) => {
    const context = useContext(TabsContext);
    if (context?.activeTab !== id) return null;
  
    return <view className="mt-4">{children}</view>;
};