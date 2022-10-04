import { HeroStripes, Typography, Button, InjectHTML, Picture } from 'src/blitz'
import { makeStyles } from '@material-ui/core'
import colors from 'src/styles/theme/colors'
import { useAppData } from 'src/hooks'
import { useRouter } from 'next/router'

const HeroSection = () => {
  const {
    firstTitle,
    secondTitle,
    thirdTitle,
    description,
    primaryButtonText,
    image,
  }: any = useAppData('heroBanner', true)
  const classes = useStyles()
  const router = useRouter()

  const handleClick = () => {
    const targetElement = document.getElementById('how-to-order')
    if (targetElement) {
      targetElement.focus()
      window.scrollTo({
        top: targetElement?.offsetTop + 20,
        behavior: 'smooth',
      })
    } else {
      router.push(`${window?.location?.href}#how-to-order`)
    }
  }

  const heroSectionContent: JSX.Element = (
    <>
      <div className={classes.heroContainer}>
        <div className={classes.titleContainer}>
          <>
            <InjectHTML
              tagType="h1"
              styleType="h1"
              fontType="boldFont"
              color="tertiary"
              className={classes.heading}
              value={firstTitle?.value}
            />
            <InjectHTML
              tagType="h1"
              styleType="h1"
              fontType="boldFont"
              color="tertiary"
              className={classes.heading}
              value={secondTitle?.value}
            />
            <InjectHTML
              tagType="h1"
              styleType="h1"
              fontType="boldFont"
              color="tertiary"
              className={classes.heading}
              value={thirdTitle?.value}
            />
            <Typography
              tagType="p"
              styleType="h5"
              color="tertiary"
              className={classes.subTitle}
            >
              {description?.value}
            </Typography>
            <Button
              text={primaryButtonText?.value}
              type="button"
              onClick={handleClick}
              className={classes.button}
              hoverVariant="secondary"
            />
          </>
        </div>
        <div className={classes.imgContainer}>
          <Picture
            altText={image?.alt}
            desktop={{
              image: `${image?.src}`,
            }}
            className={classes.w100}
          />
        </div>
      </div>
    </>
  )
  return (
    <div data-testid="hero-section">
      <HeroStripes
        mobileBackgroundImage={''}
        backgroundImage={''}
        content={heroSectionContent}
        className={classes.newRoot}
        stripeColor="secondary"
        innerWrapperClassName={classes.contentInnerWrapper}
        stripesClass={classes.stripesStyles}
        stripesTitleWrapperClass={classes.stripesTitleWrapperStyles}
      />
    </div>
  )
}
const useStyles = makeStyles(({ breakpoints, typography }) => ({
  heroContainer: {
    display: 'flex',
    [breakpoints.down('sm')]: {
      flexDirection: 'column',
      paddingRight: `${typography.pxToRem(16)}`,
      paddingLeft: `${typography.pxToRem(16)}`,
    },
  },
  stripesContainer: { top: '0.5rem' },
  titleContainer: {
    maxWidth: `${typography.pxToRem(567)}`,
    [breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: 0,
    },
  },
  subTitle: {
    marginBottom: `${typography.pxToRem(32)}`,
  },
  description: {
    marginTop: '1.625rem',
    textTransform: 'none',
  },
  newRoot: {
    backgroundColor: colors.main.dark,
    minHeight: `${typography.pxToRem(600)}`,
    [breakpoints.down('sm')]: {
      minHeight: `${typography.pxToRem(650)}`,
    },
  },
  heading: {
    textTransform: 'none',
    marginBottom: '0.5rem',
    '& sup': {
      position: 'relative',
      fontSize: '1.5rem',
      lineHeight: 0,
      bottom: '.375rem',
      right: '1.125rem',
      [breakpoints.down('xs')]: {
        fontSize: '.75rem',
        bottom: '.25rem',
        right: '.5rem',
      },
    },
  },
  contentInnerWrapper: {
    paddingTop: `${typography.pxToRem(130)}`,
    [breakpoints.down('sm')]: {
      paddingTop: '3rem',
      paddingBottom: '3rem',
    },
  },
  button: {
    width: `${typography.pxToRem(270)}`,
    [breakpoints.down('sm')]: {
      width: '100%',
      fontSize: `${typography.pxToRem(18)}`,
    },
  },
  bannerImg: {
    width: '100%',
    marginTop: `${typography.pxToRem(-19)}`,
    [breakpoints.down('sm')]: {
      marginTop: `${typography.pxToRem(56)}`,
      marginRight: 0,
    },
  },
  w100: {
    width: '100%',
    height: '100%',
  },
  stripesTitleWrapperStyles: {
    [breakpoints.down('xs')]: {
      paddingLeft: `${typography.pxToRem(16)}`,
    },
  },
  stripesStyles: {
    top: '0.5rem',
    '& div': {
      height: `${typography.pxToRem(47)}`,
      marginBottom: `${typography.pxToRem(33)}`,
    },
  },
  imgContainer: {
    flex: 1,
    position: 'absolute',
    right: '-11.3%',
    top: '-8%',
    [breakpoints.down(1280)]: {
      width: '65%',
    },
    [breakpoints.down(1150)]: {
      width: '55%',
    },
    [breakpoints.down('sm')]: {
      position: 'relative',
      marginTop: `${typography.pxToRem(52)}`,
      top: 0,
      right: 0,
      width: '100%',
    },
  },
}))

export default HeroSection
