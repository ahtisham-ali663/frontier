import { useRef } from 'react'
import { makeStyles, Grid, Zoom } from '@material-ui/core'
import { Button, InjectHTML, Picture, Typography } from 'src/blitz'
import colors from 'src/styles/theme/colors'
import useIntersection from 'src/hooks/useIntersection'
import { COMPONENT_WRAPPER } from 'src/constants'
import { useAppData } from 'src/hooks'

interface SportsFanFavoritesCardProps {
  data: any
  slide: number
}
const SportsFanFavorites = () => {
  const {
    title,
    list: { targetItems = [] },
  } = useAppData('SportsFanFavorites', true)
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography tagType="h2" styleType="h3">
          {title?.value}
        </Typography>
        {targetItems?.map((data: any, index: number) => (
          <SportsFanFavoritesCard key={index} data={data} slide={index} />
        ))}
      </div>
    </div>
  )
}

const SportsFanFavoritesCard = (props: SportsFanFavoritesCardProps) => {
  const { data, slide } = props
  const classes = useStyles()
  const direction = data?.direction?.direction?.field?.value

  const cardRef = useRef<HTMLDivElement>(null)
  const inViewPort = useIntersection(cardRef, '-100px')
  return (
    <div
      className={`${classes.cards} ${slide == 2 && classes.noGutter}`}
      ref={cardRef}
    >
      <Grid container className={classes.outerContainer} direction={direction}>
        <Grid item md={7} sm={12} className="figure">
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
        <Grid item md={5} sm={12}>
          <div className={classes.innerContainer}>
            <InjectHTML
              className={classes.title}
              tagType="h3"
              styleType="h5"
              value={data?.title?.value}
            />
            <Typography
              className={classes.description}
              tagType="p"
              styleType="p1"
            >
              {data?.content?.value}
            </Typography>

            <Button
              type="link"
              className={classes.buttonStle}
              text={data?.primaryButtonText?.value}
              href={data?.primaryButtonLink?.url}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: colors.main.greenishBlue,
  },
  container: {
    ...COMPONENT_WRAPPER,
    padding: '80px 16px',
    [theme.breakpoints.down('sm')]: {
      padding: '48px 16px',
    },
  },
  cards: {
    marginTop: theme.typography.pxToRem(32),
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
  noGutter: {
    marginBottom: 0,
  },
  outerContainer: {
    backgroundColor: colors.main.white,
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  innerContainer: {
    padding: '48px',
    margin: 'auto',
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
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.pxToRem(16),
    },
  },
  title: {
    marginBottom: theme.typography.pxToRem(16),
    maxWidth: '100%',
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.pxToRem(18),
      lineHeight: theme.typography.pxToRem(26),
    },
  },
}))

export default SportsFanFavorites
