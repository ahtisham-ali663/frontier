import HeroBanner from './HeroSection'
import FrontierInfo from './FrontierInfo'
import FrontierEero from './FrontierEero'
import SpeedCallOut from './SpeedCallout'
import ExtraSpeed from './ExtraSpeed'
import FrontierReputation from './FrontierReputation'
import QuickAccess from './QuickAccess'
import ProsAndCons from './ProsAndCons'
import { RichText } from 'src/blitz'
type ComponentsProps = {
  [key: string]: any
}

const Components: ComponentsProps = {
  HeroBanner,
  frontierInfo: FrontierInfo,
  frontierEroo: FrontierEero,
  quickInfo: SpeedCallOut,
  quickAccess: QuickAccess,
  reputationData: FrontierReputation,
  richText: RichText,
  extraSpeedData: ExtraSpeed,
  ProsAndCons,
}

type DynamicComponentProps = {
  data: any
}
const DynamicComponent = ({ data }: DynamicComponentProps) => {
  // check if component is defined above
  if (Components[data?.componentName]) {
    const Component = Components[data?.componentName]
    return <Component data={data?.fields?.data?.datasource} />
  }
  // fallback if the component doesn't exist
  return null
}

export default DynamicComponent
