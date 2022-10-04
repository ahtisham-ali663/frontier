export interface ITooltip {
  tooltipText: string
  tooltipIcon?: JSX.Element
  includeBorder?: boolean
  tooltipDirection?: ITooltipDirection
  hideBorder?: boolean
  dropShadow?: boolean
}
export type ITooltipDirection = 'top' | 'bottom'
