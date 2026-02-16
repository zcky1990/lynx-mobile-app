import { SettingsNotificationItem } from "./SettingsNotificationItem";
import type { SettingsNotificationsProps } from "./SettingsNotificationsCommon";

/**
 * Minimal notification settings list (shadcn Settings Notifications 2 style).
 * Vertical list: each row has title, description, and switch; dividers between items.
 */
export const SettingsNotifications = (props: SettingsNotificationsProps) => {
    const { items = [] } = props;

    return (
        <view className="w-full">
            <view className="rounded-lg border border-border bg-card">
                {items.map((item, index) => (
                    <view
                        key={index}
                        className={index < items.length - 1 ? "border-b border-border px-4" : "px-4"}
                    >
                        <SettingsNotificationItem {...item} />
                    </view>
                ))}
            </view>
        </view>
    );
};
