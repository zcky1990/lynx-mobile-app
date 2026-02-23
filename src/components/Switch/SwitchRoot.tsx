import { SwitchContext } from "./SwitchContext";
import type { SwitchRootProps } from "./SwitchCommon";

export function SwitchRoot(props: SwitchRootProps) {
  const { value, onValueChange, interaction = "enabled", children } = props;
  return (
    <SwitchContext.Provider value={{ value, onValueChange, interaction }}>
      {children}
    </SwitchContext.Provider>
  );
}
