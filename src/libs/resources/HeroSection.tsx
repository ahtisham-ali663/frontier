import { Hero } from 'src/blitz'
import { makeStyles } from '@material-ui/core'
import colors from 'src/styles/theme/colors'
import useWindowDimensions from 'src/hooks/useWindowDimensions'

const HeroSection: React.FC = ({ data }: any) => {
  const classes = useStyles()
  const { width } = useWindowDimensions()

  const { title, backgroundImage, subTitle, backgroundMobileImage }: any = data
  if (!title?.value) {
    return null
  }
  const isMobile = width <= 768
  const splitTitle = title?.value?.split(' ')
  const firstTitle = splitTitle.splice(0, isMobile ? 2 : 1).join(' ')
  const secondTitle = splitTitle.join(' ')

  return (
    <div className={classes.root}>
      <Hero
        title1={firstTitle}
        title2={secondTitle}
        subHeader={subTitle.value}
        backgroundImage={backgroundImage?.src}
        mobileBackgroundImage={backgroundMobileImage?.src}
      />
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.down('md')]: {
      marginTop: 0,
    },
    '& h1 div, p': {
      color: colors.main.dark,
    },
    [breakpoints.up('md')]: {
      '& p': {
        width: '50%',
      },
    },
  },
}))

export default HeroSection
