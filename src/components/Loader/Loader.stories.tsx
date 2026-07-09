import type { Meta, StoryObj } from "@storybook/react-vite";
import { Loader } from "./Loader";

const meta = {
  title: "Components/Loader",
  component: Loader,
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  argTypes: {
    type: { control: "select", options: ["spinner", "loader"] },
    percentage: { control: { type: "range", min: 0, max: 100 } },
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Spinner: Story = {
  args: {
    type: "spinner",
    label: "Loading...",
  },
};

export const SpinnerNoLabel: Story = {
  args: {
    type: "spinner",
  },
};

export const LoaderAtZero: Story = {
  args: {
    type: "loader",
    percentage: 0,
    label: "Starting...",
  },
};

export const LoaderAtHalf: Story = {
  args: {
    type: "loader",
    percentage: 50,
    label: "Processing...",
  },
};

export const LoaderComplete: Story = {
  args: {
    type: "loader",
    percentage: 100,
    label: "Complete",
  },
};
