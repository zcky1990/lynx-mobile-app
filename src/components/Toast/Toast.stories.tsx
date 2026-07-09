import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toast } from "./Toast";

const meta = {
  title: "Components/Toast",
  component: Toast,
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  argTypes: {
    toastVariant: { control: "select", options: ["success", "error", "warning", "info"] },
    toastPosition: { control: "select", options: ["top", "bottom"] },
    showToast: { control: "boolean" },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    showToast: true,
    toastTitle: "Success",
    toastDescription: "Your changes have been saved.",
    toastVariant: "success",
    toastPosition: "top",
    toastDuration: 5000,
  },
};

export const Error: Story = {
  args: {
    showToast: true,
    toastTitle: "Error",
    toastDescription: "Something went wrong. Please try again.",
    toastVariant: "error",
    toastPosition: "top",
    toastDuration: 5000,
  },
};

export const Warning: Story = {
  args: {
    showToast: true,
    toastTitle: "Warning",
    toastDescription: "Your session will expire soon.",
    toastVariant: "warning",
    toastPosition: "top",
    toastDuration: 5000,
  },
};

export const Info: Story = {
  args: {
    showToast: true,
    toastTitle: "Info",
    toastDescription: "A new version is available.",
    toastVariant: "info",
    toastPosition: "bottom",
    toastDuration: 5000,
  },
};
