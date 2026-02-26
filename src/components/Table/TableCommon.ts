export type TableVariant = 'base' | 'bordered' | 'striped';

export interface TableColumn {
  key: string;
  label: string;
}

export type TableRow = Record<string, string | number>;

export interface TableProps {
  columns: TableColumn[];
  rows: TableRow[];
  variant?: TableVariant;
  stickyHeader?: boolean;
  stickyFirstColumn?: boolean;
  theme?: 'light' | 'dark';
  properties?: {
    wrapper?: { className?: string; style?: string };
    table?: { className?: string; style?: string };
    header?: { className?: string; style?: string };
    headerCell?: { className?: string; style?: string };
    body?: { className?: string; style?: string };
    row?: { className?: string; style?: string };
    cell?: { className?: string; style?: string };
  };
}
