export type ITypographyStyleType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p1'
  | 'p2'
  | 'p3'
  | 'p4'
  | 'legal'

export type ITypographyElement =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'div'

export type ITypographyFontType =
  | ''
  | 'regularFont'
  | 'mediumFont'
  | 'boldFont'
  | 'regularBandwidthFont'
  | string

export interface ITypography {
  styleType?: ITypographyStyleType
  tagType?: ITypographyElement
  children?: string | JSX.Element
  className?: string
  color?: 'primary' | 'secondary' | 'tertiary' | 'default'
  fontType?: ITypographyFontType
  testId?: string
  dangerouslySetInnerHTML?: any
}
