export type ILinksAccordionItem = {
  title: string
  children: ILinksAccordionSubLink[]
}

export type ILinksAccordionSubLink = {
  title: string
  href: string
}

export type ILinksAccordion = {
  list?: ILinksAccordionItem[]
  titleClassName?: string
  childrenClassName?: string
}
