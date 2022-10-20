import { makeStyles } from '@material-ui/core/styles'
import { Typography } from 'src/blitz'
// import { useAppData } from 'src/hooks'
import { COMPONENT_WRAPPER, PADDING } from 'src/constants'
import colors from 'src/styles/theme/colors'

const Hero: React.FC = () => {
  //const { heading, description, image }: any = useAppData('hero', true)
  const Heading = {
    value: 'Your safety is our first priority',
  }
  const Description = {
    value: 'Information regarding declared disaster protections',
  }
  //useStyles({ background: image?.src })
  const classes = useStyles()()
  return (
    <div className={classes.root}>
      {/* <div className={classes.wrapper}> */}
      <div className={classes.content}>
        {/* <div className={classes.mainContent}> */}
        {Heading?.value && (
          <Typography
            tagType="h2"
            styleType="h2"
            fontType="regularFont"
            color="secondary"
            className={classes.Heading}
          >
            {Heading?.value}
          </Typography>
        )}
        {Description?.value && (
          <Typography
            tagType="h4"
            styleType="h4"
            color="tertiary"
            fontType="boldFont"
            className={classes.Description}
          >
            {Description?.value}
          </Typography>
        )}

        {/* <div className={classes.stripes}>
              <div className={classes.stripe}></div>
              <div className={classes.stripe}></div>
              <div className={classes.stripe}></div>
            </div> */}
        {/* </div> */}
      </div>
      {/* </div> */}
    </div>
  )
}
// ({ background }: any)
const useStyles = () =>
  makeStyles(({ breakpoints }) => ({
    root: {
      backgroundColor: colors.main.midnightExpress,
      //background: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      //   backgroundPosition: '50vw',
      //   backgroundSize: '58vw',
      //   [breakpoints.down('sm')]: {
      //     minHeight: '0',
      //     paddingBottom: '63vw',
      //     backgroundPosition: 'calc(100%) 100%',
      //     backgroundSize: '105vw',
      //     backgroundPositionX: 60,
      //   },
      //   [breakpoints.down('xs')]: {
      //     backgroundSize: '104vw',
      //     backgroundPositionX: 30,
      //     paddingBottom: '65vw',
      //   },
    },
    wrapper: {
      ...COMPONENT_WRAPPER,
      margin: '0 3rem',
      padding: `6rem ${PADDING}px`,
      [breakpoints.down('md')]: {
        padding: `3rem ${PADDING}px`,
      },
      [breakpoints.down('xs')]: {
        margin: '0 1rem',
        padding: `1.5rem ${PADDING}px`,
      },
    },
    Heading: {},
    Description: {
      marginTop: `${PADDING}px`,
    },
    content: {
      padding: '120px 60px',
      [breakpoints.down('sm')]: {
        margin: '0px 0px 0px 60px',
      },
      ['@media screen and (max-width: 760px)']: {
        margin: '1.75rem auto',
        width: '70%',
      },
      ['@media screen and (max-width: 520px)']: {
        width: '100%',
      },
    },
    mainContent: {
      position: 'relative',
      marginBottom: '2rem',
      '& p': {
        maxWidth: '550px',
      },
    },
    stripes: {
      position: 'absolute',
      width: '100vw',
      height: '100%',
      right: 'calc(100% + 2rem)',
      top: 0,
    },
    // stripe: {
    //   color: colors.main.accentYellow,
    //   backgroundColor: colors.main.greenishBlue,
    //   height: 'calc(33% - 12px)',
    //   '&:nth-of-type(2)': {
    //     margin: '1.875rem 0',
    //   },
    // },
  }))

export default Hero
