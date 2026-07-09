import type { Meta, StoryObj } from "@storybook/react-vite";
import { DatePicker } from "./index";

const meta = {
  title: "Components/DatePicker",
  component: DatePicker,
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  argTypes: {
    theme: { control: "select", options: ["light", "dark"] },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Pick a date",
    label: "Date",
  },
};

export const WithLabel: Story = {
  args: {
    placeholder: "Select date",
    label: "Appointment date",
  },
};

export const Dark: Story = {
  args: {
    placeholder: "Pick a date",
    label: "Date",
    theme: "dark",
  },
};
