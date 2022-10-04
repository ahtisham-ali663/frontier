import customStaticProps from 'src/utils/appData'
import {
  FRONTIER_MUTLIPLE_DEVICE_SECURITY,
  VISITOR,
  SERVICEABLE,
} from 'src/constants'
import MainLayout from 'src/layouts/MainLayout'
import {
  FeatureSection,
  TextSection,
  ContactAndUpgrade,
} from 'src/components/FrontierSecure'
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
      pageName: FRONTIER_MUTLIPLE_DEVICE_SECURITY,
      eVar22: VISITOR,
      eVar49: SERVICEABLE,
    },
  })

  return (
    <>
      <MainLayout {...props}>
        <FeatureSection />
        <TextSection />
        <ContactAndUpgrade />
      </MainLayout>
    </>
  )
}

export const getStaticProps = customStaticProps(
  '/shop/frontier-secure/multiple-device-security',
)

export default SSR
