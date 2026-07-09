import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  argTypes: {
    type: { control: "select", options: ["text", "number", "digit", "password", "tel", "email"] },
    interaction: { control: "select", options: ["enabled", "disabled"] },
    iconPosition: { control: "select", options: ["left", "right"] },
    theme: { control: "select", options: ["light", "dark"] },
    showIcon: { control: "boolean" },
    onPress: { action: "pressed" },
    onChange: { action: "changed" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    label: "Full name",
    placeholder: "Enter your name",
    type: "text",
    icon: "user",
    showIcon: true,
    iconPosition: "left",
    interaction: "enabled",
  },
};

export const Email: Story = {
  args: {
    label: "Email address",
    placeholder: "you@example.com",
    type: "email",
    icon: "email",
    showIcon: true,
    iconPosition: "left",
    interaction: "enabled",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    icon: "password",
    showIcon: true,
    iconPosition: "right",
    interaction: "enabled",
  },
};

export const Phone: Story = {
  args: {
    label: "Phone number",
    placeholder: "+1 (555) 000-0000",
    type: "tel",
    icon: "phone",
    showIcon: true,
    iconPosition: "left",
    interaction: "enabled",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled input",
    placeholder: "This input is disabled",
    type: "text",
    interaction: "disabled",
    showIcon: false,
  },
};

export const WithoutIcon: Story = {
  args: {
    label: "Comment",
    placeholder: "Write a comment...",
    type: "text",
    showIcon: false,
    interaction: "enabled",
  },
};
