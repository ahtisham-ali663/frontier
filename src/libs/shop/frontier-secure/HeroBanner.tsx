import { useAppData } from 'src/hooks'
import DTMClient from 'src/utils/adobe/dynamicTagManagement/client'
import { useRouter } from 'next/router'
import {
  HERO_LEARN_MORE,
  SITE_INTERACTION,
  ROW_ONE_LEARN_MORE,
} from 'src/constants'
import { Hero } from 'src/blitz'

const HeroBanner = () => {
  const router = useRouter()
  const {
    heading,
    learnMoreButtonHref,
    subHeading,
    sectionBackgroundImage,
    sectionBackgroundMobileImage,
    learnMoreButtonText,
  } = useAppData('heroImage', true)

  const splitTitle = heading?.value.split(' ')
  const firstTitle = splitTitle[0]
  const secondTitle = splitTitle.splice(1, splitTitle.length).join(' ')

  const handleLearnMoreClick = () => {
    const targetId = learnMoreButtonHref?.url?.replace(/[^a-zA-Z0-9]/g, '')
    const targetElement = document.getElementById(targetId)
    //@ts-ignore
    s_objectID = ROW_ONE_LEARN_MORE
    DTMClient.triggerEvent(
      {
        events: 'event14',
        eVar14: targetElement ? `frontier id: ${targetId}` : HERO_LEARN_MORE,
      },
      'tl_o',
      SITE_INTERACTION,
    )
    if (targetElement) {
      window.scrollTo({
        top: targetElement?.offsetTop - 50,
        behavior: 'smooth',
      })
    } else {
      router.push(`${origin}${learnMoreButtonHref?.url}`)
    }
  }

  return (
    <Hero
      title1={firstTitle}
      title2={secondTitle}
      subHeader={subHeading?.value}
      backgroundImage={sectionBackgroundImage?.src}
      mobileBackgroundImage={sectionBackgroundMobileImage?.src}
      primaryButton={{
        text: learnMoreButtonText?.value,
        type: 'button',
        onClick: handleLearnMoreClick,
      }}
    />
  )
}

export default HeroBanner
