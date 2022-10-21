import customStaticProps from 'src/utils/appData'
import MainLayout from 'src/layouts/MainLayout'
import {
  Map,
  Sticky,
  Hero,
  ButtonLinks,
  UsefulInformation,
  Waivers,
  Information,
  UgentAlerts,
  HelpfulLinks,
  GovernmentAgency,
  SocialMedia,
} from '../../libs/capo'
interface PageProps {
  data: any
  success: boolean
}

function SSR(props: PageProps): JSX.Element {
  return (
    <>
      <MainLayout {...props}>
        <Hero />
        <ButtonLinks />
        <UsefulInformation />
        <Waivers />
        <Information />
        <UgentAlerts />
        <Map />
        <HelpfulLinks />
        <SocialMedia />
        <GovernmentAgency />
      </MainLayout>
      <Sticky />
    </>
  )
}

export const getStaticProps = customStaticProps('/')

export default SSR
