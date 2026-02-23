import type { ButtonProps } from './ButtonCommon';

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-3 py-1.5 text-sm rounded-md',
  md: 'px-4 py-2 text-sm font-medium rounded-lg',
  lg: 'px-5 py-2.5 text-base font-medium rounded-lg',
};

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  solid:
    'bg-primary text-primary-foreground shadow-sm active:opacity-90',
  outline:
    'border-2 border-border bg-transparent text-foreground border-primary text-primary active:bg-secondary',
  ghost:
    'bg-transparent text-foreground active:bg-secondary',
  destructive:
    'bg-destructive text-destructive-foreground shadow-sm active:opacity-90',
};

export function Button(props: ButtonProps) {
  const {
    children,
    variant = 'solid',
    size = 'md',
    onPress,
    disabled = false,
    className = '',
  } = props;

  const sizeCls = sizeClasses[size];
  const variantCls = variantClasses[variant];
  const disabledCls = disabled ? 'opacity-50' : '';

  return (
    <view
      className={`inline-flex items-center justify-center ${sizeCls} ${variantCls} ${disabledCls} ${className}`.trim()}
      bindtap={disabled ? undefined : onPress}
    >
      <text className="text-current">{children}</text>
    </view>
  );
}
