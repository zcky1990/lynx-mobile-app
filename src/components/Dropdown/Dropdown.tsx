import { useState } from '@lynx-js/react';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../providers';
import { Icon } from '../Icon/Icon';
import type { DropdownProps, DropdownItem } from './DropdownCommon';

export function Dropdown(props: DropdownProps) {
  const {
    triggerLabel,
    items = [],
    groups = [],
    variant = 'base',
    theme: themeProp,
    label,
    properties,
  } = props;

  const { resolvedTheme } = useTheme();
  const theme = themeProp ?? resolvedTheme;

  const [open, setOpen] = useState(false);

  const isDark = theme === 'dark';

  const labelClassName = () => {
    const defaultClassName = 'text-sm font-medium text-foreground';
    return properties?.label?.className
      ? twMerge(defaultClassName, properties.label.className)
      : defaultClassName;
  };

  const triggerClassName = () => {
    const base =
      'flex flex-row items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium shadow-sm w-full';
    const themeCls = isDark
      ? 'border-border bg-popover text-popover-foreground'
      : 'border-border bg-background text-foreground';
    const defaultClassName = `${base} ${themeCls}`;
    return properties?.trigger?.className
      ? twMerge(defaultClassName, properties.trigger.className)
      : defaultClassName;
  };

  const menuClassName = () => {
    const base = 'rounded-lg border shadow-lg mt-1 min-w-[8rem] overflow-hidden';
    const themeCls = isDark
      ? 'border-border bg-popover text-popover-foreground'
      : 'border-border bg-background';
    const defaultClassName = `${base} ${themeCls}`;
    return properties?.menu?.className
      ? twMerge(defaultClassName, properties.menu.className)
      : defaultClassName;
  };

  const itemClassName = () => {
    const base = 'flex w-full items-center px-4 py-2 text-sm text-left';
    const themeCls = isDark
      ? 'text-popover-foreground active:bg-accent active:text-accent-foreground'
      : 'text-foreground active:bg-accent active:text-accent-foreground';
    const defaultClassName = `${base} ${themeCls}`;
    return properties?.item?.className
      ? twMerge(defaultClassName, properties.item.className)
      : defaultClassName;
  };

  const dividerClassName = () => {
    const defaultClassName = 'border-t border-border';
    return properties?.divider?.className
      ? twMerge(defaultClassName, properties.divider.className)
      : defaultClassName;
  };

  const groupLabelClassName = () => {
    const defaultClassName = 'px-4 py-2 text-xs font-semibold text-muted-foreground';
    return properties?.groupLabel?.className
      ? twMerge(defaultClassName, properties.groupLabel.className)
      : defaultClassName;
  };

  const iconColor = isDark ? 'white' : 'black';

  const handleItemSelect = (item: DropdownItem) => () => {
    item.onSelect?.();
    setOpen(false);
  };

  const renderItem = (item: DropdownItem) => (
    <view
      key={item.id}
      className={itemClassName()}
      style={properties?.item?.style}
      bindtap={handleItemSelect(item)}
    >
      <text className="text-current">{item.label}</text>
    </view>
  );

  const renderBaseMenu = () => (
    <view className={menuClassName()} style={properties?.menu?.style}>
      {items.map(renderItem)}
    </view>
  );

  const renderDividedMenu = () => (
    <view className={menuClassName()} style={properties?.menu?.style}>
      {items.map((item, index) => (
        <view key={item.id}>
          {index > 0 ? (
            <view className={dividerClassName()} style={properties?.divider?.style} />
          ) : null}
          {renderItem(item)}
        </view>
      ))}
    </view>
  );

  const renderGroupedMenu = () => (
    <view className={menuClassName()} style={properties?.menu?.style}>
      {groups.map((group, groupIndex) => (
        <view key={groupIndex}>
          {groupIndex > 0 ? (
            <view className={dividerClassName()} style={properties?.divider?.style} />
          ) : null}
          {group.label != null ? (
            <view
              className={groupLabelClassName()}
              style={properties?.groupLabel?.style}
            >
              <text>{group.label}</text>
            </view>
          ) : null}
          {group.items.map(renderItem)}
        </view>
      ))}
    </view>
  );

  const renderMenu = () => {
    if (variant === 'grouped' && groups.length > 0) return renderGroupedMenu();
    if (variant === 'divided') return renderDividedMenu();
    return renderBaseMenu();
  };

  const hasContent =
    variant === 'grouped' ? groups.length > 0 : items.length > 0;

  return (
    <view className="relative">
      {label != null ? (
        <view className="mb-1">
          <text
            className={labelClassName()}
            style={properties?.label?.style}
          >
            {label}
          </text>
        </view>
      ) : null}
      <view
        className={triggerClassName()}
        style={properties?.trigger?.style}
        bindtap={() => setOpen(!open)}
      >
        <text className="text-current flex-1 text-left">{triggerLabel}</text>
        <view className="flex items-center justify-center flex-shrink-0">
          <Icon
            name={open ? 'chevronUp' : 'chevronDown'}
            color={iconColor}
            size={16}
          />
        </view>
      </view>
      {open && hasContent ? renderMenu() : null}
    </view>
  );
}
