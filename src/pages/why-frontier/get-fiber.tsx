import customStaticProps from 'src/utils/appData'
import MainLayout from 'src/layouts/MainLayout'
import { GET_FIBER_PAGE, VISITOR, UNVERIFIED_SERVICE_AREA } from 'src/constants'
import {
  FiberIsFuture,
  ImageBoxText,
  Testimonials,
  HeroSection,
  CheckAvailabilityInfo,
} from 'src/libs/why-frontier/get-fiber'
import GTagSnippet, { GTagPageLoad } from 'src/utils/gtag'
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
      pageName: GET_FIBER_PAGE,
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
        <CheckAvailabilityInfo />
        <ImageBoxText />
        <FiberIsFuture />
        <Testimonials />
      </MainLayout>
    </>
  )
}
export const getStaticProps = customStaticProps('/why-frontier/get-fiber')

export default SSR
