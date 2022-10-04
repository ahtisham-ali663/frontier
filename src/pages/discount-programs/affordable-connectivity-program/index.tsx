import customStaticProps from 'src/utils/appData'
import { ACP_PAGE, VISITOR, UNVERIFIED_SERVICE_AREA } from 'src/constants'
import MainLayout from 'src/layouts/MainLayout'
import {
  HeroACP,
  WhatsACP,
  ApplyACP,
  PreferToCall,
  ACPSaveComparison,
  FrontierLifeLine,
  GroupFaqACP,
  BreadCrumb,
} from 'src/libs/discount-programs/affordable-connectivity-program'
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
    eventData: {
      pageName: ACP_PAGE,
      eVar22: VISITOR,
      eVar49: UNVERIFIED_SERVICE_AREA,
    },
  })
  return (
    <>
      <GTagSnippet />
      <GTagPageLoad />
      <MainLayout {...props}>
        <HeroACP />
        <BreadCrumb />
        <WhatsACP />
        <ApplyACP />
        <PreferToCall />
        <ACPSaveComparison />
        <FrontierLifeLine />
        <GroupFaqACP />
      </MainLayout>
    </>
  )
}
export const getStaticProps = customStaticProps(
  '/discount-programs/affordable-connectivity-program',
)

export default SSR
