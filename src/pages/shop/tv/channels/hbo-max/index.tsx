import customStaticProps from 'src/utils/appData'
import MainLayout from 'src/layouts/MainLayout'
import { HBO_MAX_PAGE, VISITOR } from 'src/constants'
import {
  Hero,
  HowToOrder,
  Additionalcost,
  AllHBOMax,
  Discovers,
  GretestCollection,
  Faq,
} from 'src/libs/shop/tv/channels/hbo-max'
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
      pageName: HBO_MAX_PAGE,
      eVar22: VISITOR,
    },
  })

  return (
    <MainLayout {...props}>
      <Hero />
      <HowToOrder />
      <Additionalcost />
      <AllHBOMax />
      <Discovers />
      <GretestCollection />
      <Faq />
    </MainLayout>
  )
}

export const getStaticProps = customStaticProps('/shop/tv/channels/hbo-max')

export default SSR
