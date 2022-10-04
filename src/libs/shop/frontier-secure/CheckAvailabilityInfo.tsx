import { Typography, Button, InjectHTML } from 'src/blitz'
import { makeStyles } from '@material-ui/core/styles'
import { Location } from 'src/blitz/assets/react-icons'
import colors from 'src/styles/theme/colors'
import { useAppData } from 'src/hooks'
import { useWindowDimensions } from 'src/hooks'

const midDevice = 1024

const CheckAvailabilityInfo = (): JSX.Element => {
  const { heading, buttonText, signIn, buttonURL } =
    useAppData('checkAvailabilityInfo', true) || {}
  const classes = useStyles()
  const { width } = useWindowDimensions()

  const domain = window?.location?.origin || ''

  return (
    <div className={`${classes.root}`}>
      <div className={classes.container}>
        <div className={classes.contentMainWrapper}>
          {width >= midDevice && (
            <div className={classes.locationWrapper}>
              <Location />
              <Typography
                tagType="p"
                styleType="p1"
                fontType="boldFont"
                className={classes.description}
              >
                {heading?.value}
              </Typography>
            </div>
          )}

          <div>
            <Button
              variant="primary"
              className={classes.button}
              text={buttonText?.value}
              type="link"
              href={`${domain}${buttonURL?.url}`}
            />
          </div>
          <div>
            <a href={`${domain}${signIn?.url}`} className={classes.link}>
              <InjectHTML
                tagType="p"
                styleType="p1"
                fontType="boldFont"
                className={classes.description}
                value={signIn?.text}
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
    backgroundColor: colors?.main?.white,
    width: '100%',
  },
  contentMainWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    ['@media screen and (max-width: 1023px)']: {
      justifyContent: 'center',
      display: 'block',
      textAlign: 'center',
    },
  },
  container: {
    maxWidth: 1200,
    margin: 'auto',
    padding: `36px 64px`,
    [theme.breakpoints.down('sm')]: {
      backgroundColor: colors?.main?.lightGray,
      boxShadow: '0px -7px 14px rgba(0, 0, 0, 0.1)',
      border: `1px solid ${colors.main.grey}`,
      margin: '0px',
      padding: `14px 15px 20px`,
    },
  },
  description: {
    display: 'inline-block',
    fontSize: theme.typography.pxToRem(16),
    margin: 0,
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
      margin: 'auto auto 14px',
    },
  },
  locationWrapper: {
    '& svg': {
      minWidth: 30,
      minHeight: 30,
      fontSize: 30,
      color: colors.main.brightRed,
      display: 'inline-block',
      verticalAlign: 'middle',
      position: 'relative',
      marginRight: 6,
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
}))
export default CheckAvailabilityInfo
