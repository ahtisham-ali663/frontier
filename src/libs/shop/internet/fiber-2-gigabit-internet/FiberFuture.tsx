import { useRef } from 'react'
import { makeStyles, Grid, Zoom } from '@material-ui/core'
import { InjectHTML, Picture } from 'src/blitz'
import colors from 'src/styles/theme/colors'
import { useAppData } from 'src/hooks'
import useIntersection from 'src/hooks/useIntersection'
import { COMPONENT_WRAPPER } from 'src/constants'

interface FiberFutureCardProps {
  data: any
}

const FiberFuture = () => {
  const { list } = useAppData('postsList', true) || {}
  return (
    <div>
      {(list?.cards || []).map((data: any, index: number) => (
        <FiberFutureCard key={index} data={data} />
      ))}
    </div>
  )
}

const FiberFutureCard = (props: FiberFutureCardProps) => {
  const { data } = props
  const classes = useStyles()
  const direction = data?.direction?.item?.value?.value
  const cardRef = useRef<HTMLDivElement>(null)
  const inViewPort = useIntersection(cardRef, '-100px')
  return (
    <div className={classes.root} ref={cardRef}>
      <Grid container className={classes.outerContainer} direction={direction}>
        <Grid item md={6} sm={12} className="figure">
          <Zoom in={inViewPort} timeout={500}>
            <Picture
              testId="cardImage"
              desktop={{
                image: data?.image?.src,
                webp: data?.imagewebp?.src,
              }}
              altText={data?.image?.alt}
              width="100%"
              height="100%"
            />
          </Zoom>
        </Grid>
        <Grid item md={6} sm={12}>
          <div className={classes.innerContainer}>
            <InjectHTML
              className={classes.title}
              tagType="h3"
              styleType="h4"
              value={data?.title?.value}
            />
            <InjectHTML
              className={classes.description}
              tagType="p"
              styleType="p1"
              value={data?.description?.value}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    ...COMPONENT_WRAPPER,
    margin: '10px auto 40px',
  },
  outerContainer: {
    backgroundColor: colors.main.lightGray,
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  innerContainer: {
    padding: '30px 10px 20px',
    maxWidth: 475,
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90%',
    },
  },
  description: {
    maxWidth: '80%',
    marginBottom: 10,
    [theme.breakpoints.down('sm')]: {
      maxWidth: '95%',
    },
  },
  title: {
    marginBottom: theme.typography.pxToRem(20),
    maxWidth: '80%',
  },
  imageAnimationLeft: {
    animation: `$fadeInLeft 500ms ${theme.transitions.easing.easeInOut}`,
  },
  imageAnimationRight: {
    animation: `$fadeInRight 500ms ${theme.transitions.easing.easeInOut}`,
  },
  '@keyframes fadeInLeft': {
    from: {
      opacity: 0,
      transform: 'translate3d(-100%, 0, 0)',
    },
    to: {
      opacity: 1,
      transform: 'none',
    },
  },
  '@keyframes fadeInRight': {
    from: {
      opacity: 0,
      transform: 'translate3d(100%, 0, 0)',
    },
    to: {
      opacity: 1,
      transform: 'none',
    },
  },
}))

export default FiberFuture
