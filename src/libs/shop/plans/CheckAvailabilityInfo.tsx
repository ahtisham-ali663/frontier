import { useRef, useEffect } from 'react'
import { Typography, Button } from 'src/blitz'
import { makeStyles } from '@material-ui/core/styles'
import colors from 'src/styles/theme/colors'
import { useAppData } from 'src/hooks'
import { CHECK_AVAILABLITY_COMP } from 'src/constants'
import { TextField } from '@material-ui/core'

const CheckAvailabilityInfo = (): JSX.Element => {
  const checkAvailabilityInfo = useAppData('CheckAvailButton', true) || {}
  console.log(checkAvailabilityInfo, 'checkAvailabilityInfo lib')
  const classes = useStyles()
  // const [fixedForm, setFixedForm] = useState(false)

  const node = useRef<HTMLDivElement>(null)

  let isListenerAdded = false

  const handleScroll = () => {
    if (document) {
      // eslint-disable-next-line prettier/prettier
      // if (shouldBeFixed !== fixedForm) {
      //     setFixedForm(shouldBeFixed)
      // }
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
  }, [checkAvailabilityInfo])

  const onButtonClick = () => {
    //@ts-ignore
    s_objectID = CHECK_AVAILABLITY_COMP.replace(
      '{NAME}',
      checkAvailabilityInfo?.buttonText?.value,
    )
  }

  return (
    <div className={`${classes.root}`} ref={node} id="check-availability">
      <div className={classes.container}>
        <div className={classes.contentMainWrapper}>
          <div>
            <Typography
              tagType="p"
              styleType="p1"
              fontType="boldFont"
              className={classes.description}
            >
              {checkAvailabilityInfo?.buttonTitle?.value ||
                'Whats available with Frontier?'}
            </Typography>
          </div>

          <TextField
            className={classes.textField}
            placeholder="Enter your address to view plans."
            fullWidth
            variant="filled"
            // id="outlined-size-normal"
            // size="normal"

            //   InputProps={
            //     {
            //       classes: {
            //         root: clx(classes.inputRoot, {
            //           [classes.borderPrimary]: isError,
            //         }),
            //         focused: classes.inputFocused,
            //       },
            //       disableUnderline: true,
            //     } as Partial<OutlinedInputProps>
            //   }
            //   InputLabelProps={{
            //     classes: {
            //       root: classes.labelRoot,
            //       focused: classes.labelFocused,
            //     },
            //   }}
            //   {...otherProps}
          />

          <div>
            <Button
              // variant="primary"
              className={classes.button}
              text={
                checkAvailabilityInfo?.buttonText?.value || 'CHECK AVAILABILITY'
              }
              type="link"
              href={checkAvailabilityInfo?.buttonURL?.value}
              onClick={onButtonClick}
              hoverVariant="secondary"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    maxWidth: '100%',
    position: 'relative',
    transition: 'all 0.2s',
    zIndex: 2,
    [theme.breakpoints.down('md')]: {
      padding: 0,
      width: '100vw !important',
      margin: '0 auto',
    },
  },
  fixedWrapper: {
    marginTop: 0,
    position: 'fixed',
    bottom: 0,
    zIndex: 10,
    width: '100%',
    background: colors.main.newBackgroundGray,
    display: 'flex',
  },
  contentMainWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      maxWidth: '310px',
      margin: '0 auto',
      flexDirection: 'column',
    },
  },
  container: {
    padding: '31px 33px',
    margin: '0px',
    boxShadow: '0px -10px 10px rgba(0, 0, 0, 0.15)',
    backgroundColor: colors?.main?.newBackgroundGray,
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: colors?.main?.newBackgroundGray,
      boxShadow: '0px -7px 14px rgba(0, 0, 0, 0.1)',
      border: `1px solid ${colors.main.grey}`,
      margin: '0px',
      padding: '10px',
      paddingBottom: 0,
    },
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 32,
      paddingTop: 5,
    },
  },
  description: {
    display: 'inline-block',
    padding: '5px 20px 10px 0px',
    fontSize: '1.125rem',
    ['@media screen and (max-width: 1096px) and (min-width: 1023px)']: {
      fontSize: theme.typography.pxToRem(16),
    },
    [theme.breakpoints.down('sm')]: {
      visibility: 'hidden',
    },
    [theme.breakpoints.down('xs')]: {
      visibility: 'hidden',
    },
  },
  button: {
    border: '1px solid red',
    padding: '13.5px 38px',
    '&:hover': {
      border: '1px solid red !important',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '10.5px 30px',
    },
  },
  textField: {
    width: '40%',
    padding: '5px 20px 10px 0px',
    [theme.breakpoints.down('sm')]: {
      width: '50%',
      paddingRight: '20px',
      marginLeft: '-19rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '-45px',
      width: '100%',
      paddingBottom: '30px',
      marginLeft: '1rem',
    },
  },
}))
export default CheckAvailabilityInfo
