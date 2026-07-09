import type { Meta, StoryObj } from "@storybook/react-vite";
import { BottomNavigation } from "./index";

const meta = {
  title: "Components/BottomNavigation",
  component: BottomNavigation,
  decorators: [(Story) => <view className="p-4 h-40"><Story /></view>],
  argTypes: {
    activeId: { control: "text" },
    theme: { control: "select", options: ["light", "dark"] },
    onChange: { action: "changed" },
  },
} satisfies Meta<typeof BottomNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { id: "home", label: "Home", icon: "home" },
      { id: "search", label: "Search", icon: "search" },
      { id: "profile", label: "Profile", icon: "user" },
      { id: "settings", label: "Settings", icon: "setting" },
    ],
    activeId: "home",
    onChange: (id: string) => console.log("navigate to", id),
  },
};

export const DarkActiveMiddle: Story = {
  args: {
    ...Default.args,
    activeId: "search",
    theme: "dark",
  },
};
