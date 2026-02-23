import type { BreadcrumbProps, BreadcrumbItemType } from './BreadcrumbCommon';
import homeIcon from '../../assets/images/home.svg';

function BreadcrumbSeparator({ divider }: { divider: NonNullable<BreadcrumbProps['divider']> }) {
  const isSlash = divider === 'slash';
  return (
    <view className="flex items-center shrink-0">
      <text
        className={`text-muted-foreground ${isSlash ? 'px-1' : 'px-1.5'}`}
      >
        {isSlash ? '/' : '›'}
      </text>
    </view>
  );
}

function BreadcrumbItem({
  item,
  isCurrent,
  onPress,
}: {
  item: BreadcrumbItemType;
  isCurrent: boolean;
  onPress?: () => void;
}) {
  const isInteractive = !isCurrent && onPress != null;
  const textClass = isCurrent
    ? 'text-foreground font-medium'
    : 'text-muted-foreground active:text-foreground';

  if (isInteractive) {
    return (
      <view
        className={`inline-flex items-center ${textClass}`}
        bindtap={onPress}
      >
        <text className="text-current">{item.label}</text>
      </view>
    );
  }

  return (
    <view className={`inline-flex items-center ${textClass}`}>
      <text className="text-current" >
        {item.label}
      </text>
    </view>
  );
}

export function Breadcrumb(props: BreadcrumbProps) {
  const {
    items,
    divider = 'chevron',
    showHomeIcon = false,
    className = '',
  } = props;

  if (items.length === 0) return null;

  return (
    <view
      className={`flex flex-wrap items-center gap-0 text-sm ${className}`.trim()}
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => {
        const isFirst = index === 0;
        const isCurrent = index === items.length - 1;

        return (
          <view key={index} className="flex flex-wrap items-center gap-0">
            {index > 0 && <BreadcrumbSeparator divider={divider} />}
            {isFirst && showHomeIcon ? (
              <view
                className="flex items-center gap-1.5 text-muted-foreground active:text-foreground"
                bindtap={item.onPress}
              >
                <image src={homeIcon} className="w-4 h-4 shrink-0" />
                <BreadcrumbItem
                  item={item}
                  isCurrent={isCurrent}
                  onPress={undefined}
                />
              </view>
            ) : (
              <BreadcrumbItem
                item={item}
                isCurrent={isCurrent}
                onPress={item.onPress}
              />
            )}
          </view>
        );
      })}
    </view>
  );
}
