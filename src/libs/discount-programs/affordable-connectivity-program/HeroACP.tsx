import { makeStyles } from '@material-ui/core/styles'
import { InjectHTML, Typography } from 'src/blitz'
import { useAppData } from 'src/hooks'
import { COMPONENT_WRAPPER, PADDING } from 'src/constants'
import colors from 'src/styles/theme/colors'

const HeroACP: React.FC = () => {
  const {
    initialTitle,
    heading,
    priceDescription,
    priceAndFrequency,
    legalDisclaimer,
    image,
  }: any = useAppData('HeroACP', true)
  const classes = useStyles({ background: image?.src })()
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <div className={classes.mainContent}>
            {initialTitle?.value && (
              <Typography tagType="h6" styleType="h6">
                {initialTitle?.value}
              </Typography>
            )}
            {heading?.value && (
              <InjectHTML
                tagType="h1"
                styleType="h1"
                className={classes.heading}
                value={heading?.value}
                fontType="boldFont"
              />
            )}
            {priceDescription?.value && (
              <Typography tagType="p" styleType="h6">
                {priceDescription?.value}
              </Typography>
            )}
            {priceAndFrequency?.value && (
              <InjectHTML
                tagType="p"
                styleType="h1"
                fontType="boldFont"
                className={classes.priceAndFrequency}
                value={priceAndFrequency?.value}
              />
            )}
            {legalDisclaimer && (
              <InjectHTML
                styleType="p4"
                className={classes.legalDisclaimer}
                value={legalDisclaimer?.value}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const useStyles = ({ background }: any) =>
  makeStyles(({ breakpoints }) => ({
    root: {
      backgroundColor: colors.main.greenishBlue,
    },
    priceAndFrequency: {
      '& sub': {
        fontSize: '18px',
        position: 'relative',
        bottom: '16px',
        right: '20px',
        textTransform: 'none',
        [breakpoints.down('md')]: {
          bottom: '8px',
          right: '8px',
        },
      },
    },
    wrapper: {
      ...COMPONENT_WRAPPER,
      margin: 'auto',
      padding: `7rem ${PADDING}px`,
      [breakpoints.down('md')]: {
        padding: `3rem 1rem 18.75rem 1rem`,
      },
      [breakpoints.down('xs')]: {
        padding: `1.5rem 1rem 18.75rem 1rem`,
      },
      background: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
      backgroundPositionX: 'calc(100% + 100px)',
      [breakpoints.down('md')]: {
        paddingBottom: '300px',
        backgroundPosition: 'bottom center',
        backgroundSize: '400px',
        backgroundPositionX: 'center',
      },
    },
    heading: {
      margin: '1rem 0',
      textTransform: 'none',
      [breakpoints.down('sm')]: {
        margin: '0.5rem 0',
      },
    },
    content: {
      [breakpoints.down('md')]: {
        margin: '1.75rem 0',
      },
    },
    legalDisclaimer: {
      [breakpoints.down('sm')]: {
        fontSize: '.75rem',
        lineHeight: '1rem',
      },
      '& sup': { lineHeight: '0' },
    },
    mainContent: {
      position: 'relative',
      marginBottom: '2rem',
    },
  }))

export default HeroACP
