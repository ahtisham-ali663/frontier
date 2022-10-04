import { useAppData } from 'src/hooks'
import { Grid } from '@material-ui/core'
import { InjectHTML } from 'src/blitz'
import { makeStyles } from '@material-ui/core/styles'
import colors from 'src/styles/theme/colors'
import { COMPONENT_WRAPPER } from 'src/constants'

const FrontierSecureInfo = () => {
  const classes = useStyles()
  const { title, description } = useAppData('frontierSecureInfo', true) || {}

  return (
    <div className={classes.root}>
      <Grid container className={classes.wrapper}>
        <Grid item sm={12} md={6}>
          {title?.value && (
            <InjectHTML
              data-testid="frontierSecureTitle"
              tagType="h3"
              styleType="h2"
              className={classes.title}
              value={title?.value}
            />
          )}
        </Grid>
        <Grid item sm={12} md={4}>
          {description?.value && (
            <InjectHTML
              tagType="p"
              styleType="p1"
              className={classes.description}
              value={description?.value}
            />
          )}
        </Grid>
      </Grid>
    </div>
  )
}
const useStyles = makeStyles({
  root: {
    background: colors.main.midnightExpress,
  },
  wrapper: {
    color: colors.main.white,
    ...COMPONENT_WRAPPER,
    padding: `56px 16px`,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    '& li': {
      fontSize: '1.125 rem',
    },
  },
  title: {
    color: colors.main.blue,
  },
  description: {
    color: colors.main.white,
    marginBottom: 5,
  },
})
export default FrontierSecureInfo
