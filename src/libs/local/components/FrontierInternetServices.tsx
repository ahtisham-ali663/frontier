import { makeStyles } from '@material-ui/core'
import { TwoColumnGridLayout } from 'src/blitz'
import colors from 'src/styles/theme/colors'

const FrontierInternetServices = ({ data }: any) => {
  const classes = useStyles()
  const { leftContent, rightContent }: any = data || {}

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <TwoColumnGridLayout
          leftContent={leftContent?.value}
          rightContent={rightContent?.value}
          rightContentClassName={classes.rightContent}
        />
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    background: colors.main.white,
  },
  wrapper: {
    boxSizing: 'content-box',
    maxWidth: 1200,
    margin: '0 auto',
    padding: '3.25rem 1rem',
    [theme.breakpoints.up('md')]: {
      padding: '7.625rem 4rem 5rem',
    },
  },
  rightContent: {
    [theme.breakpoints.up('md')]: {
      paddingRight: '4.5625rem',
    },
    '& p': { margin: 0 },
    '& sup': {
      lineHeight: '0',
    },
  },
}))

export default FrontierInternetServices
