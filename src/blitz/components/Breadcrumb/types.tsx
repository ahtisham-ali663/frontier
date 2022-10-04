export type IBreadcrumb = {
  variant: 'primary' | 'secondary'
  links: {
    pageName: string
    href: string
    isCurrent?: boolean
  }[]
  hoverEffect?: boolean
}
