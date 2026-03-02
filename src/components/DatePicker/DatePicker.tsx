import type { DatePickerProps } from "./DatePickerCommon";
import { useDatePicker } from "./useDatePicker";
import { Icon } from "../Icon/Icon";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const ICON_COLOR_LIGHT = "#202020";
const ICON_COLOR_DARK = "#eeeeee";

export function DatePicker(props: DatePickerProps) {
  const {
    placeholder = "Pick a date",
    label,
    theme,
    className = "",
  } = props;

  const {
    open,
    toggleOpen,
    prevMonth,
    nextMonth,
    monthLabel,
    days,
    valueDate,
    displayText,
    isDaySelected,
    isDayDisabled,
    selectDay,
  } = useDatePicker({
    value: props.value,
    onChange: props.onChange,
    placeholder,
    minDate: props.minDate,
    maxDate: props.maxDate,
  });

  const isDark = theme === "dark";
  const iconColor = isDark ? ICON_COLOR_DARK : ICON_COLOR_LIGHT;

  const triggerClass =
    "flex flex-row items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm w-full " +
    (isDark ? "bg-popover text-popover-foreground" : "bg-background text-foreground");

  const calendarClass =
    "rounded-lg border border-border shadow-lg overflow-hidden mt-1 min-w-[280px] " +
    (isDark ? "bg-popover text-popover-foreground" : "bg-background");

  return (
    <view className={`relative ${className}`.trim()}>
      {label != null && (
        <view className="mb-1">
          <text className="text-sm font-medium text-foreground">{label}</text>
        </view>
      )}
      <view className={triggerClass} bindtap={toggleOpen}>
        <Icon name="calendar" size={18} color={iconColor} />
        <text
          className={`flex-1 text-left ${!valueDate ? "text-muted-foreground" : "text-foreground"}`}
        >
          {displayText}
        </text>
        <Icon
          name={open ? "chevronUp" : "chevronDown"}
          size={16}
          color={iconColor}
        />
      </view>

      {open && (
        <view className={calendarClass}>
          <view className="flex flex-row items-center justify-between border-b border-border px-3 py-2">
            <view
              className="flex items-center justify-center p-1 active:opacity-70"
              bindtap={prevMonth}
            >
              <Icon name="chevronLeft" size={20} color={iconColor} />
            </view>
            <text className="text-sm font-semibold text-foreground">
              {monthLabel}
            </text>
            <view
              className="flex items-center justify-center p-1 active:opacity-70"
              bindtap={nextMonth}
            >
              <Icon name="chevronRight" size={20} color={iconColor} />
            </view>
          </view>
          <view className="p-3">
            <view className="flex flex-row flex-wrap gap-1">
              {WEEKDAYS.map((w) => (
                <view
                  key={w}
                  className="w-[calc((100%-24px)/7)] items-center justify-center"
                >
                  <text className="text-xs font-medium text-muted-foreground">
                    {w}
                  </text>
                </view>
              ))}
              {days.map((day, i) => (
                <view
                  key={i}
                  className="w-[calc((100%-24px)/7)] items-center justify-center"
                >
                  {day == null ? (
                    <view className="h-8 w-8" />
                  ) : (
                    <view
                      className={`flex h-8 w-8 items-center justify-center rounded-full active:opacity-80 ${
                        isDaySelected(day) ? "bg-primary" : ""
                      } ${isDayDisabled(day) ? "opacity-40" : ""}`}
                      bindtap={() => selectDay(day)}
                    >
                      <text
                        className={`text-sm ${
                          isDaySelected(day)
                            ? "font-semibold text-primary-foreground"
                            : "text-foreground"
                        }`}
                      >
                        {day}
                      </text>
                    </view>
                  )}
                </view>
              ))}
            </view>
          </view>
        </view>
      )}
    </view>
  );
}
