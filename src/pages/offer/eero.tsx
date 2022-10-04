import MainLayout from 'src/layouts/MainLayout'
import customStaticProps from 'src/utils/appData'
import { Hero } from 'src/libs/offer/eero'
// Todo : getStaticProps Props path to be changed
interface PageProps {
  data: any
  success: boolean
}

const Eero = (props: PageProps) => {
  return (
    <MainLayout {...props}>
      <Hero />
    </MainLayout>
  )
}

export const getStaticProps = customStaticProps('/offer/eero')

export default Eero
