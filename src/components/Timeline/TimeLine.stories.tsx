import type { Meta, StoryObj } from "@storybook/react-vite";
import { Timeline } from "./TimeLine";
import { TimelineItem } from "./TimeLineItem";

const meta = {
  title: "Components/Timeline",
  component: Timeline,
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  argTypes: {
    theme: { control: "select", options: ["light", "dark"] },
  },
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  render: () => (
    <Timeline>
      <TimelineItem>
        <view>
          <text className="font-medium text-foreground">Order placed</text>
          <text className="text-sm text-muted-foreground">Your order has been placed successfully.</text>
        </view>
      </TimelineItem>
      <TimelineItem>
        <view>
          <text className="font-medium text-foreground">Processing</text>
          <text className="text-sm text-muted-foreground">Your order is being processed.</text>
        </view>
      </TimelineItem>
      <TimelineItem>
        <view>
          <text className="font-medium text-foreground">Shipped</text>
          <text className="text-sm text-muted-foreground">Your item has been shipped.</text>
        </view>
      </TimelineItem>
      <TimelineItem>
        <view>
          <text className="font-medium text-foreground">Delivered</text>
          <text className="text-sm text-muted-foreground">Your item has been delivered.</text>
        </view>
      </TimelineItem>
    </Timeline>
  ),
};

export const WithCustomColors: Story = {
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  render: () => (
    <Timeline ballColor="#3b82f6" lineColor="#3b82f6">
      <TimelineItem>
        <view>
          <text className="font-medium text-foreground">Application submitted</text>
          <text className="text-sm text-muted-foreground">We received your application.</text>
        </view>
      </TimelineItem>
      <TimelineItem>
        <view>
          <text className="font-medium text-foreground">Under review</text>
          <text className="text-sm text-muted-foreground">Your application is being reviewed.</text>
        </view>
      </TimelineItem>
      <TimelineItem>
        <view>
          <text className="font-medium text-foreground">Decision</text>
          <text className="text-sm text-muted-foreground">A decision has been made.</text>
        </view>
      </TimelineItem>
    </Timeline>
  ),
};
