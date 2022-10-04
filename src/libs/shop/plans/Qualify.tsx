import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from 'src/blitz'
import { useAppData } from 'src/hooks'
import { PADDING } from 'src/constants'
import colors from 'src/styles/theme/colors'

const Qualify: React.FC = () => {
  const { heading, description, image }: any = useAppData('hero', true)
  const classes = useStyles({ background: image?.src })()
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <div className={classes.mainContent}>
            {!heading?.value && (
              <Typography
                tagType="h3"
                styleType="h3"
                fontType="regularFont"
                color="secondary"
                className={classes.heading}
              >
                {heading?.value || 'You may qualify for $0 internet'}
              </Typography>
            )}
            {!description?.value && (
              <Typography
                tagType="p"
                styleType="p2"
                color="tertiary"
                fontType="regularFont"
                className={classes.text}
              >
                {description?.value ||
                  'We are proud to participate in the Federal Affordable Connectivity Program. Because everyone deserves fast, low-cost internet.'}
              </Typography>
            )}
          </div>
          <Button
            // variant="primary"
            // className={classes.button}
            text={'1.855.597.3174'}
            type="link"
            href={'/'}
            // onClick={onButtonClick}
            hoverVariant="secondary"
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
      minHeight: '20rem',
      [breakpoints.down('sm')]: {
        minHeight: '0',
        paddingBottom: '7vw',
        backgroundPosition: 'calc(100%) 100%',
        backgroundSize: '105vw',
        backgroundPositionX: 60,
      },
      [breakpoints.down('xs')]: {
        backgroundSize: '84vw',
        backgroundPositionX: 30,
        paddingBottom: '7vw',
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
      lineHeight: '50px',
      maxWidth: '30rem',
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
    text: {
      fontSize: '18px',
      lineHeight: '26px',
    },
  }))

export default Qualify
