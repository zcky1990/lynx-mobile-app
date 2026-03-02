import { useState, useMemo, useCallback } from "@lynx-js/react";
import {
  format,
  parseISO,
  startOfMonth,
  getDaysInMonth,
  getDay,
  addMonths,
  subMonths,
  setDate,
  isSameDay,
  isBefore,
  isAfter,
  isValid,
} from "date-fns";

export type DatePickerValue = Date | string | null | undefined;

function toDate(v: DatePickerValue): Date | null {
  if (v == null) return null;
  if (v instanceof Date) return isValid(v) ? v : null;
  try {
    const d = typeof v === "string" ? parseISO(v) : new Date(v);
    return isValid(d) ? d : null;
  } catch {
    return null;
  }
}

export interface UseDatePickerOptions {
  value?: DatePickerValue;
  onChange?: (date: Date | null) => void;
  placeholder?: string;
  minDate?: DatePickerValue;
  maxDate?: DatePickerValue;
}

export interface UseDatePickerReturn {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggleOpen: () => void;
  viewMonth: Date;
  prevMonth: () => void;
  nextMonth: () => void;
  monthLabel: string;
  days: (number | null)[];
  valueDate: Date | null;
  displayText: string;
  isDaySelected: (day: number) => boolean;
  isDayDisabled: (day: number) => boolean;
  selectDay: (day: number) => void;
  getDayDate: (day: number) => Date;
}

const MONTH_FORMAT = "MMMM yyyy";
const DISPLAY_FORMAT = "yyyy-MM-dd";

export function useDatePicker(options: UseDatePickerOptions): UseDatePickerReturn {
  const {
    value,
    onChange,
    placeholder = "Pick a date",
    minDate: minDateProp,
    maxDate: maxDateProp,
  } = options;

  const valueDate = toDate(value);
  const minDate = toDate(minDateProp);
  const maxDate = toDate(maxDateProp);

  const [open, setOpen] = useState(false);
  const [viewMonth, setViewMonth] = useState<Date>(() => valueDate ?? new Date());

  const displayText = valueDate ? format(valueDate, DISPLAY_FORMAT) : placeholder;

  const days = useMemo(() => {
    const start = startOfMonth(viewMonth);
    const count = getDaysInMonth(viewMonth);
    const offset = getDay(start);
    const list: (number | null)[] = [];
    for (let i = 0; i < offset; i++) list.push(null);
    for (let i = 1; i <= count; i++) list.push(i);
    return list;
  }, [viewMonth]);

  const prevMonth = useCallback(() => {
    setViewMonth((m) => subMonths(m, 1));
  }, []);

  const nextMonth = useCallback(() => {
    setViewMonth((m) => addMonths(m, 1));
  }, []);

  const monthLabel = format(viewMonth, MONTH_FORMAT);

  const getDayDate = useCallback(
    (day: number): Date => setDate(new Date(viewMonth.getTime()), day),
    [viewMonth]
  );

  const isDaySelected = useCallback(
    (day: number): boolean => (valueDate ? isSameDay(getDayDate(day), valueDate) : false),
    [valueDate, getDayDate]
  );

  const isDayDisabled = useCallback(
    (day: number): boolean => {
      const d = getDayDate(day);
      if (minDate && isBefore(d, minDate)) return true;
      if (maxDate && isAfter(d, maxDate)) return true;
      return false;
    },
    [minDate, maxDate, getDayDate]
  );

  const selectDay = useCallback(
    (day: number) => {
      if (isDayDisabled(day)) return;
      const d = getDayDate(day);
      onChange?.(d);
      setOpen(false);
    },
    [onChange, isDayDisabled, getDayDate]
  );

  const toggleOpen = useCallback(() => setOpen((o) => !o), []);

  return {
    open,
    setOpen,
    toggleOpen,
    viewMonth,
    prevMonth,
    nextMonth,
    monthLabel,
    days,
    valueDate,
    displayText,
    isDaySelected,
    isDayDisabled,
    selectDay,
    getDayDate,
  };
}
