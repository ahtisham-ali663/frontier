import { makeStyles } from '@material-ui/core'
import customStaticProps from 'src/utils/appData'
import { FRONTIER_INTERNET_500, VISITOR, SERVICEABLE } from 'src/constants'
import MainLayout from 'src/layouts/MainLayout'
import {
  TextSection,
  ContactAndUpgrade,
  FeatureSection,
} from 'src/components/FrontierSecure'
import { BreadCrumb, InternetDetails } from 'src/libs/shop/internet/internet'
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
      pageName: FRONTIER_INTERNET_500,
      eVar22: VISITOR,
      eVar49: SERVICEABLE,
    },
  })

  return (
    <>
      <MainLayout {...props}>
        <BreadCrumb />
        <FeatureSection className={classes.featureSectionWrapper} />
        <InternetDetails />
        <TextSection />
        <ContactAndUpgrade />
      </MainLayout>
    </>
  )
}

const useStyle = makeStyles({
  featureSectionWrapper: {
    marginTop: 0,
  },
})

export const getStaticProps = customStaticProps(
  '/shop/internet/fiber-optic-internet/500',
)

export default SSR
