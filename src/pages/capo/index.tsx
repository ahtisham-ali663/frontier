import customStaticProps from 'src/utils/appData'
import MainLayout from 'src/layouts/MainLayout'
import {
  Map,
  Sticky,
  Hero,
  ButtonLinks,
  Connections,
  UgentAlerts,
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
        <Connections />
        <UgentAlerts />
        <Map />
      </MainLayout>
      <Sticky />
    </>
  )
}

export const getStaticProps = customStaticProps('/')

export default SSR
