import { useContext } from "@lynx-js/react";
import type { IconType, SwitchContextValue } from "./SwitchCommon";
import { Icon } from "../Icon/Icon";
import { SwitchContext } from "./SwitchContext";

const DEFAULT_ICON_SIZE = 12;
/** Hex fallback; CSS vars (e.g. var(--primary)) do not resolve inside data-URL SVGs in Lynx. */
const DEFAULT_ICON_COLOR = "#333333";

export interface SwitchThumbProps {
  /** Custom content (e.g. Icon) when not using thumbIcon on Root */
  children?: React.ReactNode;
}

function getThumbIconConfig(ctx: SwitchContextValue): IconType | undefined {
  const t = ctx.thumbIcon;
  if (!t) return undefined;
  if (ctx.value === "on" && t.on != null) return t.on;
  if (ctx.value === "off" && t.off != null) return t.off;
  return t.default;
}

export function SwitchThumb(props: SwitchThumbProps) {
  const { children } = props;
  const ctx = useContext(SwitchContext);
  if (!ctx) return null;
  const iconConfig = getThumbIconConfig(ctx);
  const content = iconConfig ? (
    <Icon
      name={iconConfig.name}
      size={iconConfig.size ?? DEFAULT_ICON_SIZE}
      color={iconConfig.color ?? DEFAULT_ICON_COLOR}
    />
  ) : (
    children
  );
  return (
    <view className="Switch-thumb flex items-center justify-center">
      {content}
    </view>
  );
}
