import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./index";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    theme: { control: "select", options: ["light", "dark"] },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: {
    src: "https://i.pravatar.cc/150?u=avatar",
    size: "md",
  },
};

export const Fallback: Story = {
  args: {
    size: "md",
  },
};

export const Small: Story = {
  args: {
    src: "https://i.pravatar.cc/150?u=avatar2",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    src: "https://i.pravatar.cc/150?u=avatar3",
    size: "lg",
  },
};

export const Group: Story = {
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  render: () => (
    <Avatar.Group
      items={[
        { src: "https://i.pravatar.cc/150?u=user1" },
        { src: "https://i.pravatar.cc/150?u=user2" },
        { src: "https://i.pravatar.cc/150?u=user3" },
      ]}
      size="md"
    />
  ),
};

export const GroupWithOverflow: Story = {
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  render: () => (
    <Avatar.Group
      items={[
        { src: "https://i.pravatar.cc/150?u=user1" },
        { src: "https://i.pravatar.cc/150?u=user2" },
        { src: "https://i.pravatar.cc/150?u=user3" },
        { src: "https://i.pravatar.cc/150?u=user4" },
        { src: "https://i.pravatar.cc/150?u=user5" },
      ]}
      maxCount={3}
      size="md"
    />
  ),
};
