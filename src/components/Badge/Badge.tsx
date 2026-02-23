import type { BadgeProps } from './BadgeCommon';

const variantClasses: Record<NonNullable<BadgeProps['variant']>, string> = {
  default: 'bg-secondary text-secondary-foreground',
  primary: 'bg-primary text-primary-foreground',
  success: 'bg-success text-success-foreground',
  warning: 'bg-warning text-warning-foreground',
  destructive: 'bg-destructive text-destructive-foreground',
  outline: 'border border-border bg-transparent text-foreground',
};

export function Badge(props: BadgeProps) {
  const { children, variant = 'default', className = '' } = props;
  const variantCls = variantClasses[variant];

  return (
    <view
      className={`inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variantCls} ${className}`.trim()}
    >
      <text className="text-current">{children}</text>
    </view>
  );
}
