import { HeroStripes, Typography, Button, InjectHTML } from 'src/blitz'
import { makeStyles } from '@material-ui/core'
import colors from 'src/styles/theme/colors'

const HeroSection = ({ data }: any) => {
  const {
    firstTitle,
    description,
    primaryButtonText,
    primaryButtonHref,
    image,
    mobileImage,
  } = data
  const classes = useStyles()

  const backgroundClass = image?.src ? '' : classes.newRoot
  const titleStyleClass = image?.src ? '' : classes.darkBackgroundTitle
  const descriptionStyleClass = image?.src ? '' : classes.darkBackgroundDesc
  const heroSectionContent: JSX.Element = (
    <div className={classes.heroContainer} data-testid="hero-section">
      <div className={classes.titleContainer}>
        <Typography
          tagType="h1"
          styleType="h3"
          className={` ${titleStyleClass}`}
        >
          <>
            {firstTitle.value && (
              <InjectHTML pureInjection value={`${firstTitle.value}<br/>`} />
            )}
            <InjectHTML
              tagType="div"
              styleType="h1"
              className={`${classes.description} ${descriptionStyleClass}`}
              value={description.value}
            ></InjectHTML>
          </>
        </Typography>
      </div>
      <Button
        text={primaryButtonText?.value}
        type="link"
        href={primaryButtonHref?.url}
        variant="secondary"
        className={classes.watchVideoBtn}
      />
    </div>
  )
  return (
    <div data-testid="fastest-internet">
      <HeroStripes
        mobileBackgroundImage={mobileImage?.src}
        backgroundImage={image?.src}
        content={heroSectionContent}
        className={backgroundClass}
        stripeColor="primary"
      />
    </div>
  )
}
const useStyles = makeStyles(({ breakpoints }) => ({
  heroContainer: { marginBottom: 100 },
  titleContainer: {
    display: 'flex',
    gap: '.25rem',
    flexWrap: 'wrap',
    [breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  watchVideoBtn: {
    marginTop: '.75rem',
    maxWidth: 300,
    border: `1px solid ${colors.main.white}`,
    display: 'block',
  },
  description: {
    marginTop: '1.625rem',
    textTransform: 'none',
  },
  darkBackgroundTitle: {
    color: colors.main.white,
  },
  newRoot: {
    backgroundColor: colors.main.dark,
  },
  darkBackgroundDesc: {
    color: colors.main.greenishBlue,
  },
}))

export default HeroSection
