/**
 * Contact Us section component types.
 * Inspired by PrebuiltUI contact us section (https://play.prebuiltui.com/?slug=contact-us-section-43cc).
 * Each block is only rendered when its prop value is provided (non-empty string or defined).
 */

export interface ContactUsProps {
  /** Section title; section heading is not shown when omitted or empty */
  title?: string;
  /** Section description; not shown when omitted or empty */
  description?: string;
  /** Phone number; phone row is not shown when omitted or empty */
  phone?: string;
  /** Email address; email row is not shown when omitted or empty */
  email?: string;
  /** Physical address; address row is not shown when omitted or empty */
  address?: string;
  /** CTA button label; button is not shown when omitted or empty */
  ctaLabel?: string;
  /** CTA button press handler */
  onCtaPress?: () => void;
  /** Theme for icons; uses useTheme().resolvedTheme when omitted */
  theme?: 'light' | 'dark';
  /** Additional class for the root container */
  className?: string;
  /** Optional overrides for inner elements */
  properties?: {
    title?: { className?: string; style?: string };
    description?: { className?: string; style?: string };
    contactItem?: { className?: string; style?: string };
    cta?: { className?: string };
  };
}
