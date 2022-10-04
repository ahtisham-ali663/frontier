import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from 'src/blitz'
import { useAppData } from 'src/hooks'
import { PADDING } from 'src/constants'
import colors from 'src/styles/theme/colors'

const Hero: React.FC = () => {
  const { heading, description, image }: any = useAppData('hero', true)
  const classes = useStyles({ background: image?.src })()
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <div className={classes.mainContent}>
            {!heading?.value && (
              <Typography
                tagType="h2"
                styleType="h2"
                fontType="regularFont"
                color="tertiary"
                className={classes.heading}
              >
                {heading?.value || 'Better faster'}
              </Typography>
            )}
            {!description?.value && (
              <Typography
                tagType="h2"
                styleType="h2"
                color="secondary"
                fontType="regularFont"
              >
                {description?.value || '100% FIBER'}
              </Typography>
            )}
            <br />
            <Typography
              tagType="h5"
              styleType="h5"
              color="tertiary"
              fontType="regularFont"
            >
              {description?.value || 'Frontier Fiber Gig Service'}
            </Typography>
            <br />
            <Typography
              tagType="h3"
              styleType="h3"
              color="tertiary"
              fontType="regularFont"
            >
              {description?.value || '$74.99'}
            </Typography>
            <Typography tagType="p" color="tertiary" fontType="regularFont">
              {description?.value ||
                '$w/ Auto Pay &amp; Paperless Bill per month for 36 mos. One-time charge on disconnect. Max wired speed 940/880 Mbps. Wi-Fi, actual &amp; average speeds vary..99'}
            </Typography>
          </div>
          <Button
            // variant="primary"
            className={classes.button}
            text={'CHECK AVAILABILITY'}
            type="link"
            href={'/'}
            // onClick={onButtonClick}
            // hoverVariant="secondary"
          />
        </div>
      </div>
    </div>
  )
}

const useStyles = ({ background }: any) =>
  makeStyles(({ breakpoints }) => ({
    root: {
      backgroundColor: colors.main.midnightExpress,
      background: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50vw',
      backgroundSize: '58vw',
      minHeight: '40.5rem',
      [breakpoints.down('sm')]: {
        minHeight: '0',
        paddingBottom: '5vw',
        backgroundPosition: 'calc(100%) 100%',
        backgroundSize: '105vw',
        backgroundPositionX: 60,
      },
      [breakpoints.down('xs')]: {
        // backgroundSize: '104vw',
        backgroundPositionX: 30,
        paddingBottom: '5vw',
      },
      ['@media screen and (min-width: 1441px)']: {
        backgroundSize: 720,
        backgroundPositionY: 107,
      },
    },
    wrapper: {
      // ...COMPONENT_WRAPPER,
      paddingLeft: '10rem',
      padding: `6rem ${PADDING}px`,
      [breakpoints.down('md')]: {
        padding: `3rem ${PADDING}px`,
      },
      [breakpoints.down('xs')]: {
        padding: `1.5rem ${PADDING}px`,
      },
    },
    heading: {
      textTransform: 'none',
      marginBottom: '0.5rem',
    },
    content: {
      [breakpoints.up('md')]: {
        width: '50%',
      },
      [breakpoints.down('md')]: {
        margin: '1.75rem 0',
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
    stripe: {
      backgroundColor: colors.main.greenishBlue,
      height: 'calc(33% - 12px)',
      '&:nth-of-type(2)': {
        margin: '1.875rem 0',
      },
    },
    button: {
      '&:hover': {
        color: 'black',
        background: 'red !important',
        textDecoration: 'underline',
        padding: '13.5px 38px',
      },
    },
  }))

export default Hero
