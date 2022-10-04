import { makeStyles } from '@material-ui/core'
import { Button, Typography } from 'src/blitz'
import { COMPONENT_WRAPPER } from 'src/constants'
import { useAppData } from 'src/hooks'
import colors from 'src/styles/theme/colors'

const Hero = () => {
  const classes = useStyles()
  const {
    deviceImg,
    logoImg,
    firstTitle,
    secondTitle,
    description,
    btnText,
    btnUrl,
  } = useAppData('hero', true)
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.content}>
          {firstTitle?.value && (
            <Typography tagType="h1" styleType="h1" color="tertiary">
              {firstTitle?.value}
            </Typography>
          )}
          {secondTitle?.value && (
            <Typography tagType="h1" styleType="h1" color="secondary">
              {secondTitle?.value}
            </Typography>
          )}
          {description?.value && (
            <Typography
              tagType="p"
              className={classes.description}
              styleType="h5"
              color="tertiary"
            >
              {description?.value}
            </Typography>
          )}
          <div className={classes.cta}>
            <Button
              type="link"
              hoverVariant="secondary"
              text={btnText?.value}
              href={btnUrl?.url}
            />
          </div>
        </div>
        <img
          src={deviceImg?.src}
          className={classes.device}
          alt={deviceImg?.alt}
        />
        <img src={logoImg?.src} className={classes.logo} alt={logoImg?.alt} />
      </div>
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  content: {
    height: '600px',
    maxWidth: '700px',
    backgroundColor: 'transparent',
    textAlign: 'left',
    padding: '8.75rem 0',
    [breakpoints.down('xs')]: {
      padding: '2rem 0',
      height: '570px',
    },
  },
  description: {
    marginTop: '2rem',
    [breakpoints.down('sm')]: {
      marginTop: '1rem',
    },
  },
  root: {
    backgroundColor: colors.main.dark,
    marginBottom: '48px',
    [breakpoints.down('sm')]: {
      marginBottom: '72px',
    },
  },
  container: {
    ...COMPONENT_WRAPPER,
    textAlign: 'center',
    position: 'relative',
  },
  device: {
    position: 'absolute',
    right: -100,
    bottom: -120,
    [breakpoints.down('sm')]: {
      transform: 'scale(0.59)',
      right: -300,
      bottom: -175,
    },
  },
  logo: {
    position: 'absolute',
    right: 0,
    transform: 'translateY(-50%)',
    top: '50%',
    [breakpoints.down('sm')]: {
      transform: 'scale(0.65)',
      right: 'unset',
      top: 'unset',
      left: 40,
      bottom: 80,
    },
  },
  cta: {
    display: 'block',
    textAlign: 'left',
    marginTop: '40px',
  },
}))

export default Hero
