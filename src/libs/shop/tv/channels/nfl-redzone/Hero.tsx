import { HeroStripes, Typography, Button, Picture } from 'src/blitz'
import { makeStyles } from '@material-ui/core'
import colors from 'src/styles/theme/colors'
import { useAppData } from 'src/hooks'

const HeroSection = () => {
  const {
    title,
    subTitle,
    secondaryTitle,
    secondarySubTitle,
    secondarySubTitleRight,
    DesktopHeroImage,
    buttonText,
    ButtonValue,
  }: any = useAppData('hero', true)
  const classes = useStyles()
  const HeroSectionSecondaryHeader = (
    <div>
      <div className={classes.heading2}>
        <Typography
          tagType="h2"
          styleType="h2"
          fontType="boldFont"
          color="tertiary"
        >
          {secondaryTitle?.value}
        </Typography>
      </div>
      <div className={classes.hr} />
      <div className={classes.SecondaryHeroContainer}>
        <div className={classes.titleContainer}>
          <>
            <Typography
              tagType="h3"
              styleType="h4"
              fontType="boldFont"
              color="tertiary"
              className={classes.heading}
            >
              {secondarySubTitle?.value}
            </Typography>
          </>
        </div>
        <div className={classes.secondaryParagraph}>
          <Typography
            tagType="p"
            styleType="p1"
            color="tertiary"
            className={classes.secondarySubTitleRightStles}
          >
            {secondarySubTitleRight?.value}
          </Typography>
        </div>
      </div>
    </div>
  )

  const heroSectionContent: JSX.Element = (
    <>
      <div className={classes.heroContainer}>
        <div className={classes.bannerTitleContainer}>
          <>
            <Typography
              tagType="h1"
              styleType="h1"
              fontType="boldFont"
              color="tertiary"
              className={classes.heading}
            >
              {title?.value}
            </Typography>
            <Typography
              tagType="p"
              styleType="h5"
              color="tertiary"
              className={classes.subTitle}
            >
              {subTitle?.value}
            </Typography>
            <div className={classes.btnWrapper}>
              <Button
                text={buttonText?.value}
                type="link"
                href={ButtonValue?.src}
                className={classes.btnStyle}
                hoverVariant="secondary"
              />
            </div>
          </>
        </div>
        <div className={classes.imgContainer}>
          <Picture
            testId="cardImage"
            desktop={{
              image: DesktopHeroImage?.src,
            }}
            altText={DesktopHeroImage?.alt}
            width="100%"
            height="100%"
          />
        </div>
      </div>
      {HeroSectionSecondaryHeader}
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
    },
  },
  imgContainer: {
    flex: 1,
    position: 'absolute',
    right: '-20%',
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
  titleContainer: {
    maxWidth: '42%',
    [breakpoints.down('sm')]: {
      maxWidth: '100%',
      marginTop: `${typography.pxToRem(32)}`,
    },
  },
  bannerTitleContainer: {
    maxWidth: `${typography.pxToRem(611)}`,
    [breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  description: {
    marginTop: '1.625rem',
    textTransform: 'none',
  },
  newRoot: {
    backgroundColor: colors.main.dark,
    minHeight: `${typography.pxToRem(600)}`,
    [breakpoints.down('sm')]: {
      paddingRight: `${typography.pxToRem(16)}`,
    },
  },
  heading: {
    textTransform: 'none',
    marginBottom: '0.5rem',
    [breakpoints.down('sm')]: {
      marginBottom: 0,
    },
  },
  subTitle: {
    maxWidth: `${typography.pxToRem(500)}`,
  },
  contentInnerWrapper: {
    paddingTop: `${typography.pxToRem(130)}`,
    paddingBottom: `${typography.pxToRem(65)}`,
    [breakpoints.down('sm')]: {
      paddingTop: '3rem',
      paddingBottom: '3rem',
    },
  },
  hr: {
    border: `${typography.pxToRem(2)} solid ${colors.main.greenishBlue}`,
    backgroundColor: `${colors.main.greenishBlue}`,
  },
  heading2: {
    marginTop: `${typography.pxToRem(235)}`,
    marginBottom: `${typography.pxToRem(47)}`,
    maxWidth: `${typography.pxToRem(567)}`,
    [breakpoints.down(1200)]: {
      marginTop: `${typography.pxToRem(60)}`,
    },
    [breakpoints.down('sm')]: {
      marginTop: `${typography.pxToRem(48)}`,
      marginBottom: `${typography.pxToRem(32)}`,
      maxWidth: `${typography.pxToRem(343)}`,
      paddingRight: `${typography.pxToRem(10)}`,
    },
  },
  SecondaryHeroContainer: {
    display: 'flex',
    marginTop: `${typography.pxToRem(67)}`,
    [breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginTop: 0,
    },
  },
  secondaryParagraph: {
    marginLeft: '10%',
    maxWidth: 'calc(40% - 16px)',
    [breakpoints.down('sm')]: {
      marginLeft: 0,
      maxWidth: '100%',
    },
  },
  secondarySubTitleRightStles: {
    marginTop: 0,
    [breakpoints.down('sm')]: {
      marginTop: 16,
    },
  },
  stripesStyles: {
    top: '.625rem',
    '& div': {
      height: 47,
      marginBottom: 24,
    },
  },
  btnStyle: {
    padding: '10px 21.7px',
    display: 'flex',
    lineHeight: 1,
    [breakpoints.down('xs')]: {
      display: 'block',
      fontSize: '1.125rem',
      minHeight: 'auto',
      padding: '14px',
    },
  },
  stripesTitleWrapperStyles: {
    [breakpoints.down('xs')]: {
      paddingLeft: 16,
    },
  },
  btnWrapper: {
    display: 'inline-flex',
    marginTop: 30,
    [breakpoints.down('xs')]: {
      display: 'block',
    },
  },
}))

export default HeroSection
