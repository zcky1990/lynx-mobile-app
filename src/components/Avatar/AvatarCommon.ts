/**
 * Avatar component types.
 * Shows image or fallback user icon when image is missing or fails to load.
 */

export type AvatarSize = 'sm' | 'md' | 'lg';

export interface AvatarProps {
  /** Image URL or require() asset. When missing or on error, user icon is shown. */
  src?: string | null;
  /** Alt text for the image */
  alt?: string;
  /** Size: sm (32px), md (40px), lg (56px) */
  size?: AvatarSize;
  /** Theme for fallback icon color; if not set, uses useTheme().resolvedTheme */
  theme?: 'light' | 'dark';
  /** Additional class for the root view */
  className?: string;
}

export interface AvatarGroupItem {
  src?: string | null;
  alt?: string;
}

export interface AvatarGroupProps {
  /** List of avatars (each can have src and alt) */
  items: AvatarGroupItem[];
  /** Max number of avatars to show before "+N" overflow; 0 or undefined = show all */
  maxCount?: number;
  /** Size for each avatar */
  size?: AvatarSize;
  /** Theme for fallback icon color in avatars; if not set, uses useTheme().resolvedTheme */
  theme?: 'light' | 'dark';
  /** Additional class for the group container */
  className?: string;
}
