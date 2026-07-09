import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionContentImage } from "./index";

const meta = {
  title: "Components/SectionContentImage",
  component: SectionContentImage,
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  argTypes: {
    layout: { control: "select", options: ["half", "twoThird", "thirdTwo", "vertical"] },
    order: { control: "select", options: ["contentFirst", "imageFirst"] },
  },
} satisfies Meta<typeof SectionContentImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HalfContentFirst: Story = {
  args: {
    layout: "half",
    order: "contentFirst",
    subtitle: "Feature",
    title: "Powerful Dashboard",
    description: "Get real-time insights into your business with our powerful analytics dashboard.",
    ctaLabel: "Learn more",
    onCtaPress: () => {},
    imageSrc: "https://placehold.co/600x400",
  },
};

export const HalfImageFirst: Story = {
  args: {
    ...HalfContentFirst.args,
    order: "imageFirst",
  },
};

export const Vertical: Story = {
  args: {
    ...HalfContentFirst.args,
    layout: "vertical",
  },
};

export const TwoThirdContent: Story = {
  args: {
    layout: "twoThird",
    order: "contentFirst",
    subtitle: "About us",
    title: "We build amazing products",
    description: "Our team of experts delivers high-quality solutions for businesses worldwide.",
    ctaLabel: "Get started",
    onCtaPress: () => {},
    imageSrc: "https://placehold.co/600x400",
  },
};

export const ThirdTwoContent: Story = {
  args: {
    ...TwoThirdContent.args,
    layout: "thirdTwo",
  },
};
