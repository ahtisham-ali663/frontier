import { TwoCards } from 'src/blitz'
import { useAppData } from 'src/hooks'

const WhyFrontier = () => {
  const { heading, subHeading, copy, disclaimer, cards } = useAppData(
    'whyFrontier',
    true,
  )
  const params = {
    heading: heading?.value || '',
    subheading: subHeading?.value || '',
    copy: copy?.value || '',
    disclaimer: disclaimer?.value || '',
    cards: [],
  }

  const cardMapper = (card: any) => ({
    image: {
      srcMobile: card?.imageMobile?.src || '',
      srcTablet: card?.imageTablet?.src || '',
      altText: card?.heading?.value || '',
    },
    heading: card?.heading?.value || '',
    eyebrow: card?.eyebrow?.value || '',
    multiplier: card?.multiplier?.value || '',
    copy: card?.copy?.value || '',
  })

  params.cards = cards?.list.length > 0 ? cards?.list.map(cardMapper) : []

  return (
    <div id="more">
      <TwoCards {...params} />
    </div>
  )
}

export default WhyFrontier
