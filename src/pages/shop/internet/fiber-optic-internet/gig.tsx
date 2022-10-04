import { makeStyles } from '@material-ui/core'
import customStaticProps from 'src/utils/appData'
import { FRONTIER_INTERNET_GIG, VISITOR, SERVICEABLE } from 'src/constants'
import MainLayout from 'src/layouts/MainLayout'
import {
  HeroSection,
  FrontierEero,
  GetBestDeal,
  Youtube,
  FiberInternetFAQ,
  CompareFibers,
  UncableYourself,
  Testimonials,
  WhyFrontier,
  InternetCredit,
} from 'src/libs/shop/internet/fiber-optic-internet/gig'
import { CheckAvailabilityInfo } from 'src/libs/shop/internet/fiber-2-gigabit-internet'
import { usePageLoadEvents } from 'src/hooks'
interface PageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
  success: boolean
}

function SSR(props: PageProps): JSX.Element {
  const classes = useStyle()

  usePageLoadEvents({
    shouldTriggerDTMEvent: true,
    shouldTriggerInvoca: props?.success,
    eventData: {
      pageName: FRONTIER_INTERNET_GIG,
      eVar22: VISITOR,
      eVar49: SERVICEABLE,
    },
  })

  return (
    <div className={classes.root}>
      <MainLayout {...props}>
        <HeroSection />
        <CheckAvailabilityInfo />
        <WhyFrontier />
        <FrontierEero />
        <GetBestDeal />
        <CompareFibers />
        <UncableYourself />
        <Youtube />
        <Testimonials />
        <InternetCredit />
        <FiberInternetFAQ />
      </MainLayout>
    </div>
  )
}
const useStyle = makeStyles(({ breakpoints }) => ({
  root: {
    '& footer': {
      paddingBottom: 0,
      [breakpoints.down('md')]: {
        paddingBottom: 85,
      },
      [breakpoints.down('xs')]: {
        paddingBottom: 100,
        '& .chat-button': {
          bottom: 100,
        },
      },
    },
  },
}))

export const getStaticProps = customStaticProps(
  '/shop/internet/fiber-optic-internet/gig',
)

export default SSR
