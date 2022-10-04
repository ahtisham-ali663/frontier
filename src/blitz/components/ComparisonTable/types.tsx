import { ITypographyStyleType } from '../Typography/types'

export interface IComparisonProperty {
  name?: string
  textValue?: string | JSX.Element
  value?: string | boolean | JSX.Element
  iconSource?: string
  isPrimary?: boolean
  toolTip?: string
}

export interface IComparison {
  logo?: string
  headerDescription?: string
  headerDescriptionLink?: string
  header?: string
  properties?: IComparisonProperty[]
}

export interface IComparisonTableProps {
  items?: IComparison[]
  addBorderToHeader?: boolean
  headerNameTitle?: string
  toolTipIcon?: JSX.Element
  dropShadowForTooltip?: boolean
  hideBorderForTooltip?: boolean
  showBorderRadiusForTooltip?: boolean
  styleModifier?: {
    header?: string
    showRedCheckMarks?: boolean
    textStyleType?: ITypographyStyleType
    textAlignCenter?: boolean
    hidePreferredRowValue?: boolean
    valueTextCSS?: string
    rowClassName?: string
    rowValueClassName?: string
    tableHeaderClassName?: string
    rowHeaderLabel?: string
    backgroundEvenRow?: boolean
    roundedBorders?: boolean
    backgroundColor?: string
    headerClassName?: string
    primaryCellClassName?: string
  }
}
