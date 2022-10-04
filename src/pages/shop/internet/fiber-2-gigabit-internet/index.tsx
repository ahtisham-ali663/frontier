/* eslint-disable prettier/prettier */
import { useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import {
  TWO_GIG_INTERNET_PAGE,
  VISITOR,
  UNVERIFIED_SERVICE_AREA,
} from 'src/constants'
import MainLayout from 'src/layouts/MainLayout'
import customStaticProps from 'src/utils/appData'
import {
  SwiperContent,
  FiberFuture,
  CheckAvailabilityInfo,
  HeroSection,
  WhyFiber2Gig,
  FiberInternetFAQ,
  Testimonials,
  InternetCredit,
  UncableYourself,
  Competition,
} from 'src/libs/shop/internet/fiber-2-gigabit-internet'
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
      pageName: TWO_GIG_INTERNET_PAGE,
      eVar22: VISITOR,
      eVar49: UNVERIFIED_SERVICE_AREA,
    },
  })

  useEffect(() => {
    if (window?.history?.scrollRestoration) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  return (
    <div className={classes.root}>
      <MainLayout {...props}>
        <HeroSection />
        <CheckAvailabilityInfo />
        <SwiperContent />
        <WhyFiber2Gig />
        <FiberFuture />
        <InternetCredit />
        <UncableYourself />
        <Competition />
        <Testimonials />
        <FiberInternetFAQ />
      </MainLayout>
    </div>
  )
}

const useStyle = makeStyles(({ breakpoints }) => ({
  root: {
    '& footer': {
      paddingBottom: 0,
      ['@media screen and (max-width: 1023px)']: {
        paddingBottom: 50,
      },
      [breakpoints.down('xs')]: {
        paddingBottom: 0,
      },
    },
    [breakpoints.down('xs')]: {
      paddingBottom: 100,
      '& .chat-button': {
        bottom: 100,
      },
    },
  },
}))

export const getStaticProps = customStaticProps(
  '/shop/internet/fiber-2-gigabit-internet',
)

export default SSR
