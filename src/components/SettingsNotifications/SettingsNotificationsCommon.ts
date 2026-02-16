export interface NotificationItemProps {
    title: string;
    description: string;
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    disabled?: boolean;
}

export interface SettingsNotificationsProps {
    items?: Array<NotificationItemProps>;
}
