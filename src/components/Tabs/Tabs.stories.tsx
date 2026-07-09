import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "./index";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  decorators: [(Story) => <view className="p-4"><Story /></view>],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  render: () => (
    <Tabs defaultValue="account">
      <Tabs.List>
        <Tabs.Trigger id="account">Account</Tabs.Trigger>
        <Tabs.Trigger id="password">Password</Tabs.Trigger>
        <Tabs.Trigger id="settings">Settings</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Panel id="account">
        <text className="text-foreground">Account settings content.</text>
      </Tabs.Panel>
      <Tabs.Panel id="password">
        <text className="text-foreground">Password management content.</text>
      </Tabs.Panel>
      <Tabs.Panel id="settings">
        <text className="text-foreground">General settings content.</text>
      </Tabs.Panel>
    </Tabs>
  ),
};

export const TwoTabs: Story = {
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  render: () => (
    <Tabs defaultValue="login">
      <Tabs.List>
        <Tabs.Trigger id="login">Login</Tabs.Trigger>
        <Tabs.Trigger id="signup">Sign Up</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Panel id="login">
        <text className="text-foreground">Login form goes here.</text>
      </Tabs.Panel>
      <Tabs.Panel id="signup">
        <text className="text-foreground">Sign up form goes here.</text>
      </Tabs.Panel>
    </Tabs>
  ),
};
