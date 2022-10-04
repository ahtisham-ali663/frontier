import { HeroStripes, InjectHTML, Typography } from 'src/blitz'
import { makeStyles } from '@material-ui/core'
import colors from 'src/styles/theme/colors'
import { useAppData } from 'src/hooks'

const HeroSection = () => {
  const { title, description, image, mobileImage }: any = useAppData(
    'hero',
    true,
  )
  const classes = useStyles()

  const heroSectionContent: JSX.Element = (
    <div className={classes.heroContainer}>
      <div className={classes.titleContainer}>
        <>
          {title?.value && (
            <Typography
              tagType="h1"
              styleType="h1"
              fontType="boldFont"
              color="tertiary"
              className={classes.heading}
            >
              {title?.value}
            </Typography>
          )}
          {description?.value && (
            <InjectHTML
              tagType="p"
              styleType="h5"
              color="tertiary"
              fontType="boldFont"
              className={classes.description}
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
        mobileBackgroundImage={mobileImage?.src}
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
    maxWidth: '530px',
    marginLeft: '29px',
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
    [breakpoints.down('sm')]: {
      fontSize: '1.125rem',
      paddingRight: '12px',
    },
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
    [breakpoints.down('sm')]: {
      marginBottom: 0,
    },
  },
  contentInnerWrapper: {
    paddingTop: '75px',
    [breakpoints.down('sm')]: {
      paddingTop: '3rem',
      paddingRight: '16px',
    },
  },
  stripesStyles: {
    left: '-198.3%',
    top: '0.5rem',
  },
}))

export default HeroSection
