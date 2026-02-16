import { useCallback, useState } from "@lynx-js/react";
import { Switch } from "../Switch/Switch";
import type { NotificationItemProps } from "./SettingsNotificationsCommon";

/**
 * Single row: title, description, and switch aligned to the right.
 * Divider is handled by the parent list.
 */
export const SettingsNotificationItem = (props: NotificationItemProps) => {
    const {
        title,
        description,
        checked: controlledChecked,
        onCheckedChange,
        disabled = false,
    } = props;

    const isControlled = typeof controlledChecked === "boolean";
    const [internalChecked, setInternalChecked] = useState(Boolean(controlledChecked));
    const checked = isControlled ? controlledChecked : internalChecked;

    const handleChange = useCallback(
        (value: boolean) => {
            "background only";
            if (!isControlled) setInternalChecked(value);
            onCheckedChange?.(value);
        },
        [isControlled, onCheckedChange]
    );

    return (
        <view className="flex flex-row items-center justify-between gap-4 py-4">
            <view className="flex flex-1 flex-col gap-0.5 min-w-0">
                <text className="text-foreground font-medium">{title}</text>
                <text className="text-muted-foreground text-sm">{description}</text>
            </view>
            <Switch
                checked={checked}
                onCheckedChange={handleChange}
                disabled={disabled}
            />
        </view>
    );
};
