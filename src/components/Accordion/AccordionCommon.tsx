export interface AccordionItemProps {
  title: string
  description: string
  open?: boolean
  theme?: 'light' | 'dark'
}

export interface AccordionProps {
    title: string,
    description: string
    items?: Array<AccordionItemProps>
    theme?: 'light' | 'dark'
}