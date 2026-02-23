import type { CardProps, CardHeaderProps, CardBodyProps, CardFooterProps } from './CardCommon';

const baseCard =
  'rounded-xl border border-border bg-card text-card-foreground shadow-sm overflow-hidden';

function CardRoot(props: CardProps) {
  const { children, className = '' } = props;
  return <view className={`${baseCard} ${className}`.trim()}>{children}</view>;
}

function CardHeader(props: CardHeaderProps) {
  const { children, className = '' } = props;
  return (
    <view className={`border-b border-border px-4 py-3 ${className}`.trim()}>
      {children}
    </view>
  );
}

function CardBody(props: CardBodyProps) {
  const { children, className = '' } = props;
  return <view className={`px-4 py-3 ${className}`.trim()}>{children}</view>;
}

function CardFooter(props: CardFooterProps) {
  const { children, className = '' } = props;
  return (
    <view className={`border-t border-border px-4 py-3 bg-secondary ${className}`.trim()}>
      {children}
    </view>
  );
}

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});
