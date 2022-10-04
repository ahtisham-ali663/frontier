import { useRef } from 'react'
import { makeStyles, Grid, Zoom } from '@material-ui/core'
import { InjectHTML, Picture, Typography } from 'src/blitz'
import colors from 'src/styles/theme/colors'
import useIntersection from 'src/hooks/useIntersection'
import { COMPONENT_WRAPPER } from 'src/constants'
import { useAppData } from 'src/hooks'
interface WhatToExpectCardProps {
  data: any
  slide: number
}

const WhatToExpect = () => {
  const {
    title,
    subTitle,
    list: { targetItems = [] },
  } = useAppData('whatToExpect', true)
  const classes = useStyles()
  return (
    <div>
      <div className={classes.titleWrapper}>
        <Typography
          tagType="h2"
          styleType="h3"
          className={classes.whatToExpectTitle}
        >
          {title?.value}
        </Typography>
        <Typography
          className={classes.whatToExpectDesc}
          tagType="p"
          styleType="p1"
        >
          {subTitle?.value}
        </Typography>
      </div>
      {targetItems.map((data: any, index: number) => (
        <WhatToExpectCard key={index} data={data} slide={index} />
      ))}
    </div>
  )
}

const WhatToExpectCard = (props: WhatToExpectCardProps) => {
  const { data, slide } = props
  const classes = useStyles()
  const direction = data?.direction?.value
  const cardRef = useRef<HTMLDivElement>(null)
  const inViewPort = useIntersection(cardRef, '-100px')
  return (
    <div
      className={`${classes.root} ${slide == 2 && classes.noGutter}`}
      ref={cardRef}
    >
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
              styleType="h3"
              color="tertiary"
              value={data?.title?.value}
            />
            {data?.perks?.targetItems?.map((item: any, index: number) => (
              <div key={index}>
                <Typography
                  className={classes.perkTitle}
                  tagType="h4"
                  styleType="h5"
                  color="secondary"
                >
                  {item?.heading?.value}
                </Typography>
                <Typography
                  className={classes.description}
                  tagType="p"
                  styleType="p1"
                  color="tertiary"
                >
                  {item?.description?.value}
                </Typography>
              </div>
            ))}
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
    [theme.breakpoints.down('md')]: {
      padding: '0',
    },
    '& .figure': {
      overflow: 'hidden',
      '& img': {
        display: 'block',
      },
    },
  },
  titleWrapper: {
    textAlign: 'center',
    maxWidth: 850,
    margin: 'auto',
    padding: '60px 0',
    [theme.breakpoints.down('md')]: {
      maxWidth: '95%',
      margin: '0 auto',
    },
  },
  noGutter: {
    marginBottom: 0,
  },
  whatToExpectTitle: {
    [theme.breakpoints.down('md')]: {
      fontSize: '2.625rem',
      lineHeight: '3.125rem',
    },
    marginBottom: theme.typography.pxToRem(16),
    [theme.breakpoints.down('md')]: {
      fontSize: '2.625rem',
      lineHeight: '50px',
    },
  },
  whatToExpectDesc: {
    textAlign: 'center',
  },
  outerContainer: {
    backgroundColor: colors.main.midnightExpress,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column-reverse',
    },
  },
  innerContainer: {
    padding: '64px 64px 128px',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90%',
      padding: '28px 0px 20px',
      minHeight: 445,
    },
  },
  description: {
    margin: 0,
    marginBottom: theme.typography.pxToRem(16),
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
    },
  },
  title: {
    marginBottom: theme.typography.pxToRem(16),
    maxWidth: '100%',
  },
  perkTitle: {
    marginBottom: theme.typography.pxToRem(16),
    maxWidth: '100%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.125rem',
    },
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

export default WhatToExpect
