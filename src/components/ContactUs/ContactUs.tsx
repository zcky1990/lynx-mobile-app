import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../providers';
import { Icon } from '../Icon/Icon';
import { Button } from '../Button/Button';
import type { ContactUsProps } from './ContactUsCommon';

function hasValue(value: string | undefined): value is string {
  return value != null && value !== '';
}

export function ContactUs(props: ContactUsProps) {
  const {
    title,
    description,
    phone,
    email,
    address,
    ctaLabel,
    onCtaPress,
    theme: themeProp,
    className = '',
    properties,
  } = props;

  const { resolvedTheme } = useTheme();
  const theme = themeProp ?? resolvedTheme;
  const iconColor = theme === 'dark' ? 'white' : 'black';

  const showTitle = hasValue(title);
  const showDescription = hasValue(description);
  const showPhone = hasValue(phone);
  const showEmail = hasValue(email);
  const showAddress = hasValue(address);
  const showCta = hasValue(ctaLabel);

  const hasAny =
    showTitle ||
    showDescription ||
    showPhone ||
    showEmail ||
    showAddress ||
    showCta;

  if (!hasAny) return null;

  const titleClass = twMerge(
    'text-2xl font-bold text-foreground md:text-3xl',
    properties?.title?.className
  );
  const descClass = twMerge(
    'text-muted-foreground text-base',
    properties?.description?.className
  );
  const itemClass = twMerge(
    'flex flex-row items-center gap-3 text-foreground',
    properties?.contactItem?.className
  );

  return (
    <view className={twMerge('flex flex-col gap-4 w-full', className)}>
      {showTitle && (
        <text
          className={titleClass}
          style={properties?.title?.style}
        >
          {title}
        </text>
      )}
      {showDescription && (
        <text
          className={descClass}
          style={properties?.description?.style}
        >
          {description}
        </text>
      )}
      {(showPhone || showEmail || showAddress) && (
        <view className="flex flex-col gap-3">
          {showPhone && (
            <view
              className={itemClass}
              style={properties?.contactItem?.style}
            >
              <Icon name="phone" size={20} color={iconColor} />
              <text className="text-current">{phone}</text>
            </view>
          )}
          {showEmail && (
            <view
              className={itemClass}
              style={properties?.contactItem?.style}
            >
              <Icon name="email" size={20} color={iconColor} />
              <text className="text-current">{email}</text>
            </view>
          )}
          {showAddress && (
            <view
              className={itemClass}
              style={properties?.contactItem?.style}
            >
              <view className="w-5 h-5 rounded-full bg-muted-foreground/40 shrink-0" />
              <text className="text-current">{address}</text>
            </view>
          )}
        </view>
      )}
      {showCta && (
        <view className={twMerge('pt-1', properties?.cta?.className)}>
          <Button variant="solid" size="md" onPress={onCtaPress}>
            {ctaLabel}
          </Button>
        </view>
      )}
    </view>
  );
}
