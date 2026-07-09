import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "./Alert";

const meta = {
  title: "Components/Alert",
  component: Alert,
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  argTypes: {
    variant: { control: "select", options: ["success", "error", "warning", "info"] },
    showSubmitButton: { control: "boolean" },
    showCancelButton: { control: "boolean" },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    variant: "success",
    title: "Success",
    description: "Your changes have been saved successfully.",
    showSubmitButton: true,
    showCancelButton: false,
    buttonSubmitLabel: "OK",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    title: "Error",
    description: "Something went wrong. Please try again.",
    showSubmitButton: true,
    showCancelButton: false,
    buttonSubmitLabel: "Retry",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning",
    description: "Your session will expire in 5 minutes.",
    showSubmitButton: true,
    showCancelButton: true,
    buttonSubmitLabel: "Extend",
    buttonCancelLabel: "Dismiss",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    title: "Did you know?",
    description: "You can use keyboard shortcuts to navigate faster.",
    showSubmitButton: false,
    showCancelButton: false,
  },
};
