import css from './Loading.module.scss'
import { IDotColor } from './types'

export const getDotColor = (color: IDotColor) => {
  switch (color) {
    case 'primary':
      return css.dotPrimary
    case 'secondary':
      return css.dotSecondary
    case 'black':
      return css.dotBlack
    default:
      return ''
  }
}
