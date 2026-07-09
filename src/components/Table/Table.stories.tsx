import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table } from "./index";

const meta = {
  title: "Components/Table",
  component: Table,
  decorators: [(Story) => <view className="p-4"><Story /></view>],
  argTypes: {
    variant: { control: "select", options: ["base", "bordered", "striped"] },
    stickyHeader: { control: "boolean" },
    stickyFirstColumn: { control: "boolean" },
    theme: { control: "select", options: ["light", "dark"] },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const columns = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "role", label: "Role" },
  { key: "status", label: "Status" },
];

const rows = [
  { name: "John Doe", email: "john@example.com", role: "Developer", status: "Active" },
  { name: "Jane Smith", email: "jane@example.com", role: "Designer", status: "Active" },
  { name: "Bob Johnson", email: "bob@example.com", role: "Manager", status: "Inactive" },
];

export const Base: Story = {
  args: {
    columns,
    rows,
    variant: "base",
  },
};

export const Bordered: Story = {
  args: {
    columns,
    rows,
    variant: "bordered",
  },
};

export const Striped: Story = {
  args: {
    columns,
    rows,
    variant: "striped",
  },
};

export const StickyHeader: Story = {
  args: {
    columns: [
      { key: "id", label: "ID" },
      { key: "name", label: "Name" },
      { key: "email", label: "Email" },
      { key: "role", label: "Role" },
      { key: "status", label: "Status" },
    ],
    rows: Array.from({ length: 10 }, (_, i) => ({
      id: String(i + 1),
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: i % 2 === 0 ? "Developer" : "Designer",
      status: i % 3 === 0 ? "Inactive" : "Active",
    })),
    variant: "striped",
    stickyHeader: true,
  },
};
