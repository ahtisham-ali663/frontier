import { makeStyles } from '@material-ui/core'
import { CtaBanner } from 'src/blitz'
import colors from 'src/styles/theme/colors'

const CheckAvailability = ({ data }: any) => {
  const { text, heading, buttonURL }: any = data
  const classes = useStyles()
  const domain =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : ''
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <CtaBanner
          text={text?.value}
          heading={heading?.value}
          buttonURL={buttonURL?.url}
          hoverVariant="secondary"
          domain={domain}
        />
      </div>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  root: {
    background: colors.main.dark,
    padding: '3.25rem 1rem',
  },
  wrapper: {
    margin: '0 auto',
    maxWidth: '1100px',
  },
}))

export default CheckAvailability
