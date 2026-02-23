import { useCallback, useContext } from "@lynx-js/react";
import { SwitchContext } from "./SwitchContext";
import type { SwitchValue } from "./SwitchCommon";

export function SwitchTrack(props: { children?: React.ReactNode }) {
  const ctx = useContext(SwitchContext);
  if (!ctx) return null;
  const { value, onValueChange, interaction } = ctx;
  const onTap = useCallback(() => {
    "background only";
    if (interaction !== "enabled") return;
    const next: SwitchValue = value === "on" ? "off" : "on";
    onValueChange(next);
  }, [value, onValueChange, interaction]);
  return (
    <view
      className={`Switch-track Switch-track--${value} Switch-track--${interaction}`}
      data-value={value}
      data-interaction={interaction}
      bindtap={onTap}
    >
      {props.children}
    </view>
  );
}
