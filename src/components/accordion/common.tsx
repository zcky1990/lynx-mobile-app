export interface AccordionItemProps {
  title: string
  description: string
  open?: boolean
}

export interface AccordionProps {
    title: string,
    description: string
    items?: Array<AccordionItemProps>
}