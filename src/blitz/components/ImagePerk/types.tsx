import { IColorsName } from 'src/blitz/theme/colors/colors.types'
import { IColorName } from 'src/blitz/components/Stripes/types'

export interface IImagePerk {
  content?: JSX.Element
  contentAlign?: string
  tabletBackgroundImage: BackgroundImage
  mobileBackgroundImage?: BackgroundImage
  backgroundColor?: IColorsName
  backgroundColorContent?: IColorsName
  stripeColor?: IColorName
  className?: string
  contentClassName?: string
  contentBoxBorderRadius?: boolean
  linesBgColorsClass?: string
  imageStyleClassName?: string
  imageClassName?: string
}

export type BackgroundImage = Partial<HTMLImageElement>
