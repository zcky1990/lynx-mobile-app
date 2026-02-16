import { useCallback } from "@lynx-js/react";
import type { SwitchProps } from "./SwitchCommon";

/**
 * A minimal switch toggle. Tap to toggle checked state.
 * Styled to match shadcn-like appearance (rounded track, thumb).
 */
export const Switch = (props: SwitchProps) => {
    const { checked = false, onCheckedChange, disabled = false } = props;

    const onTap = useCallback(() => {
        "background only";
        if (!disabled && onCheckedChange) {
            onCheckedChange(!checked);
        }
    }, [checked, disabled, onCheckedChange]);

    return (
        <view
            className={[
                "inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors",
                disabled ? "opacity-50" : "",
                checked ? "bg-primary" : "bg-input",
            ].join(" ")}
            bindtap={onTap}
        >
            <view
                className={[
                    "pointer-events-none block h-5 w-5 rounded-full bg-primary-foreground shadow-lg ring-0 transition-transform",
                    checked ? "translate-x-5" : "translate-x-0.5",
                ].join(" ")}
            />
        </view>
    );
};
