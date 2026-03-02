import type { StatsProps } from './StatsCommon';
import { Icon } from '../Icon/Icon';

const STAT_ICON_SIZE = 20;

function GrowthBadge({ value, trend }: { value: string; trend: 'up' | 'down' }) {
  const isUp = trend === 'up';
  const trendClass = isUp
    ? 'text-success'
    : 'text-destructive';
  const iconName = isUp ? 'chevronUp' : 'chevronDown';
  const iconColor = isUp ? 'var(--success)' : 'var(--destructive)';

  return (
    <view className={`inline-flex items-center gap-0.5 ${trendClass}`}>
      <Icon name={iconName} size={12} color={iconColor} />
      <text className="text-xs font-medium text-current">{value}</text>
    </view>
  );
}

export function Stats(props: StatsProps) {
  const {
    title,
    value,
    fromValue,
    growth,
    icon,
    stacked = false,
    theme,
    className = '',
  } = props;

  const iconColor = theme === 'dark' ? '#eeeeee' : '#202020';

  const content = (
    <>
      {(icon || growth) && (
        <view className="flex items-start justify-between gap-2">
          {icon ? (
            <view className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
              <Icon name={icon} size={STAT_ICON_SIZE} color={iconColor} />
            </view>
          ) : (
            <view className="flex-1" />
          )}
          {growth ? <GrowthBadge value={growth.value} trend={growth.trend} /> : null}
        </view>
      )}
      <view className={stacked ? 'mt-2 flex flex-col gap-0.5' : 'mt-2'}>
        <text className="text-sm font-medium text-muted-foreground">{title}</text>
        <text className="text-2xl font-bold text-foreground">
          {typeof value === 'number' ? String(value) : value}
        </text>
        {fromValue && (
          <text className="text-xs text-muted-foreground">{fromValue}</text>
        )}
      </view>
    </>
  );

  return (
    <view
      className={[
        'rounded-xl border border-border bg-card p-4 text-card-foreground shadow-sm',
        stacked ? 'flex flex-col' : '',
        className,
      ].filter(Boolean).join(' ').trim()}
    >
      {content}
    </view>
  );
}
