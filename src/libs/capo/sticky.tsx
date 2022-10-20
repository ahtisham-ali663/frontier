import { makeStyles } from '@material-ui/core/styles'
import { Button } from 'src/blitz'
// import { useAppData } from 'src/hooks'
// import { COMPONENT_WRAPPER, PADDING } from 'src/constants'
import colors from 'src/styles/theme/colors'

const Sticky: React.FC = () => {
  //const { heading, description, image }: any = useAppData('hero', true)
  const Residential = {
    value: 'Residential: 1.800.921.8101',
  }
  const Business = {
    value: 'Business: 1.800.921.8102',
  }
  //useStyles({ background: image?.src })
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
  makeStyles(({ breakpoints }) => ({
    root: {
      backgroundColor: colors.main.midnightExpress,
      backgroundRepeat: 'no-repeat',
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
      zindex: '0.4px',
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
    },
  }))

export default Sticky
