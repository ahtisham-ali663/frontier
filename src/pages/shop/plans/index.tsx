import customStaticProps from 'src/utils/appData'
import MainLayout from 'src/layouts/MainLayout'
import { VISITOR, SERVICEABLE, PLAN_PAGE } from 'src/constants'
import {
  CheckAvailability,
  Hero,
  StackUp,
  Qualify,
  FrontierFAQ,
  BannerList,
} from 'src/libs/shop/plans'
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
      pageName: PLAN_PAGE,
      eVar22: VISITOR,
      eVar49: SERVICEABLE,
    },
  })

  return (
    <MainLayout {...props}>
      <CheckAvailability />
      <Hero />
      <BannerList />
      <StackUp />
      <Qualify />
      <FrontierFAQ />
    </MainLayout>
  )
}

export const getStaticProps = customStaticProps('/')

export default SSR
