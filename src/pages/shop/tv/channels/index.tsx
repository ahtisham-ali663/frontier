import customStaticProps from 'src/utils/appData'
import MainLayout from 'src/layouts/MainLayout'
import { NEW_CHANNELS_PAGE, VISITOR, SERVICEABLE } from 'src/constants'
import {
  Hero,
  EntertainmentChannels,
  UltrafastInternet,
  SportsFanFavorites,
  DirectKick,
  SwiperContent,
} from 'src/libs/shop/tv/channels'
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
      pageName: NEW_CHANNELS_PAGE,
      eVar22: VISITOR,
      eVar49: SERVICEABLE,
    },
  })

  return (
    <MainLayout {...props}>
      <Hero />
      <EntertainmentChannels />
      <SwiperContent />
      <SportsFanFavorites />
      <UltrafastInternet />
      <DirectKick />
    </MainLayout>
  )
}

export const getStaticProps = customStaticProps('/shop/tv/channels')

export default SSR
