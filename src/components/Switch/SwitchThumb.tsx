import { useContext } from "@lynx-js/react";
import { SwitchContext } from "./SwitchContext";

export function SwitchThumb() {
  const ctx = useContext(SwitchContext);
  if (!ctx) return null;
  return <view className="Switch-thumb" />;
}
