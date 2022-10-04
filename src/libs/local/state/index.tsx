import RightServiceProvider from '../components/RightServiceProvider'
import BundleYourServices from '../components/BundleYourServices'
import FrontierInternetServices from '../components/FrontierInternetServices'
import CustomerService from '../components/CustomerService'
import AboutFrontier from '../components/AboutFrontier'
import MovingToState from '../components/MovingToState'
import FilterCities from '../components/FilterCities'
import StatesWeOperate from '../components/StatesWeOperate'
import FastestInternet from '../components/FastestInternet'
import HeroSection from '../components/HeroSection'

type ComponentsProps = {
  [key: string]: any
}

const Components: ComponentsProps = {
  heroBanner: HeroSection,
  serviceDescriptionTwoColumnLayout: FastestInternet,
  rightServiceProvider: RightServiceProvider,
  BundleYourServices: BundleYourServices,
  FrontierInternetServices: FrontierInternetServices,
  CustomerService: CustomerService,
  AboutFrontier: AboutFrontier,
  MovingToState: MovingToState,
  cityData: FilterCities,
  StatesWeOperate: StatesWeOperate,
}

type DynamicComponentProps = {
  data: any
}
const DynamicStateComponent = ({ data }: DynamicComponentProps) => {
  // check if component is defined above
  if (Components[data?.componentName]) {
    const Component = Components[data?.componentName]
    return (
      <Component data={data?.fields?.data?.datasource} componentName="state" />
    )
  }
  // fallback if the component doesn't exist
  return null
}

export default DynamicStateComponent
