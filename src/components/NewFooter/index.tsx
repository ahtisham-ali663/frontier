import { useAppData } from 'src/hooks'
import { formatData } from './helper'
import { Footer } from 'src/blitz'
// import DTMClient from 'src/utils/adobe/dynamicTagManagement/client'
// import { FOOTER_LINKS, SITE_INTERACTION } from 'src/constants'
interface NewFooterProps {
  data?: any
  legalData?: any
}
const NewFooter: React.FC<NewFooterProps> = ({
  data,
  legalData,
}: NewFooterProps): JSX.Element => {
  const item = useAppData('newFooter', true, data)
  const { description } = useAppData('LegalDescription', true, legalData)

  const finalData = formatData(item, description)
  const clickAnalytics = () => {
    // DTMClient.triggerEvent(
    //   {
    //     events: 'event14',
    //     eVar14: FOOTER_LINKS.replace('{NAME}', title.toLowerCase()),
    //   },
    //   'tl_o',
    //   SITE_INTERACTION,
    // )
  }
  return <Footer {...finalData} onClickCallback={clickAnalytics} />
}

export default NewFooter
