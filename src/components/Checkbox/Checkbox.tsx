import { useCallback } from '@lynx-js/react';
import type { CheckboxProps } from './CheckboxCommon';

export function Checkbox(props: CheckboxProps) {
  const {
    checked,
    onCheckedChange,
    label,
    description,
    interaction = 'enabled',
    className = '',
  } = props;

  const isDisabled = interaction === 'disabled';
  const onTap = useCallback(() => {
    'background only';
    if (isDisabled) return;
    onCheckedChange?.(!checked);
  }, [checked, onCheckedChange, isDisabled]);

  const hasDescription = description != null && description !== '';
  const isDescribed = hasDescription;

  return (
    <view
      className={`flex flex-row items-start gap-3 ${className}`.trim()}
      bindtap={onTap}
    >
      <view
        className={`Checkbox-box ${checked ? 'Checkbox-box--checked' : ''} ${isDisabled ? 'Checkbox-box--disabled' : ''}`}
        data-checked={checked}
        data-interaction={interaction}
      >
        {checked && <text className="Checkbox-check">✓</text>}
      </view>
      {(label != null || hasDescription) && (
        <view className="flex flex-1 flex-col gap-0.5 min-w-0">
          {label != null && (
            <text className="text-foreground font-medium">{label}</text>
          )}
          {hasDescription && (
            <text className="text-muted-foreground text-sm">{description}</text>
          )}
        </view>
      )}
    </view>
  );
}
