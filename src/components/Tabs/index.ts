import { Tabs as TabsRoot } from "./Tabs";
import { TabList } from "./TabsList";
import { TabTrigger } from "./TabsTriggers";
import { TabPanel } from "./TabsPanel";

// Gabungkan menjadi satu objek
export const Tabs = Object.assign(TabsRoot, {
  List: TabList,
  Trigger: TabTrigger,
  Panel: TabPanel,
});