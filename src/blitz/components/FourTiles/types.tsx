import { IButtonVariant } from '../Button'

export type IFourTilesType = 'light' | 'dark' | 'red'

export type IFourTilesAlign = 'left' | 'center' | 'right'

export type IFourTilesHoverStyle = '' | 'primary' | 'red'

export interface IFourTiles {
  tiles: IFourTileItem[]
  type: IFourTilesType
  textAlign: IFourTilesAlign
  mobileOneCol?: boolean
  tabletTwoCol?: boolean
  tabletOneCol?: boolean
  titleClassName?: string
  titleStyleType?: any
  cardClassName?: string
  descriptionClassName?: string
  isClickable?: boolean
  disableHover?: boolean
  roundedBorders?: boolean
  buttonClassName?: string
  hoverStyle?: IFourTilesHoverStyle
  // eslint-disable-next-line no-unused-vars
  renderData?: (index: number) => JSX.Element
}

export interface IFourTileItem {
  title: string
  description?: string
  icon?: JSX.Element
  button?: IFourTileButton
  href?: string
  objectID?: string
}

export interface IFourTileButton {
  type?: string
  text?: string
  href?: string
  variant?: IButtonVariant
  objectID?: string
}
