import { makeStyles } from '@material-ui/core/styles'
import { ButtonWithChatLink, Typography } from 'src/blitz'
import { useAppData } from 'src/hooks'
import { COMPONENT_WRAPPER, PADDING } from 'src/constants'
import colors from 'src/styles/theme/colors'

const Hero: React.FC = () => {
  const {
    heading,
    description,
    image,
    plansButton,
    customerChat,
    customerChatLinkText,
  }: any = useAppData('hero', true)
  const classes = useStyles({ background: image?.src })()
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <div className={classes.mainContent}>
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
              <Typography
                tagType="p"
                styleType="h5"
                color="tertiary"
                fontType="regularFont"
              >
                {description?.value}
              </Typography>
            )}
            <div className={classes.stripes}>
              <div className={classes.stripe}></div>
              <div className={classes.stripe}></div>
              <div className={classes.stripe}></div>
            </div>
          </div>
          <ButtonWithChatLink
            buttonName={plansButton?.name}
            buttonTarget="_blank"
            hoverVariant="secondary"
            buttonLink={plansButton?.url}
            bgType="dark"
            labelLinkText={customerChatLinkText?.value}
            labelName={customerChat?.value}
            labelNameColor="white"
            labelLinkTextColor="white"
            labelStyleType="p1"
            labelTagType="p"
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
      minHeight: '43.5rem',
      [breakpoints.down('sm')]: {
        minHeight: '0',
        paddingBottom: '63vw',
        backgroundPosition: 'calc(100%) 100%',
        backgroundSize: '105vw',
        backgroundPositionX: 60,
      },
      [breakpoints.down('xs')]: {
        backgroundSize: '104vw',
        backgroundPositionX: 30,
        paddingBottom: '65vw',
      },
      ['@media screen and (min-width: 1441px)']: {
        backgroundSize: 720,
        backgroundPositionY: 107,
      },
    },
    wrapper: {
      ...COMPONENT_WRAPPER,
      margin: 'auto',
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
  }))

export default Hero
