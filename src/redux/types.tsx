import { AppConfig } from './types/appConfigTypes'
import { AcpPage } from './types/acpTypes'

export type State = {
  appConfig: AppConfig
  acp: AcpPage
}

export * from './types/appConfigTypes'
export * from './types/acpTypes'
