import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stepper } from "./Stepper";

const meta = {
  title: "Components/Stepper",
  component: Stepper,
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  argTypes: {
    variant: { control: "select", options: ["progress", "stepCounter", "grouped", "timeline"] },
    currentStep: { control: { type: "number", min: 0 } },
    theme: { control: "select", options: ["light", "dark"] },
    showProgressBar: { control: "boolean" },
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Progress: Story = {
  args: {
    steps: [
      { title: "Account setup" },
      { title: "Profile details" },
      { title: "Payment info" },
      { title: "Confirmation" },
    ],
    currentStep: 1,
    variant: "progress",
    showProgressBar: true,
  },
};

export const StepCounter: Story = {
  args: {
    steps: [
      { title: "Step 1", description: "Basic info" },
      { title: "Step 2", description: "Preferences" },
      { title: "Step 3", description: "Review" },
    ],
    currentStep: 1,
    variant: "stepCounter",
    showProgressBar: true,
  },
};

export const Grouped: Story = {
  args: {
    steps: [
      { title: "Personal info", description: "Enter your name and email." },
      { title: "Address", description: "Enter your shipping address." },
      { title: "Payment", description: "Choose a payment method." },
    ],
    currentStep: 1,
    variant: "grouped",
  },
};

export const Timeline: Story = {
  args: {
    steps: [
      { title: "Order placed", description: "Your order has been placed." },
      { title: "Processing", description: "Your order is being processed." },
      { title: "Shipped", description: "Your item has been shipped." },
      { title: "Delivered", description: "Your item has been delivered." },
    ],
    currentStep: 2,
    variant: "timeline",
  },
};
