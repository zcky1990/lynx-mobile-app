import type { SwitchValue, SwitchInteraction } from "../Switch/SwitchCommon";

export interface NotificationItemProps {
  title: string;
  description: string;
  value?: SwitchValue;
  onValueChange?: (value: SwitchValue) => void;
  interaction?: SwitchInteraction;
}

export interface SettingsNotificationsProps {
  items?: Array<NotificationItemProps>;
}
