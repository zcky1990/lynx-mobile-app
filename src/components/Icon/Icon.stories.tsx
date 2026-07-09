import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from "./Icon";

const meta = {
  title: "Components/Icon",
  component: Icon,
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  argTypes: {
    name: { control: "select", options: ["phone", "email", "password", "tel", "search", "calendar", "clock", "user", "setting", "bell", "chevronUp", "chevronDown", "chevronLeft", "chevronRight", "circleUser", "home", "moon", "sun", "check"] },
    size: { control: "number" },
    color: { control: "color" },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "home",
    size: 24,
    color: "#000000",
  },
};

export const User: Story = {
  args: {
    name: "user",
    size: 24,
    color: "#000000",
  },
};

export const Search: Story = {
  args: {
    name: "search",
    size: 24,
    color: "#000000",
  },
};

export const ChevronDown: Story = {
  args: {
    name: "chevronDown",
    size: 24,
    color: "#000000",
  },
};

export const LargeWithColor: Story = {
  args: {
    name: "bell",
    size: 32,
    color: "#ef4444",
  },
};
