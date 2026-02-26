import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../providers';
import type { TableProps, TableColumn, TableRow } from './TableCommon';

export function Table(props: TableProps) {
  const {
    columns,
    rows,
    variant = 'base',
    stickyHeader = false,
    stickyFirstColumn = false,
    theme: themeProp,
    properties,
  } = props;

  const { resolvedTheme } = useTheme();
  const theme = themeProp ?? resolvedTheme;
  const isDark = theme === 'dark';

  const wrapperClassName = () => {
    const defaultClassName = 'w-full overflow-x-auto rounded-lg border border-border';
    return properties?.wrapper?.className
      ? twMerge(defaultClassName, properties.wrapper.className)
      : defaultClassName;
  };

  const tableClassName = () => {
    const defaultClassName = 'flex-shrink-0 min-w-full';
    return properties?.table?.className
      ? twMerge(defaultClassName, properties.table.className)
      : defaultClassName;
  };

  const MIN_COLUMN_WIDTH_PX = 160;
  const tableMinWidthPx = columns.length * MIN_COLUMN_WIDTH_PX;
  const minWidthStyle = `min-width: ${MIN_COLUMN_WIDTH_PX}px`;

  const headerClassName = () => {
    const base = 'flex flex-row flex-shrink-0 text-left text-sm font-medium';
    const themeCls = isDark
      ? 'bg-muted text-muted-foreground'
      : 'bg-muted text-muted-foreground';
    const stickyCls = stickyHeader ? 'sticky top-0 z-10' : '';
    const defaultClassName = `${base} ${themeCls} ${stickyCls}`.trim();
    return properties?.header?.className
      ? twMerge(defaultClassName, properties.header.className)
      : defaultClassName;
  };

  const headerCellClassName = (colIndex: number) => {
    const base = 'px-4 py-3 whitespace-nowrap';
    const stickyCls =
      stickyFirstColumn && colIndex === 0
        ? isDark
          ? 'sticky left-0 z-10 bg-muted'
          : 'sticky left-0 z-10 bg-muted'
        : '';
    const borderCls = variant === 'bordered' ? 'border-b border-r border-border' : '';
    const defaultClassName = `${base} ${stickyCls} ${borderCls}`.trim();
    return properties?.headerCell?.className
      ? twMerge(defaultClassName, properties.headerCell.className)
      : defaultClassName;
  };

  const bodyClassName = () => {
    const defaultClassName = '';
    return properties?.body?.className
      ? twMerge(defaultClassName, properties.body.className)
      : defaultClassName;
  };

  const rowClassName = (rowIndex: number) => {
    const base = 'flex flex-row flex-shrink-0 text-sm';
    const borderCls = variant === 'bordered' ? '' : 'border-b border-border';
    const stripedCls =
      variant === 'striped'
        ? rowIndex % 2 === 1
          ? isDark
            ? 'bg-muted/50'
            : 'bg-muted/50'
          : ''
        : '';
    const defaultClassName = `text-foreground ${base} ${borderCls} ${stripedCls}`.trim();
    return properties?.row?.className
      ? twMerge(defaultClassName, properties.row.className)
      : defaultClassName;
  };

  const cellClassName = (colIndex: number, rowIndex: number) => {
    const base = 'px-4 py-3 whitespace-nowrap text-foreground';
    const stickyCls =
      stickyFirstColumn && colIndex === 0 ? 'sticky left-0 z-10' : '';
    const borderCls = variant === 'bordered' ? 'border-b border-r border-border' : '';
    const isStripedRow = variant === 'striped' && rowIndex % 2 === 1;
    const bgCls =
      stickyFirstColumn && colIndex === 0
        ? isStripedRow
          ? 'bg-muted/50'
          : 'bg-background'
        : isStripedRow
          ? 'bg-muted/50'
          : '';
    const defaultClassName = `${base} ${stickyCls} ${borderCls} ${bgCls}`.trim();
    return properties?.cell?.className
      ? twMerge(defaultClassName, properties.cell.className)
      : defaultClassName;
  };

  const cellMinWidthClass = 'flex-none';
  const headerCellStyle = (colIndex: number) => {
    const base = stickyFirstColumn && colIndex === 0 ? '' : minWidthStyle;
    const custom = properties?.headerCell?.style ?? '';
    return custom ? `${base}; ${custom}`.trim() : base;
  };
  const bodyCellStyle = (colIndex: number) => {
    const base = stickyFirstColumn && colIndex === 0 ? '' : minWidthStyle;
    const custom = properties?.cell?.style ?? '';
    return custom ? `${base}; ${custom}`.trim() : base;
  };

  const tableStyle =
    properties?.table?.style != null
      ? `width: ${tableMinWidthPx}px; min-width: ${tableMinWidthPx}px; ${properties.table.style}`
      : `width: ${tableMinWidthPx}px; min-width: ${tableMinWidthPx}px`;

  return (
    <view className={wrapperClassName()} style={properties?.wrapper?.style}>
      <scroll-view scroll-orientation="horizontal" style="width: 100%">
        <view className={tableClassName()} style={tableStyle}>
        <view className={headerClassName()} style={properties?.header?.style}>
          {columns.map((col: TableColumn, colIndex: number) => (
            <view
              key={col.key}
              className={`${headerCellClassName(colIndex)} ${cellMinWidthClass}`}
              style={headerCellStyle(colIndex)}
            >
              <text className="text-current">{col.label}</text>
            </view>
          ))}
        </view>
        <view className={bodyClassName()} style={properties?.body?.style}>
          {rows.map((row: TableRow, rowIndex: number) => (
            <view
              key={rowIndex}
              className={rowClassName(rowIndex)}
              style={properties?.row?.style}
            >
              {columns.map((col: TableColumn, colIndex: number) => (
                <view
                  key={col.key}
                  className={`${cellClassName(colIndex, rowIndex)} ${cellMinWidthClass}`}
                  style={bodyCellStyle(colIndex)}
                >
                  <text className="text-foreground">
                    {row[col.key] != null ? String(row[col.key]) : '—'}
                  </text>
                </view>
              ))}
            </view>
          ))}
        </view>
      </view>
    </scroll-view>
    </view>
  );
}
