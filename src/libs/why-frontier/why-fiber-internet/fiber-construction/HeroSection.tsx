import { useAppData } from 'src/hooks'
import { Hero } from 'src/blitz'
import { makeStyles } from '@material-ui/core'
import clx from 'classnames'
import colors from 'src/styles/theme/colors'

const HeroSection: React.FC = () => {
  const classes = useStyles()
  const { title, description, image, mobileImage } =
    useAppData('hero', true) || {}
  const [firstTitle = '', firstTitle2 = '', ...secondTitle] =
    title?.value.split(' ') || []
  return (
    <div className={clx(classes.root)}>
      <Hero
        title1={`${firstTitle} <br> ${firstTitle2}`}
        title2={secondTitle?.join(' ') || ''}
        subHeader={description?.value}
        backgroundImage={image?.src}
        mobileBackgroundImage={mobileImage?.src}
        className={clx('hero', classes.hero)}
        contentClassName={classes.content}
      />
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    position: 'relative',
    backgroundColor: colors.main.dark,
    [breakpoints.down('xs')]: {
      backgroundColor: colors.main.lightGray,
      minHeight: '530px',
    },
  },
  content: {
    [breakpoints.down('md')]: {
      paddingBottom: '70vh',
    },
    [breakpoints.down('sm')]: {
      paddingBottom: '50vh',
    },
    [breakpoints.down('xs')]: {
      paddingBottom: '30vh',
    },
  },
  hero: {
    [breakpoints.down('xs')]: {
      '& p': {
        fontSize: '1.125rem',
      },
      paddingBottom: '2rem',
      backgroundSize: 'contain',
    },
  },
}))

export default HeroSection
