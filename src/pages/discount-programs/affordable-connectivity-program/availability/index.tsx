import customStaticProps from 'src/utils/appData'
import { usePageLoadEvents } from 'src/hooks'
import MainLayout from 'src/layouts/MainLayout'
import {
  MoveARoo,
  MoreInfoRequired,
} from 'src/libs/discount-programs/affordable-connectivity-program/availability'
import GTagSnippet, { GTagPageLoad } from 'src/utils/gtag'
import {
  ACP_AVAILABLITY_PAGE,
  VISITOR,
  UNVERIFIED_SERVICE_AREA,
} from 'src/constants'
interface PageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
  success: boolean
}

function SSR(props: PageProps): JSX.Element {
  usePageLoadEvents({
    shouldTriggerDTMEvent: true,
    eventData: {
      pageName: ACP_AVAILABLITY_PAGE,
      eVar22: VISITOR,
      eVar49: UNVERIFIED_SERVICE_AREA,
    },
  })
  return (
    <>
      <GTagSnippet />
      <GTagPageLoad />
      <MainLayout {...props}>
        <MoveARoo />
        <MoreInfoRequired />
      </MainLayout>
    </>
  )
}
export const getStaticProps = customStaticProps(
  '/discount-programs/affordable-connectivity-program/availability',
)

export default SSR
