import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./index";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  argTypes: {
    checked: { control: "boolean" },
    interaction: { control: "select", options: ["enabled", "disabled"] },
    onCheckedChange: { action: "changed" },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    checked: false,
    label: "Accept terms",
    interaction: "enabled",
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    label: "Accept terms",
    interaction: "enabled",
  },
};

export const WithDescription: Story = {
  args: {
    checked: false,
    label: "Subscribe to newsletter",
    description: "Receive weekly updates and offers.",
    interaction: "enabled",
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    label: "Option unavailable",
    description: "This option is currently disabled.",
    interaction: "disabled",
  },
};

export const Group: Story = {
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  render: () => (
    <Checkbox.Group
      items={[
        { checked: true, label: "Notifications", description: "Receive push notifications." },
        { checked: false, label: "Email digest", description: "Weekly email summary." },
        { checked: false, label: "SMS alerts", description: "Text message alerts.", interaction: "disabled" },
      ]}
    />
  ),
};
