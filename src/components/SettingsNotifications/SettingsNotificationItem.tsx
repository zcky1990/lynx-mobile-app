import { useCallback, useState } from "@lynx-js/react";
import { Switch } from "../Switch/Switch";
import type { SwitchValue } from "../Switch/SwitchCommon";
import type { NotificationItemProps } from "./SettingsNotificationsCommon";

/**
 * Single row: title, description, and switch aligned to the right.
 * Uses value/onValueChange and interaction (no boolean props per composition rules).
 */
export const SettingsNotificationItem = (props: NotificationItemProps) => {
  const {
    title,
    description,
    value: controlledValue,
    onValueChange,
    interaction = "enabled",
  } = props;

  const [internalValue, setInternalValue] = useState<SwitchValue>(
    controlledValue ?? "off"
  );
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const handleChange = useCallback(
    (v: SwitchValue) => {
      "background only";
      if (!isControlled) setInternalValue(v);
      onValueChange?.(v);
    },
    [isControlled, onValueChange]
  );

  return (
    <view className="flex flex-row items-center justify-between gap-4 py-4">
      <view className="flex flex-1 flex-col gap-0.5 min-w-0">
        <text className="text-foreground font-medium">{title}</text>
        <text className="text-muted-foreground text-sm">{description}</text>
      </view>
      <Switch
        value={value}
        onValueChange={handleChange}
        interaction={interaction}
      />
    </view>
  );
};
