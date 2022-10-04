import customStaticProps from 'src/utils/appData'
import MainLayout from 'src/layouts/MainLayout'
import { FIBER_UPGRADE, VISITOR, UNVERIFIED_SERVICE_AREA } from 'src/constants'
import {
  HeroSection,
  CallToUpgrade,
  Testimonials,
  ScheduleInstallationBanner,
  FiberServices,
  SpecialAboutFiber,
  FiberOfferings,
  FiberUpgradeFAQ,
} from 'src/libs/why-frontier/why-fiber-internet/fiber-upgrade'
import { usePageLoadEvents } from 'src/hooks'
interface PageProps {
  data: any
  success: boolean
}

function SSR(props: PageProps): JSX.Element {
  usePageLoadEvents({
    shouldTriggerDTMEvent: true,
    shouldTriggerInvoca: false,
    eventData: {
      pageName: FIBER_UPGRADE,
      eVar22: VISITOR,
      eVar49: UNVERIFIED_SERVICE_AREA,
    },
  })
  return (
    <MainLayout {...props}>
      <HeroSection />
      <ScheduleInstallationBanner />
      <FiberServices />
      <FiberOfferings />
      <SpecialAboutFiber />
      <Testimonials />
      <CallToUpgrade />
      <FiberUpgradeFAQ />
    </MainLayout>
  )
}

export const getStaticProps = customStaticProps(
  '/why-frontier/why-fiber-internet/fiber-upgrade',
)

export default SSR
