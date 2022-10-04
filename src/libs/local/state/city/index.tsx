import WhyFrontier from '../../components/WhyFrontier'
import BenefitsFrontier from '../../components/BenefitsFrontier'
import CheckAvailability from '../../components/CheckAvailability'
import FastInternetService from '../../components/FastInternetService'
import ExperienceHighSpeed from '../../components/ExperienceHighSpeed'
import StatesWeOperate from '../../components/StatesWeOperate'
import FaqList from '../../components/FaqList'
import GigServiceTwoCards from '../../components/GigServiceTwoCards'
import ComparisonTableUpdated from '../../components/ComparisonTableUpdated'
import HeroSection from '../../components/HeroSection'
import FastestInternet from '../../components/FastestInternet'
import FilterCities from '../../components/FilterCities'

type ComponentsProps = {
  [key: string]: any
}

const Components: ComponentsProps = {
  heroBanner: HeroSection,
  GigServiceTwoCards: GigServiceTwoCards,
  serviceDescriptionTwoColumnLayout: FastestInternet,
  cityData: FilterCities,
  whyFrontier: WhyFrontier,
  CheckAvailability: CheckAvailability,
  contactBanner: CheckAvailability,
  FastInternetService: FastInternetService,
  benefitsFrontier: BenefitsFrontier,
  ExperienceHighSpeed: ExperienceHighSpeed,
  StatesWeOperate: StatesWeOperate,
  faqList: FaqList,
  comparisonTableUpdated: ComparisonTableUpdated,
}

type DynamicComponentProps = {
  data: any
}
const DynamicCityComponent = ({ data }: DynamicComponentProps) => {
  // check if component is defined above
  if (Components[data?.componentName]) {
    const Component = Components[data?.componentName]
    return (
      <Component data={data?.fields?.data?.datasource} componentName="city" />
    )
  }
  // fallback if the component doesn't exist
  return null
}

export default DynamicCityComponent
