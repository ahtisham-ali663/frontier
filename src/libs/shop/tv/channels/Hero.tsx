import { HeroStripes, InjectHTML, Typography } from 'src/blitz'
import { makeStyles } from '@material-ui/core'
import colors from 'src/styles/theme/colors'
import { useAppData } from 'src/hooks'

const HeroSection = () => {
  const { heading, description, image, mobileBackgroundImage }: any =
    useAppData('heroData', true)
  const classes = useStyles()

  const heroSectionContent: JSX.Element = (
    <div className={classes.heroContainer}>
      <div className={classes.titleContainer}>
        <>
          {heading?.value && (
            <Typography
              tagType="h1"
              styleType="h1"
              fontType="boldFont"
              color="tertiary"
              className={classes.heading}
            >
              {heading?.value}
            </Typography>
          )}
          {description?.value && (
            <InjectHTML
              tagType="p"
              styleType="h5"
              color="tertiary"
              fontType="boldFont"
              className={classes.subheadingStyles}
              value={description?.value}
            />
          )}
        </>
      </div>
    </div>
  )
  return (
    <div data-testid="hero-section">
      <HeroStripes
        mobileBackgroundImage={mobileBackgroundImage?.src}
        backgroundImage={image?.src}
        content={heroSectionContent}
        className={classes.newRoot}
        stripeColor="secondary"
        innerWrapperClassName={classes.contentInnerWrapper}
        stripesClass={classes.stripesStyles}
      />
    </div>
  )
}
const useStyles = makeStyles(({ breakpoints }) => ({
  heroContainer: {
    maxWidth: '570px',
    marginLeft: '23px',
    [breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  titleContainer: {
    display: 'flex',
    gap: '.25rem',
    flexWrap: 'wrap',
    [breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  description: {
    marginTop: '1.625rem',
    textTransform: 'none',
  },
  newRoot: {
    backgroundColor: colors.main.dark,
    minHeight: '600px',
    [breakpoints.down('sm')]: {
      minHeight: '650',
    },
  },
  heading: {
    textTransform: 'none',
    marginBottom: '0.75rem',
  },
  contentInnerWrapper: {
    paddingTop: '190px',
    [breakpoints.down('sm')]: {
      paddingTop: '3rem',
      paddingRight: '5px',
    },
  },
  subheadingStyles: {
    '& sup': {
      lineHeight: 1,
      fontSize: '1rem',
    },
  },
  stripesStyles: {
    left: '-198.3%',
    top: '0.5rem',
  },
}))

export default HeroSection
