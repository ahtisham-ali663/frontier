import customStaticProps from 'src/utils/appData'
import { VISITOR, SERVICEABLE, NBA_LEAGUE_PASS_PAGE } from 'src/constants'
import MainLayout from 'src/layouts/MainLayout'
import {
  NbaAbout,
  NbaHero,
  NbaPricing,
} from 'src/libs/shop/tv/channels/nba-league-pass'
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
      pageName: NBA_LEAGUE_PASS_PAGE,
      eVar22: VISITOR,
      eVar49: SERVICEABLE,
    },
  })
  return (
    <MainLayout {...props}>
      <NbaHero />
      <NbaPricing />
      <NbaAbout />
    </MainLayout>
  )
}

export const getStaticProps = customStaticProps(
  '/shop/tv/channels/nba-league-pass',
)

export default SSR
