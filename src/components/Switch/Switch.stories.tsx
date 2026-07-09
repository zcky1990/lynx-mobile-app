import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "./Switch";

const meta = {
  title: "Components/Switch",
  component: Switch,
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  argTypes: {
    value: { control: "select", options: ["on", "off"] },
    interaction: { control: "select", options: ["enabled", "disabled"] },
    onValueChange: { action: "changed" },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Off: Story = {
  args: {
    value: "off",
    interaction: "enabled",
  },
};

export const On: Story = {
  args: {
    value: "on",
    interaction: "enabled",
  },
};

export const Disabled: Story = {
  args: {
    value: "off",
    interaction: "disabled",
  },
};

export const DisabledOn: Story = {
  args: {
    value: "on",
    interaction: "disabled",
  },
};

export const CompoundCustom: Story = {
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  render: () => (
    <Switch value="on" onValueChange={() => {}}>
      <Switch.Track>
        <Switch.Thumb />
      </Switch.Track>
    </Switch>
  ),
};
