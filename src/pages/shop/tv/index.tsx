import customStaticProps from 'src/utils/appData'
import MainLayout from 'src/layouts/MainLayout'
import { TV_PAGE, VISITOR, SERVICEABLE } from 'src/constants'
import {
  FiberInternetFAQ,
  StreamingOptions,
  Hero,
  FrontierCustomers,
  YouTubeTvBenefits,
  DirectTvBenefits,
  UserActionsCards,
  Comparison,
} from 'src/libs/shop/tv'
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
      pageName: TV_PAGE,
      eVar22: VISITOR,
      eVar49: SERVICEABLE,
    },
  })

  return (
    <MainLayout {...props}>
      <Hero />
      <FrontierCustomers />
      <YouTubeTvBenefits />
      <DirectTvBenefits />
      <Comparison />
      <StreamingOptions />
      <UserActionsCards />
      <FiberInternetFAQ />
    </MainLayout>
  )
}

export const getStaticProps = customStaticProps('/shop/tv')

export default SSR
