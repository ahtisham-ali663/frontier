import { ITypography } from 'src/blitz/components/Typography/types'

export interface IInjectHTML extends ITypography {
  value: string
  pureInjection?: boolean
  enableClick?: boolean
}
