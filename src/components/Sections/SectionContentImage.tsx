import { twMerge } from 'tailwind-merge';
import { Button } from '../Button/Button';
import type { SectionContentImageProps, SectionContentImageLayout } from './SectionContentImageCommon';

const layoutContentWidth: Record<SectionContentImageLayout, string> = {
  half: 'flex-1 min-w-0',
  twoThird: 'flex-[2] min-w-0',
  thirdTwo: 'flex-1 min-w-0',
  vertical: 'w-full',
};

const layoutImageWidth: Record<SectionContentImageLayout, string> = {
  half: 'flex-1 min-w-0',
  twoThird: 'flex-1 min-w-0',
  thirdTwo: 'flex-[2] min-w-0',
  vertical: 'w-full',
};

export function SectionContentImage(props: SectionContentImageProps) {
  const {
    layout = 'half',
    order = 'contentFirst',
    title,
    subtitle,
    description,
    ctaLabel,
    onCtaPress,
    imageSrc,
    children,
    className = '',
    contentClassName = '',
    imageClassName = '',
    properties,
  } = props;

  const isVertical = layout === 'vertical';
  const containerBase = 'w-full overflow-hidden';
  const containerLayout = isVertical
    ? 'flex flex-col gap-6'
    : 'flex flex-row flex-wrap items-center gap-6';
  const containerClass = twMerge(
    containerBase,
    containerLayout,
    properties?.container?.className,
    className
  );

  const contentWidth = layoutContentWidth[layout];
  const imageWidth = layoutImageWidth[layout];

  const contentBlock = (
    <view
      className={twMerge(
        'flex flex-col gap-3 justify-center',
        contentWidth,
        properties?.content?.className,
        contentClassName
      )}
      style={properties?.content?.style}
    >
      {children != null ? (
        children
      ) : (
        <>
          {subtitle != null && subtitle !== '' && (
            <text className="text-sm font-medium text-primary">{subtitle}</text>
          )}
          {title != null && title !== '' && (
            <text className="text-2xl font-bold text-foreground md:text-3xl">{title}</text>
          )}
          {description != null && description !== '' && (
            <text className="text-muted-foreground text-base">{description}</text>
          )}
          {ctaLabel != null && ctaLabel !== '' && (
            <view className="mt-2">
              <Button variant="solid" size="md" onPress={onCtaPress}>
                {ctaLabel}
              </Button>
            </view>
          )}
        </>
      )}
    </view>
  );

  const imageBlock =
    imageSrc != null && imageSrc !== '' ? (
      <view
        className={twMerge(
          'flex items-center justify-center overflow-hidden rounded-xl bg-muted',
          imageWidth,
          properties?.image?.className,
          imageClassName
        )}
        style={properties?.image?.style}
      >
        <image
          src={imageSrc}
          className="h-full w-full object-cover"
          style="min-height: 200px;"
        />
      </view>
    ) : null;

  const contentFirst = order === 'contentFirst';
  const first = contentFirst ? contentBlock : imageBlock;
  const second = contentFirst ? imageBlock : contentBlock;

  return (
    <view className={containerClass} style={properties?.container?.style}>
      {first}
      {second}
    </view>
  );
}
