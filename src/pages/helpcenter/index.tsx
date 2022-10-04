import customStaticProps from 'src/utils/appData'
import MainLayout from 'src/layouts/MainLayout'
import { HelpCenterPage } from 'src/libs/helpcenter/help-center'

interface PageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
  success: boolean
}

function SSR(props: PageProps): JSX.Element {
  return (
    <MainLayout {...props}>
      <HelpCenterPage page="" />
    </MainLayout>
  )
}
export const getStaticProps = customStaticProps('/helpcenter')

export default SSR
