import customStaticProps from 'src/utils/appData'
import MainLayout from 'src/layouts/MainLayout'
import { Map } from '../../libs/capo'
interface PageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
  success: boolean
}

function SSR(props: PageProps): JSX.Element {
  return (
    <MainLayout {...props}>
      <Map />
    </MainLayout>
  )
}

export const getStaticProps = customStaticProps('/')

export default SSR
