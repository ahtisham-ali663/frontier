export type ITwoColumnGridLayoutSpanVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'

export interface ITwoColumnGridLayoutProps
  extends React.HTMLAttributes<HTMLElement> {
  layoutVariant?: ITwoColumnGridLayoutSpanVariant
  leftContent: string
  rightContent: string
  leftContentClassName?: string
  rightContentClassName?: string
}
