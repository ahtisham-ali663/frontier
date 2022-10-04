import { Typography } from 'src/blitz'
import { makeStyles } from '@material-ui/core/styles'
import ErrorIcon from '@material-ui/icons/Error'
import { useAppData } from 'src/hooks'

const Banner = (): JSX.Element => {
  const classes = useStyles()
  const { banner } = useAppData('Banner', true) || {}

  return (
    <div className={`${classes.root} frontierRow`}>
      <div className={classes.container}>
        <ErrorIcon className={classes.icon} />
        <Typography styleType="p2" className={classes.description}>
          {banner?.value}
        </Typography>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.secondary.main,
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      marginTop: 16,
    },
    [theme.breakpoints.down('md')]: {
      marginTop: 32,
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      padding: 0,
      width: '100vw !important',
    },
  },
  icon: {
    minWidth: 36,
    minHeight: 36,
    borderRadius: '100%',
    marginRight: 24,
    fontSize: 20,
  },
  container: {
    borderRadius: 3,
    display: 'flex',
    alignItems: 'center',
    padding: '24px 40px',
    backgroundColor: '#e4ffe4',
    margin: '0px 12px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      margin: '0px',
    },
  },
  description: {
    fontWeight: 700,
  },
}))

export default Banner
