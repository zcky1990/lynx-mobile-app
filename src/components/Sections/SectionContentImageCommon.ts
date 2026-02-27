/**
 * Marketing section types inspired by HyperUI Sections.
 * @see https://www.hyperui.dev/components/marketing/sections
 */

export type SectionContentImageLayout =
  | 'half'       // 1/2 grid: content 50% | image 50%
  | 'twoThird'   // 2/3 grid: content 2/3 | image 1/3
  | 'thirdTwo'   // 3/2 grid: content 1/3 | image 2/3
  | 'vertical';  // vertical split: content then image (stacked)

export type SectionContentImageOrder = 'contentFirst' | 'imageFirst';

export interface SectionContentImageProps {
  /** Layout variant: half (1/2), twoThird (2/3), thirdTwo (1/3–2/3), vertical */
  layout?: SectionContentImageLayout;
  /** On horizontal layouts: content first (left) or image first (left) */
  order?: SectionContentImageOrder;
  /** Section title (heading) */
  title?: string;
  /** Optional subtitle or lead text above title */
  subtitle?: string;
  /** Main body text */
  description?: string;
  /** CTA label; if set, a button slot is rendered (use children for custom CTA) */
  ctaLabel?: string;
  /** CTA press handler when ctaLabel is used */
  onCtaPress?: () => void;
  /** Image source URL or require() asset */
  imageSrc?: string;
  /** Alt text for image */
  imageAlt?: string;
  /** Custom content (overrides title/description/cta when provided) */
  children?: React.ReactNode;
  /** Optional class names */
  className?: string;
  contentClassName?: string;
  imageClassName?: string;
  /** Optional styles */
  properties?: {
    container?: { className?: string; style?: string };
    content?: { className?: string; style?: string };
    image?: { className?: string; style?: string };
  };
}
