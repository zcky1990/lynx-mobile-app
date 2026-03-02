import type { BottomNavigationProps } from "./BottomNavigationCommon";
import { Icon } from "../Icon/Icon";

const NAV_ICON_SIZE = 22;

/** Hex colors for Icon; CSS vars may not resolve in Lynx data-URL SVGs. */
const ICON_COLORS = {
  activeLight: "#644a40",
  activeDark: "#ffe0c2",
  inactiveLight: "#646464",
  inactiveDark: "#b4b4b4",
} as const;

export function BottomNavigation(props: BottomNavigationProps) {
  const { items, activeId, onChange, theme, className = "" } = props;

  if (items.length === 0) return null;

  const isDark = theme === "dark";

  return (
    <view
      className={`fixed bottom-0 left-0 right-0 flex flex-row items-center justify-around border-t border-border bg-background py-2 safe-area-pb ${className}`.trim()}
    >
      {items.map((item) => {
        const isActive = item.id === activeId;
        const iconColor = isActive
          ? isDark
            ? ICON_COLORS.activeDark
            : ICON_COLORS.activeLight
          : isDark
            ? ICON_COLORS.inactiveDark
            : ICON_COLORS.inactiveLight;
        const textClass = isActive
          ? "text-xs font-medium text-primary"
          : "text-xs text-muted-foreground";

        return (
          <view
            key={item.id}
            className="flex flex-1 flex-col items-center justify-center gap-0.5 active:opacity-80"
            bindtap={() => onChange(item.id)}
          >
            <Icon
              name={item.icon}
              size={NAV_ICON_SIZE}
              color={iconColor}
            />
            <text className={textClass}>{item.label}</text>
          </view>
        );
      })}
    </view>
  );
}
