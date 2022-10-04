import { COMPONENT_WRAPPER } from 'src/constants'
import { makeStyles } from '@material-ui/core/styles'

const ComponentWrapper: React.FC<{ children: any }> = ({ children }) => {
  const classes = useStyles()
  return <div className={classes.root}>{children}</div>
}

export const LeftWrapper: React.FC<{ children: any }> = ({ children }) => {
  const classes = useStyles()
  return <div className={classes.leftWrapper}>{children}</div>
}

export const RightWrapper: React.FC<{ children: any }> = ({ children }) => {
  const classes = useStyles()
  return <div className={classes.rightWrapper}>{children}</div>
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    ...COMPONENT_WRAPPER,
    margin: '0rem auto',
    paddingTop: 80,
    justifyContent: 'space-between',
    [breakpoints.down('sm')]: {
      padding: '0 1rem',
    },
    [breakpoints.up('md')]: {
      display: 'flex',
      gap: 32,
      leftWrapper: {
        width: 'calc(70% - 32px)',
      },
      rightWrapper: {
        width: 'calc(30% - 32px)',
      },
    },
  },
  leftWrapper: {
    [breakpoints.down('md')]: {
      width: '100%',
    },
  },
  rightWrapper: {
    top: 70,
    height: '0%',
    padding: '1rem',
    position: 'sticky',
    width: '100%',
    maxWidth: 375,
    [breakpoints.down('md')]: {
      display: 'none',
    },
  },
}))

export default ComponentWrapper
