import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContactUs } from "./index";

const meta = {
  title: "Components/ContactUs",
  component: ContactUs,
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  argTypes: {
    theme: { control: "select", options: ["light", "dark"] },
  },
} satisfies Meta<typeof ContactUs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Full: Story = {
  args: {
    title: "Get in touch",
    description: "We'd love to hear from you.",
    phone: "+1 (555) 123-4567",
    email: "hello@example.com",
    address: "123 Main St, New York, NY 10001",
    ctaLabel: "Send a message",
    onCtaPress: () => {},
  },
};

export const Minimal: Story = {
  args: {
    title: "Contact us",
    email: "support@example.com",
    ctaLabel: "Get support",
    onCtaPress: () => {},
  },
};
