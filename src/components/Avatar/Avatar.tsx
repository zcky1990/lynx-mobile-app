import { useState, useEffect } from '@lynx-js/react';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../providers';
import { Icon } from '../Icon/Icon';
import type { AvatarProps, AvatarSize } from './AvatarCommon';

const sizeMap: Record<AvatarSize, { px: number; iconSize: number }> = {
  sm: { px: 32, iconSize: 18 },
  md: { px: 40, iconSize: 22 },
  lg: { px: 56, iconSize: 28 },
};

export function Avatar(props: AvatarProps) {
  const { src, size = 'md', theme: themeProp, className = '' } = props;
  const [imageError, setImageError] = useState(false);
  const { resolvedTheme } = useTheme();
  const theme = themeProp ?? resolvedTheme;

  useEffect(() => {
    setImageError(false);
  }, [src]);

  const showFallback = !src || imageError;
  const { px, iconSize } = sizeMap[size];
  const iconColor = theme === 'dark' ? 'white' : 'black';

  const rootClass = twMerge(
    'inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-muted-foreground',
    className
  );
  const sizeStyle = { width: `${px}px`, height: `${px}px` };

  if (showFallback) {
    return (
      <view className={rootClass} style={sizeStyle}>
        <Icon name="circleUser" size={iconSize} color={iconColor} />
      </view>
    );
  }

  return (
    <view className={rootClass} style={sizeStyle}>
      <image
        src={src}
        className="h-full w-full object-cover"
        binderror={() => setImageError(true)}
      />
    </view>
  );
}
