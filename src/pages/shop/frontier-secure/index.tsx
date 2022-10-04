import MainLayout from 'src/layouts/MainLayout'
import customStaticProps from 'src/utils/appData'
import { FRONTIER_SECURE_PAGE, VISITOR, SERVICEABLE } from 'src/constants'
import {
  HeroBanner,
  BundleItAllAndSave,
  ExploreFrontierSecureServices,
  PremiumTechPro,
  FrontierSecureInfo,
  CheckAvailabilityInfo,
} from 'src/libs/shop/frontier-secure'
import { usePageLoadEvents } from 'src/hooks'
interface PageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
  success: boolean
}

function SSR(props: PageProps): JSX.Element {
  usePageLoadEvents({
    shouldTriggerDTMEvent: true,
    shouldTriggerInvoca: props.success,
    eventData: {
      pageName: FRONTIER_SECURE_PAGE,
      eVar22: VISITOR,
      eVar49: SERVICEABLE,
    },
  })

  return (
    <>
      <MainLayout {...props}>
        <HeroBanner />
        <FrontierSecureInfo />
        <ExploreFrontierSecureServices />
        <BundleItAllAndSave />
        <PremiumTechPro />
        <CheckAvailabilityInfo />
      </MainLayout>
    </>
  )
}

export const getStaticProps = customStaticProps('/shop/frontier-secure')

export default SSR
