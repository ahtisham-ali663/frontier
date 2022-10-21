import { makeStyles } from '@material-ui/core/styles'
import { Button } from 'src/blitz'
import colors from 'src/styles/theme/colors'

const Sticky: React.FC = () => {
  const Residential = {
    value: 'Residential: 1.800.921.8101',
  }
  const Business = {
    value: 'Business: 1.800.921.8102',
  }

  const classes = useStyles()()
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {Residential?.value && (
          <Button
            variant="lite"
            hoverVariant={'primary'}
            type="link"
            className={classes.btn}
            href={'#'}
            text={Residential?.value}
          />
        )}
        {Business?.value && (
          <Button
            variant="lite"
            hoverVariant={'primary'}
            type="link"
            className={classes.btn}
            href={'#'}
            text={Business?.value}
          />
        )}
      </div>
    </div>
  )
}

const useStyles = () =>
  makeStyles(({}) => ({
    root: {
      backgroundColor: colors.main.midnightExpress,
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
    },
    btn: {
      fontSize: '30px',
      color: 'white',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    content: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItem: 'center',
      padding: '2.5rem 0',
      ['@media screen and (max-width: 770px)']: {
        display: 'none',
      },
    },
  }))

export default Sticky
