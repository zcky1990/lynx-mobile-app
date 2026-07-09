import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextArea } from "./TextArea";

const meta = {
  title: "Components/TextArea",
  component: TextArea,
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  argTypes: {
    interaction: { control: "select", options: ["enabled", "disabled"] },
    theme: { control: "select", options: ["light", "dark"] },
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Description",
    placeholder: "Enter a description...",
    interaction: "enabled",
  },
};

export const WithMaxLines: Story = {
  args: {
    label: "Bio",
    placeholder: "Tell us about yourself...",
    maxlines: 4,
    interaction: "enabled",
  },
};

export const Disabled: Story = {
  args: {
    label: "Read-only",
    placeholder: "This textarea is disabled",
    interaction: "disabled",
  },
};
