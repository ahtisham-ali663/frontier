import { makeStyles } from '@material-ui/core'
import { useRouter } from 'next/router'
import { Button, Typography, HeroStripes } from 'src/blitz'
import { useAppData } from 'src/hooks'

const HeroSection: React.FC = () => {
  const {
    firstTitle,
    secondTitle,
    thirdTitle,
    description,
    primaryButtonText,
    image,
    mobileImage,
  } = useAppData('heroBanner', true)
  const classes = useStyles()
  const router = useRouter()

  const handleClick = () => {
    const targetElement = document.getElementById('more')
    if (targetElement) {
      targetElement.focus()
      window.scrollTo({
        top: targetElement?.offsetTop + 20,
        behavior: 'smooth',
      })
    } else {
      router.push(`${window?.location?.href}#more`)
    }
  }

  return (
    <HeroStripes
      backgroundImage={image?.src}
      mobileBackgroundImage={mobileImage?.src}
      removeRightStripes={true}
      content={
        <>
          <div className={classes.firstTitle}>
            <Typography
              tagType="h1"
              styleType="h1"
              color="tertiary"
              className={classes.headingTitle}
            >
              {firstTitle?.value}
            </Typography>
            {secondTitle?.value && (
              <Typography
                tagType="h1"
                styleType="h1"
                color="primary"
                className={classes.headingTitle}
              >
                {secondTitle?.value}
              </Typography>
            )}
          </div>
          <Typography
            tagType="h1"
            styleType="h1"
            color="tertiary"
            className={classes.headingTitle}
          >
            {thirdTitle?.value}
          </Typography>
          <Typography
            styleType="p1"
            color="tertiary"
            className={classes.description}
            fontType="boldFont"
          >
            {description?.value}
          </Typography>
          <Button
            text={primaryButtonText?.value}
            type="button"
            onClick={handleClick}
            className={classes.watchVideoBtn}
            variant="primary"
            hoverVariant="secondary"
          />
        </>
      }
    />
  )
}
const useStyles = makeStyles(({ breakpoints }) => ({
  firstTitle: {
    display: 'flex',
    gap: 16,
  },
  headingTitle: {
    fontSize: '4rem',
    lineHeight: 1.1,
    marginBottom: '.625rem',
    [breakpoints.down('xs')]: {
      fontSize: '2rem',
    },
  },
  watchVideoBtn: {
    marginTop: 32,
    maxWidth: 300,
  },
  description: {
    maxWidth: '31.875rem',
    marginTop: 16,
  },
}))

export default HeroSection
