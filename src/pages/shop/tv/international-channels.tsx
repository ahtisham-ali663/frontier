import customStaticProps from 'src/utils/appData'
import {
  INTERNATIONAL_CHANNELS_PAGE,
  VISITOR,
  SERVICEABLE,
} from 'src/constants'
import MainLayout from 'src/layouts/MainLayout'
import InternationalChannels from 'src/components/InternationalChannelCards'
import {
  FeatureSection,
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
      pageName: INTERNATIONAL_CHANNELS_PAGE,
      eVar22: VISITOR,
      eVar49: SERVICEABLE,
    },
  })

  return (
    <>
      <MainLayout {...props}>
        <FeatureSection />
        <InternationalChannels />
        <ContactAndUpgrade />
      </MainLayout>
    </>
  )
}

export const getStaticProps = customStaticProps(
  '/shop/tv/international-channels',
)

export default SSR
