export interface IHeroStripes {
  backgroundImage: string
  mobileBackgroundImage: string
  className?: string
  content: JSX.Element
  removeRightStripes?: boolean
  stripeColor?: 'primary' | 'secondary' | 'tertiary'
  keepMobileStripes?: boolean
  stripeStyles?: stripeStyles
  innerWrapperClassName?: string
  stripesClass?: string
  stripesTitleWrapperClass?: string
}

export interface stripeStyles {
  height?: number
  marginBottom?: number
}
export interface IHeroStripe {
  stripeColor?: string
  stripeStyles?: stripeStyles
}
