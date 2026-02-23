import type { DividerProps } from './DividerCommon';

const alignClasses: Record<NonNullable<DividerProps['align']>, string> = {
  center: 'w-full',
  left: 'w-full flex justify-start',
  right: 'w-full flex justify-end',
};

const lineAlignClasses: Record<NonNullable<DividerProps['align']>, string> = {
  center: 'w-full',
  left: 'w-1/3 max-w-xs',
  right: 'w-1/3 max-w-xs',
};

export function Divider(props: DividerProps) {
  const { variant = 'base', align = 'center', className = '' } = props;

  const isGradient = variant === 'gradient';
  const containerClass = alignClasses[align];
  const lineClass = lineAlignClasses[align];

  const baseLineClass = 'h-px border-0 Divider-line';
  const gradientLineClass = 'h-px border-0 Divider-line--gradient';

  return (
    <view className={`${containerClass} ${className}`.trim()}>
      <view
        className={`${lineClass} ${isGradient ? gradientLineClass : baseLineClass}`}
        data-align={isGradient && align !== 'center' ? align : undefined}
      />
    </view>
  );
}
