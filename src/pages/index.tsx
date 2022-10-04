import customStaticProps from 'src/utils/appData'
import { HOME_PAGE, VISITOR, UNVERIFIED_SERVICE_AREA } from 'src/constants'
import MainLayout from 'src/layouts/MainLayout'
import {
  BannerCarousal,
  QuickAccess,
  PopularHelp,
  OrgSchema,
} from 'src/libs/home'
import TwoGig from 'src/libs/home/TwoGig'
import BestInternet from 'src/libs/home/BestInternet'
import MobileApp from 'src/libs/home/MobileApp'
import { usePageLoadEvents } from 'src/hooks'

interface PageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
  success: boolean
}

function SSR(props: PageProps): JSX.Element {
  usePageLoadEvents({
    shouldTriggerDTMEvent: true,
    eventData: {
      pageName: HOME_PAGE,
      eVar22: VISITOR,
      eVar49: UNVERIFIED_SERVICE_AREA,
    },
  })

  return (
    <MainLayout {...props}>
      <OrgSchema />
      <BannerCarousal />
      <QuickAccess />
      <PopularHelp />
      <MobileApp />
      <BestInternet />
      <TwoGig />
    </MainLayout>
  )
}
export const getStaticProps = customStaticProps('/')

export default SSR
