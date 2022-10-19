import { IColorsName } from 'src/blitz/theme/colors/colors.types'
import { ITypography } from '../Typography'

export interface ITextIcon {
  className?: string
  title: string
  backgroundColor?: IColorsName
  fontType?: string
  children?: any
}
export interface ILink extends React.HTMLProps<HTMLAnchorElement> {
  text: ITypography
}
