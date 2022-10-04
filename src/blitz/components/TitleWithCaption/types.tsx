import { IColorsName } from 'src/blitz/theme/colors/colors.types'
export interface ITitleWithCaptionProps
  extends React.HTMLAttributes<HTMLElement> {
  buttonText: string
  title: string
  backgroundColor?: IColorsName
  fontColor?: IColorsName
}
