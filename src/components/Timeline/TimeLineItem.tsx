import type { ReactNode } from '@lynx-js/react';

export interface TimelineItemProps {
  children: ReactNode;
}

export function TimelineItem({ children }: TimelineItemProps) {
  return <view className="TimelineItem-content">{children}</view>;
}