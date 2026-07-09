import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "./Divider";

const meta = {
  title: "Components/Divider",
  component: Divider,
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  argTypes: {
    variant: { control: "select", options: ["base", "gradient"] },
    align: { control: "select", options: ["center", "left", "right"] },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    variant: "base",
    align: "center",
  },
};

export const Gradient: Story = {
  args: {
    variant: "gradient",
    align: "center",
  },
};

export const AlignLeft: Story = {
  args: {
    variant: "base",
    align: "left",
  },
};

export const AlignRight: Story = {
  args: {
    variant: "base",
    align: "right",
  },
};
