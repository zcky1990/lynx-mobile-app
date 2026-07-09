import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  decorators: [(Story) => <view className="p-4"><Story /></view>],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <Card.Body>
        <text className="text-foreground">This is a simple card with just a body.</text>
      </Card.Body>
    </Card>
  ),
};

export const WithHeaderAndFooter: Story = {
  render: () => (
    <Card>
      <Card.Header>
        <text className="text-lg font-semibold text-foreground">Card Title</text>
      </Card.Header>
      <Card.Body>
        <text className="text-muted-foreground">Card content goes here. You can put any content inside the body.</text>
      </Card.Body>
      <Card.Footer>
        <text className="text-sm text-muted-foreground">Card footer</text>
      </Card.Footer>
    </Card>
  ),
};
