import { useAppData } from 'src/hooks'
import { useRouter } from 'next/router'
import { ROW_ONE_LEARN_MORE } from 'src/constants'
import { Hero } from 'src/blitz'
const HeroSection = () => {
  const router = useRouter()
  const origin = window?.location?.origin || ''

  const { learnMoreButtonHref, signUpButtonHref } =
    useAppData('heroImage', true) || {}
  const handleLearnMoreClick = () => {
    //@ts-ignore
    s_objectID = ROW_ONE_LEARN_MORE
    const targetId = learnMoreButtonHref?.url?.replace(/[^a-zA-Z0-9]/g, '')
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      window.scrollTo({
        top: targetElement?.offsetTop - 160,
        behavior: 'smooth',
      })
    } else {
      router.push(`${origin}${learnMoreButtonHref?.url}`)
    }
  }
  const handleSignUpCLick = () => {
    window.location.href = `${origin}${signUpButtonHref?.url}`
  }

  const bannerInfo = useAppData('heroImage', true)
  if (!bannerInfo?.heading) {
    return null
  }
  const splitTitle = bannerInfo?.heading?.value.split(' ')
  const firstTitle = splitTitle[0]
  const secondTitle = splitTitle.splice(1, splitTitle.length).join(' ')

  return (
    <Hero
      title1={firstTitle}
      title2={secondTitle}
      subHeader={bannerInfo?.subHeading?.value}
      backgroundImage={bannerInfo?.sectionBackgroundImage?.src}
      mobileBackgroundImage={bannerInfo?.sectionBackgroundMobileImage?.src}
      primaryButton={{
        text: bannerInfo?.signUpButtonText?.value,
        type: 'button',
        onClick: handleSignUpCLick,
      }}
      secondaryButton={{
        text: bannerInfo?.learnMoreButtonText?.value,
        type: 'button',
        onClick: handleLearnMoreClick,
      }}
      legalText={bannerInfo?.legalText?.value || ''}
    />
  )
}

export default HeroSection
