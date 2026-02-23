import { Checkbox } from './Checkbox';
import { Divider } from '../Divider/Divider';
import type { CheckboxGroupProps } from './CheckboxCommon';

/**
 * Renders a list of checkboxes with dividers between items (HyperUI "Described with divide").
 */
export function CheckboxGroup(props: CheckboxGroupProps) {
  const { items, className = '' } = props;

  if (items.length === 0) return null;

  return (
    <view className={`flex flex-col ${className}`.trim()}>
      {items.map((item, index) => (
        <view key={index}>
          {index > 0 && <Divider variant="base" className="my-3" />}
          <Checkbox
            checked={item.checked}
            onCheckedChange={item.onCheckedChange}
            label={item.label}
            description={item.description}
            interaction={item.interaction}
          />
        </view>
      ))}
    </view>
  );
}
