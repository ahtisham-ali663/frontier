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

  const classes = useStyles({
    background: image?.src,
  })()
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
            buttonName={plansButton?.text}
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
            btnClassName={classes.buttontext}
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
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50vw',
      backgroundSize: '58vw',
      minHeight: '36.5rem',
      [breakpoints.down('sm')]: {
        minHeight: '0',
        paddingBottom: '63vw',
        backgroundPosition: 'calc(100%) 100%',
        backgroundSize: '98vw',
        backgroundPositionX: 60,
      },
      [breakpoints.down('xs')]: {
        backgroundSize: '98vw',
        backgroundPositionX: 0,
        paddingBottom: '70vw',
        backgroundRepeat: 'no-repeat',
      },
      ['@media screen and (min-width: 1441px)']: {
        backgroundSize: 699,
        backgroundPositionY: 77,
      },
    },
    wrapper: {
      ...COMPONENT_WRAPPER,
      maxWidth: '1257px',
      margin: 'auto',
      padding: `6rem ${PADDING}px`,
      [breakpoints.down('md')]: {
        padding: `3rem ${PADDING}px`,
      },
      [breakpoints.down('xs')]: {
        padding: `1.5rem ${PADDING}px`,
      },
    },
    buttontext: {
      [breakpoints.down('xs')]: {
        padding: '0.6rem 6.4rem',
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
      width: '100%',
      height: '100%',
      right: 'calc(100% + 4rem)',
      top: '.5rem',
    },
    stripe: {
      backgroundColor: colors.main.greenishBlue,
      height: '2.9375rem',
      '&:nth-of-type(2)': {
        margin: '1.625rem 0',
      },
    },
  }))

export default Hero
