import { useRef } from 'react'
import { makeStyles, Grid, Zoom } from '@material-ui/core'
import { InjectHTML, Picture } from 'src/blitz'
import colors from 'src/styles/theme/colors'
import useIntersection from 'src/hooks/useIntersection'
import { COMPONENT_WRAPPER } from 'src/constants'
import { useAppData } from 'src/hooks'

interface HowToOrderCardProps {
  data: any
}
const HowToOrder = () => {
  const howToOrder = useAppData('howToOrder', true)

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <HowToOrderCard data={howToOrder} />
      </div>
    </div>
  )
}

const HowToOrderCard = (props: HowToOrderCardProps) => {
  const { data } = props
  const classes = useStyles()

  const cardRef = useRef<HTMLDivElement>(null)
  const inViewPort = useIntersection(cardRef, '-100px')
  return (
    <div className={`${classes.cards}`} ref={cardRef}>
      <Grid container className={classes.outerContainer}>
        <Grid item md={5} sm={12}>
          <div className={classes.innerContainer}>
            <InjectHTML
              className={classes.title}
              tagType="h3"
              styleType="h3"
              value={data?.title?.value}
            />
            <InjectHTML
              className={classes.description}
              tagType="p"
              styleType="p1"
              value={data?.content?.value}
            />
          </div>
        </Grid>
        <Grid item md={7} sm={12}>
          <Zoom in={inViewPort} timeout={500}>
            <Picture
              testId="cardImage"
              desktop={{
                image: data?.image?.src,
                webp: data?.imagewebp?.src,
              }}
              mobile={{
                image: data?.mobileImage?.src,
                webp: data?.mobileImageWeb?.src,
              }}
              altText={data?.image?.alt}
              width="100%"
              height="100%"
            />
          </Zoom>
        </Grid>
      </Grid>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: colors.main.white,
  },
  container: {
    ...COMPONENT_WRAPPER,
    padding: '80px 16px',
    [theme.breakpoints.down('sm')]: {
      padding: '48px 16px',
    },
  },
  cards: {
    [theme.breakpoints.down('md')]: {
      padding: '0',
    },
  },
  noGutter: {
    marginBottom: 0,
  },
  outerContainer: {
    backgroundColor: colors.main.grey,
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  innerContainer: {
    padding: '6rem 3rem',
    margin: 'auto',
    backgroundColor: colors.main.grey,
    [theme.breakpoints.down('sm')]: {
      padding: '28px 16px 40px',
    },
  },
  buttonStle: {
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  description: {
    margin: 0,
    marginBottom: theme.typography.pxToRem(40),
    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.pxToRem(16),
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.typography.pxToRem(32),
    },
  },
  title: {
    marginBottom: theme.typography.pxToRem(16),
    maxWidth: '100%',
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.pxToRem(24),
      lineHeight: theme.typography.pxToRem(26),
    },
  },
}))

export default HowToOrder
