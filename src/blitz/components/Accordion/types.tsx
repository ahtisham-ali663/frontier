export type IAccordionItemString = {
  title: string | JSX.Element
  description: string | JSX.Element
  borderUnderDescription?: boolean
}

export type IAccordionItemInjectHTML = {
  title: string | JSX.Element
  description: string
  borderUnderDescription?: boolean
}

export type IAccordionItem = IAccordionItemString | IAccordionItemInjectHTML

export type IAccordion = {
  list?: IAccordionItem[]
  titleClassName?: string
  descriptionClassName?: string
  borderUnderDescription?: boolean
  isSingleItemOpen?: boolean
  shouldTruncate?: boolean
  maxCap?: number
  showMoreText?: string
  showLessText?: string
  accordionClickHandler?: (
    // eslint-disable-next-line no-unused-vars
    showDescription: boolean,
    // eslint-disable-next-line no-unused-vars
    title: string,
  ) => void | undefined
}
