import customStaticProps from 'src/utils/appData'
import {
  WHY_FRONTIER_PAGE,
  VISITOR,
  UNVERIFIED_SERVICE_AREA,
} from 'src/constants'
import MainLayout from 'src/layouts/MainLayout'
import {
  HeroSection,
  QuickAccess,
  WhyFiber,
  SwiperContent,
  SpecialAboutFiber,
  OurFrontierPromise,
  FiberOfferings,
  UncableYourself,
  Testimonials,
  QualifyForACP,
} from 'src/libs/why-frontier/why-fiber-internet'
import { usePageLoadEvents } from 'src/hooks'
import GTagSnippet, { GTagPageLoad } from 'src/utils/gtag'
interface PageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
  success: boolean
}

function SSR(props: PageProps): JSX.Element {
  usePageLoadEvents({
    shouldTriggerDTMEvent: true,
    shouldTriggerInvoca: props?.success,
    eventData: {
      pageName: WHY_FRONTIER_PAGE,
      eVar22: VISITOR,
      eVar49: UNVERIFIED_SERVICE_AREA,
    },
  })

  return (
    <>
      <GTagSnippet />
      <GTagPageLoad />
      <MainLayout {...props}>
        <HeroSection />
        <QuickAccess />
        <SwiperContent />
        <SpecialAboutFiber />
        <FiberOfferings />
        <UncableYourself />
        <QualifyForACP />
        <OurFrontierPromise />
        <Testimonials />
        <WhyFiber />
      </MainLayout>
    </>
  )
}
export const getStaticProps = customStaticProps(
  '/why-frontier/why-fiber-internet',
)

export default SSR
