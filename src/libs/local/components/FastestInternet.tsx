import { makeStyles } from '@material-ui/core'
import { ServiceDescriptionTwoColumnLayout } from 'src/blitz'
const FastestInternet = ({ data }: any) => {
  const classes = useStyles()
  return (
    <div data-testid="fastest-internet" className={classes.root}>
      {!data?.hide?.value && <ServiceDescriptionTwoColumnLayout {...data} />}
    </div>
  )
}

const useStyles = makeStyles(() => ({
  root: {
    '& .mob-center div': {
      justifyContent: 'flex-start',
    },
  },
}))

export default FastestInternet
