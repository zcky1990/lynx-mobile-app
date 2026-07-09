import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  argTypes: {
    variant: { control: "select", options: ["solid", "outline", "ghost", "destructive"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
    onPress: { action: "pressed" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    children: "Button",
    variant: "solid",
    size: "md",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
    size: "md",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
    size: "md",
  },
};

export const Destructive: Story = {
  args: {
    children: "Delete",
    variant: "destructive",
    size: "md",
  },
};

export const Small: Story = {
  args: {
    children: "Small",
    variant: "solid",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    variant: "solid",
    size: "lg",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    variant: "solid",
    size: "md",
    disabled: true,
  },
};
