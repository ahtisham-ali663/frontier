import { makeStyles } from '@material-ui/styles'
import { Typography } from 'src/blitz'
import { COMPONENT_WRAPPER } from 'src/constants'
import { useAppData } from 'src/hooks'
import colors from 'src/styles/theme/colors'

const Hero = () => {
  const styles = useStyles()
  const { heroData: [heroData] = [] } = useAppData('heroData', true)

  return (
    <div className={styles.root}>
      <div className={styles.innerWrapper}>
        <div className={styles.contentWrapper}>
          <Typography
            color="tertiary"
            tagType="p"
            styleType="p2"
            className={styles.preTitle}
          >
            {heroData?.subTitle?.value}
          </Typography>
          <Typography
            styleType="h2"
            tagType="h1"
            color="secondary"
            className={styles.title}
          >
            {heroData?.title?.value}
          </Typography>
          <Typography color="tertiary" tagType="h6" styleType="h6">
            {heroData?.description?.value}
          </Typography>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  root: {
    background: colors.main.dark,
  },
  innerWrapper: {
    ...COMPONENT_WRAPPER,
    padding: '10rem 1rem',
  },
  contentWrapper: {
    maxWidth: 800,
  },
  title: {
    marginBottom: 16,
  },
  preTitle: {
    textTransform: 'uppercase',
    fontWeight: 700,
  },
}))

export default Hero
