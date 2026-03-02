import { useState, useMemo } from "@lynx-js/react";
import type { DatePickerProps } from "./DatePickerCommon";
import { Icon } from "../Icon/Icon";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function toDate(v: Date | string | null | undefined): Date | null {
  if (v == null) return null;
  if (v instanceof Date) return Number.isNaN(v.getTime()) ? null : v;
  const d = new Date(v);
  return Number.isNaN(d.getTime()) ? null : d;
}

function formatDisplay(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function daysInMonth(d: Date): number {
  return new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
}

function getStartWeekday(d: Date): number {
  return new Date(d.getFullYear(), d.getMonth(), 1).getDay();
}

function isSameDay(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function isBefore(a: Date, b: Date): boolean {
  return a.getTime() < b.getTime();
}

function isAfter(a: Date, b: Date): boolean {
  return a.getTime() > b.getTime();
}

const ICON_COLOR_LIGHT = "#202020";
const ICON_COLOR_DARK = "#eeeeee";

export function DatePicker(props: DatePickerProps) {
  const {
    value,
    onChange,
    placeholder = "Pick a date",
    label,
    theme,
    minDate: minDateProp,
    maxDate: maxDateProp,
    className = "",
  } = props;

  const valueDate = toDate(value);
  const minDate = toDate(minDateProp);
  const maxDate = toDate(maxDateProp);

  const [open, setOpen] = useState(false);
  const [viewMonth, setViewMonth] = useState<Date>(() => valueDate ?? new Date());

  const displayText = valueDate ? formatDisplay(valueDate) : placeholder;
  const isDark = theme === "dark";
  const iconColor = isDark ? ICON_COLOR_DARK : ICON_COLOR_LIGHT;

  const days = useMemo(() => {
    const count = daysInMonth(viewMonth);
    const startWeekday = getStartWeekday(viewMonth);
    const list: (number | null)[] = [];
    for (let i = 0; i < startWeekday; i++) list.push(null);
    for (let i = 1; i <= count; i++) list.push(i);
    return list;
  }, [viewMonth]);

  const prevMonth = () => {
    setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1));
  };

  const handleSelectDay = (day: number) => {
    const d = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), day);
    if (minDate && isBefore(d, minDate)) return;
    if (maxDate && isAfter(d, maxDate)) return;
    onChange?.(d);
    setOpen(false);
  };

  const isDayDisabled = (day: number): boolean => {
    const d = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), day);
    if (minDate && isBefore(d, minDate)) return true;
    if (maxDate && isAfter(d, maxDate)) return true;
    return false;
  };

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
      <view
        className={triggerClass}
        bindtap={() => setOpen(!open)}
      >
        <Icon name="calendar" size={18} color={iconColor} />
        <text className={`flex-1 text-left ${!valueDate ? "text-muted-foreground" : "text-foreground"}`}>
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
              {MONTHS[viewMonth.getMonth()]} {viewMonth.getFullYear()}
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
                <view key={w} className="w-[calc((100%-24px)/7)] items-center justify-center">
                  <text className="text-xs font-medium text-muted-foreground">{w}</text>
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
                        valueDate && isSameDay(new Date(viewMonth.getFullYear(), viewMonth.getMonth(), day), valueDate)
                          ? "bg-primary"
                          : ""
                      } ${isDayDisabled(day) ? "opacity-40" : ""}`}
                      bindtap={() => !isDayDisabled(day) && handleSelectDay(day)}
                    >
                      <text
                        className={`text-sm ${
                          valueDate && isSameDay(new Date(viewMonth.getFullYear(), viewMonth.getMonth(), day), valueDate)
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
