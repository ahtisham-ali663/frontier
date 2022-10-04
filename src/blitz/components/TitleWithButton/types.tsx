import { IColorsName } from 'src/blitz/theme/colors/colors.types'
import {
  IButtonVariant,
  IButtonHoverVariant,
} from 'src/blitz/components/Button/types'
export interface ITitleWithButtonProps
  extends React.HTMLAttributes<HTMLElement> {
  title: string
  disclaimerNote?: string
  buttonColor: IColorsName
  hoverVariant?: IButtonHoverVariant
  buttonText: string | JSX.Element
  buttonURL: string
  buttonVariant: IButtonVariant
  backgroundColor: IColorsName
  titleFontColor: IColorsName
  buttonType: IButton
  className?: string
}
type IButton = 'button' | 'link'
