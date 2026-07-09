import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dropdown } from "./index";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  argTypes: {
    variant: { control: "select", options: ["base", "divided", "grouped"] },
    theme: { control: "select", options: ["light", "dark"] },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    triggerLabel: "Options",
    items: [
      { id: "edit", label: "Edit" },
      { id: "duplicate", label: "Duplicate" },
      { id: "delete", label: "Delete" },
    ],
    variant: "base",
  },
};

export const Divided: Story = {
  args: {
    triggerLabel: "Actions",
    items: [
      { id: "profile", label: "View profile" },
      { id: "settings", label: "Settings" },
      { id: "logout", label: "Log out" },
    ],
    variant: "divided",
  },
};

export const Grouped: Story = {
  args: {
    triggerLabel: "More",
    variant: "grouped",
    groups: [
      {
        label: "Account",
        items: [
          { id: "profile", label: "Profile" },
          { id: "settings", label: "Settings" },
        ],
      },
      {
        label: "Support",
        items: [
          { id: "help", label: "Help center" },
          { id: "contact", label: "Contact us" },
        ],
      },
    ],
  },
};

export const WithLabel: Story = {
  args: {
    ...Base.args,
    label: "Dropdown",
  },
};
