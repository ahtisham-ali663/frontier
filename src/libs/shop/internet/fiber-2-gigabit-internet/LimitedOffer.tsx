import { useRef } from 'react'
import { Zoom, makeStyles } from '@material-ui/core'
import { Typography, Button } from 'src/blitz'
import colors from 'src/styles/theme/colors'
import { useAppData } from 'src/hooks'
import useIntersection from 'src/hooks/useIntersection'

const LimitedOffer = () => {
  const classes = useStyles()
  const { heading, subHeading, cards, buttonHref, buttonText } = useAppData(
    'offerCards',
    true,
  )

  const cardRef = useRef<HTMLDivElement>(null)
  const inViewPort = useIntersection(cardRef, '-100px')
  const origin = window?.location?.origin || ''
  const onButtonClick = () => {
    //@ts-ignore
    s_objectID = LIMITED_OFFER.replace('{NAME}', buttonText?.value)
  }
  return (
    <div id="limited-section" className={classes.root}>
      <div className={classes.container}>
        <Typography
          className={classes.heading}
          tagType="h2"
          testId="heading"
          styleType="h4"
          color="secondary"
        >
          {heading?.value || ''}
        </Typography>
        <Typography
          className={classes.subheading}
          tagType="p"
          testId="subHeading"
          styleType="p1"
          color="tertiary"
        >
          {subHeading?.value || ''}
        </Typography>
        <div className={classes.cardContainer} ref={cardRef}>
          {(cards?.targetItems || []).map((cardData: any, index: number) => {
            return (
              <Zoom in={inViewPort} timeout={500} key={index}>
                <div className={classes.card} data-testid="card">
                  <img
                    data-testid="cardImage"
                    src={cardData?.cardImage.src || ''}
                    alt={cardData?.cardImage.alt || ''}
                  />
                  <Typography
                    testId="cardTitle"
                    className={classes.cardText}
                    tagType="p"
                    styleType="p1"
                    fontType="boldFont"
                  >
                    {cardData?.cardTitle.value || ''}
                  </Typography>
                </div>
              </Zoom>
            )
          })}
        </div>
        <div className={classes.buttonContainer}>
          <Button
            data-testid="link"
            className={classes.getHookedUpButon}
            href={`${origin}${buttonHref?.url || '#'}`}
            type="link"
            text={buttonText?.value || ''}
            variant="primary"
            hoverVariant="secondary"
            onClick={onButtonClick}
          />
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    backgroundColor: colors.main.midnightExpress,
    padding: '50px 10px 30px',
    overflow: 'hidden',
    margin: 0,
  },
  container: {
    position: 'relative',
    maxWidth: '1140px',
    margin: 'auto',
  },
  heading: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  subheading: {
    textAlign: 'center',
    [breakpoints.down('xs')]: {
      fontSize: 16,
    },
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'stretch',
    maxWidth: '800px',
    margin: '40px auto 30px',
    display: 'flex',
    [breakpoints.down('sm')]: {
      display: 'block',
      maxWidth: '450px',
    },
  },
  card: {
    backgroundColor: colors.main.white,
    padding: '20px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: '4px',
    margin: '10px',
    flex: '0 1 48%',
    [breakpoints.down('xs')]: {
      margin: '10px auto',
      '& img': {
        maxWidth: '40%',
      },
    },
  },
  cardText: {
    padding: '10px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px auto',
  },
  getHookedUpButon: {
    transition: '.3s all',
    marginTop: 30,
    textTransform: 'uppercase',
    minWidth: 240,
    width: 'auto',
    '&:hover': {
      backgroundColor: colors.main.white,
      color: colors.main.dark,
    },
  },
}))

export default LimitedOffer
