// import { Button, ImagePerk, Typography } from 'src/blitz'
import { makeStyles } from '@material-ui/core'
// import { useAppData } from 'src/hooks'
import { COMPONENT_WRAPPER } from 'src/constants'

const HeroSection = () => {
  // const { title, description, contactNumber } =
  //   {
  //     title: { value: 'We need more info to verify service at your address' },
  //     description: {
  //       value:
  //         'Frontier internet services may be available at your address, but we need additional details to verify. Please chat with us or call the number below for assistance.',
  //     },
  //     contactNumber: { value: '1.844.342.7501' },
  //   } || useAppData('HeroSection', true)
  const classes = useStyles()

  return (
    <div id="hero-acp-lp" className={classes.wrapper}>
      test
    </div>
  )
}

export default HeroSection

const useStyles = makeStyles(({}) => ({
  wrapper: { ...COMPONENT_WRAPPER },
}))
