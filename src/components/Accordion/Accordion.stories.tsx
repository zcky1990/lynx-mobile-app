import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion } from "./Accordion";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    theme: { control: "select", options: ["light", "dark"] },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Frequently Asked Questions",
    description: "Everything you need to know about our service.",
    items: [
      { title: "How do I get started?", description: "Sign up and follow the onboarding wizard.", open: true },
      { title: "Can I cancel anytime?", description: "Yes, you can cancel with no penalties." },
      { title: "Is my data secure?", description: "We use industry-standard encryption." },
    ],
  },
};

export const Dark: Story = {
  args: {
    ...Default.args,
    theme: "dark",
  },
};

export const SingleItem: Story = {
  args: {
    title: "Support",
    description: "Frequently asked support questions.",
    items: [{ title: "What payment methods do you accept?", description: "Credit card, PayPal, and bank transfer." }],
  },
};
