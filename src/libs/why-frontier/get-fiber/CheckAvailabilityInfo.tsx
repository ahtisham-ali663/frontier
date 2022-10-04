import { useRef, useEffect, useState } from 'react'
import { Typography, Button, InjectHTML } from 'src/blitz'
import { makeStyles } from '@material-ui/core/styles'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import colors from 'src/styles/theme/colors'
import useWindowDimensions from 'src/hooks/useWindowDimensions'
import { CHECK_AVAILABLITY_COMP } from 'src/constants'
import { useAppData } from 'src/hooks'

const midDevice = 1024
const CheckAvailabilityInfo = (): JSX.Element => {
  const checkAvailabilityInfo = useAppData('CheckAvailabilityInfo', true) || {}
  const classes = useStyles()
  const [fixedForm, setFixedForm] = useState(false)
  const { width } = useWindowDimensions()
  const node = useRef<HTMLDivElement>(null)
  let isListenerAdded = false
  let offsetTop = 0
  const handleScroll = () => {
    if (document) {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop
      const elementOffsetTop = offsetTop || node?.current?.offsetTop || 0
      if (elementOffsetTop !== offsetTop) {
        offsetTop = elementOffsetTop
      }
      const shouldBeFixed = winScroll > offsetTop - 65
      if (shouldBeFixed !== fixedForm) {
        setFixedForm(shouldBeFixed)
      }
    }
  }

  useEffect(() => {
    if (checkAvailabilityInfo && !isListenerAdded) {
      isListenerAdded = true
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [checkAvailabilityInfo, fixedForm])

  const domain = window?.location?.origin || ''

  const onButtonClick = () => {
    //@ts-ignore
    s_objectID = CHECK_AVAILABLITY_COMP.replace(
      '{NAME}',
      checkAvailabilityInfo?.buttonText?.value,
    )
  }

  let wrapperClassName = width < midDevice ? classes.mobFixedWrapper : null
  if (!wrapperClassName) {
    wrapperClassName = fixedForm ? classes.fixedWrapper : ''
  }
  return (
    <div
      className={`${classes.root} ${wrapperClassName}`}
      ref={node}
      id="check-availability"
    >
      <div className={classes.container}>
        <div className={classes.contentMainWrapper}>
          {width >= midDevice && (
            <div className={classes.locationWrapper}>
              <LocationOnIcon className={classes.icon} />
              <Typography
                tagType="p"
                styleType="p1"
                fontType="boldFont"
                className={classes.description}
              >
                {checkAvailabilityInfo?.buttonTitle?.value}
              </Typography>
            </div>
          )}

          <div>
            <Button
              variant="primary"
              className={classes.button}
              text={checkAvailabilityInfo?.buttonText?.value}
              type="link"
              href={`${domain}${checkAvailabilityInfo?.buttonURL?.value}`}
              onClick={onButtonClick}
            />
          </div>
          <div>
            <a
              href={`${domain}${checkAvailabilityInfo?.signIn?.url}`}
              className={classes.link}
            >
              <InjectHTML
                tagType="p"
                styleType="p1"
                fontType="boldFont"
                className={classes.description}
                value={checkAvailabilityInfo?.signIn?.text}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    maxWidth: 1200,
    position: 'relative',
    margin: '-90px auto 0px auto',
    transition: 'all 0.2s',
    zIndex: 2,
    [theme.breakpoints.down('md')]: {
      padding: 0,
      width: '100vw !important',
      margin: '0 auto 20px',
    },
  },
  fixedWrapper: {
    marginTop: 0,
    position: 'sticky',
    top: 55,
    zIndex: 10,
    background: colors.main.white,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      top: 45,
    },
  },
  mobFixedWrapper: {
    position: 'fixed',
    top: 'auto',
    width: '100%',
    bottom: '-20px',
    marginTop: 0,
    left: 0,
    right: 0,
    zIndex: 5,
  },
  icon: {
    minWidth: 30,
    minHeight: 30,
    fontSize: 30,
    color: colors.main.brightRed,
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  contentMainWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      textAlign: 'center',
    },
  },
  container: {
    padding: '9px 13px',
    margin: '0px',
    boxShadow: '0px 4px 14px rgb(0 0 0 / 25%)',
    backgroundColor: colors?.main?.white,
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: colors?.main?.lightGray,
      boxShadow: '0px -7px 14px rgba(0, 0, 0, 0.1)',
      border: `1px solid ${colors.main.grey}`,
      margin: '0px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '10px',
      paddingBottom: 0,
    },
  },
  description: {
    display: 'inline-block',
    padding: 5,
    fontSize: '1.125rem',
    ['@media screen and (max-width: 1096px) and (min-width: 1023px)']: {
      fontSize: theme.typography.pxToRem(16),
    },
  },
  button: {
    padding: '0.875rem 1.6625rem',
    border: 'none',
    fontSize: '.875rem',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      width: '100%',
      fontSize: '.875rem',
      padding: '1rem 2rem 1rem 2rem',
      margin: 'auto auto 5px',
    },
  },
  link: {
    fontSize: theme.typography.pxToRem(14),
    '&:hover': {
      color: colors.main.brightRed,
    },
    '& $description': {
      textDecoration: 'underline',
      '&:hover': {
        color: colors.main.brightRed,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
        marginTop: '5px',
      },
    },
  },
  locationWrapper: {},
}))
export default CheckAvailabilityInfo
