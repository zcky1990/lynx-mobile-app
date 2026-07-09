import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stats } from "./Stats";

const meta = {
  title: "Components/Stats",
  component: Stats,
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  argTypes: {
    stacked: { control: "boolean" },
    theme: { control: "select", options: ["light", "dark"] },
  },
} satisfies Meta<typeof Stats>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Total Revenue",
    value: "$45,231",
    fromValue: "from last month",
    growth: { value: "+12.5%", trend: "up" },
    icon: "user",
  },
};

export const NoGrowth: Story = {
  args: {
    title: "Active Users",
    value: "2,340",
    icon: "user",
  },
};

export const NegativeGrowth: Story = {
  args: {
    title: "Bounce Rate",
    value: "32.1%",
    growth: { value: "-4.5%", trend: "down" },
    icon: "user",
  },
};

export const Stacked: Story = {
  args: {
    title: "Sales",
    value: "$12,000",
    fromValue: "from last quarter",
    growth: { value: "+8.3%", trend: "up" },
    icon: "calendar",
    stacked: true,
  },
};
