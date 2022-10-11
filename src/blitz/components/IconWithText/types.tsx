import { IColorsName } from 'src/blitz/theme/colors/colors.types'
import { ITypography } from '../Typography'

export interface ITextIcon {
  className?: string
  iconColor: string
  title: string
  backgroundColor?: IColorsName
  fontType?: string
}
export interface ILink extends React.HTMLProps<HTMLAnchorElement> {
  text: ITypography
}
