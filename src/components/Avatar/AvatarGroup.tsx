import { twMerge } from 'tailwind-merge';
import { Avatar } from './Avatar';
import type { AvatarGroupProps, AvatarSize } from './AvatarCommon';

const overlapMap: Record<AvatarSize, string> = {
  sm: '-ml-2 first:ml-0',
  md: '-ml-3 first:ml-0',
  lg: '-ml-4 first:ml-0',
};

export function AvatarGroup(props: AvatarGroupProps) {
  const { items, maxCount = 0, size = 'md', theme, className = '' } = props;

  if (items.length === 0) return null;

  const showOverflow = maxCount > 0 && items.length > maxCount;
  const visibleItems = showOverflow ? items.slice(0, maxCount) : items;
  const overflowCount = items.length - maxCount;
  const overlapClass = overlapMap[size];

  const rootClass = twMerge(
    'flex flex-row items-center',
    overlapClass,
    className
  );

  return (
    <view className={rootClass}>
      {visibleItems.map((item, index) => (
        <view key={index} className="ring-2 ring-background rounded-full">
          <Avatar src={item.src} alt={item.alt} size={size} theme={theme} />
        </view>
      ))}
      {showOverflow && overflowCount > 0 && (
        <view
          className={`ring-2 ring-background rounded-full flex items-center justify-center bg-muted text-muted-foreground font-medium text-xs ${overlapClass}`}
          style={
            size === 'sm'
              ? { width: '32px', height: '32px' }
              : size === 'md'
                ? { width: '40px', height: '40px' }
                : { width: '56px', height: '56px' }
          }
        >
          <text className="text-current">+{overflowCount}</text>
        </view>
      )}
    </view>
  );
}
