import type { Meta, StoryObj } from "@storybook/react-vite";
import { Breadcrumb } from "./Breadcrumb";

const meta = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  argTypes: {
    divider: { control: "select", options: ["chevron", "slash"] },
    showHomeIcon: { control: "boolean" },
    theme: { control: "select", options: ["light", "dark"] },
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ChevronDivider: Story = {
  args: {
    items: [
      { label: "Home", onPress: () => {} },
      { label: "Products", onPress: () => {} },
      { label: "Details" },
    ],
    divider: "chevron",
    showHomeIcon: false,
  },
};

export const SlashDivider: Story = {
  args: {
    ...ChevronDivider.args,
    divider: "slash",
  },
};

export const WithHomeIcon: Story = {
  args: {
    items: [
      { label: "Home", onPress: () => {} },
      { label: "Dashboard", onPress: () => {} },
      { label: "Analytics" },
    ],
    divider: "chevron",
    showHomeIcon: true,
  },
};
