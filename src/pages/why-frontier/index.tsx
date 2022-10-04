import customStaticProps from 'src/utils/appData'
import {
  WHY_FRONTIER_PAGE,
  VISITOR,
  UNVERIFIED_SERVICE_AREA,
} from 'src/constants'
import MainLayout from 'src/layouts/MainLayout'
import {
  HeroSection,
  WhyFrontierComponent,
  FastInternetVideo,
  Testimonials,
  OurFrontierPromise,
  FiberIsFuture,
  OurPastPresentFuture,
} from 'src/libs/why-frontier/why-frontier'
import { usePageLoadEvents } from 'src/hooks'

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
    <MainLayout {...props}>
      <HeroSection />
      <WhyFrontierComponent />
      <FastInternetVideo />
      <OurPastPresentFuture />
      <OurFrontierPromise />
      <FiberIsFuture />
      <Testimonials />
    </MainLayout>
  )
}
export const getStaticProps = customStaticProps('/why-frontier')

export default SSR
