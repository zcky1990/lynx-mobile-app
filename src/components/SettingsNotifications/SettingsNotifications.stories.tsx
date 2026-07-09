import type { Meta, StoryObj } from "@storybook/react-vite";
import { SettingsNotifications } from "./SettingsNotifications";

const meta = {
  title: "Components/SettingsNotifications",
  component: SettingsNotifications,
  decorators: [(Story) => <view className="p-4"><Story /></view>],
} satisfies Meta<typeof SettingsNotifications>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { title: "Push notifications", description: "Receive push notifications on your device." },
      { title: "Email digest", description: "Get a weekly email summary of your activity." },
      { title: "SMS alerts", description: "Receive text message alerts for important updates." },
    ],
  },
};

export const WithPresetValues: Story = {
  args: {
    items: [
      { title: "Marketing emails", description: "Receive promotional offers and updates.", value: "on" },
      { title: "Security alerts", description: "Get notified about account security events.", value: "on" },
      { title: "Product updates", description: "Learn about new features and improvements.", value: "off" },
    ],
  },
};

export const WithDisabledItem: Story = {
  args: {
    items: [
      { title: "Comments", description: "Get notified when someone comments on your post." },
      { title: "Mentions", description: "Get notified when someone mentions you.", value: "on" },
      { title: "Direct messages", description: "Get notified of direct messages.", interaction: "disabled" },
    ],
  },
};
