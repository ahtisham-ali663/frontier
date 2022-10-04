import { Fade, Grid, makeStyles } from '@material-ui/core'
import { Typography, InjectHTML, Picture } from 'src/blitz'
import colors from 'src/styles/theme/colors'
import { useAppData } from 'src/hooks'
import React, { useRef } from 'react'
import useIntersection from 'src/hooks/useIntersection'
import { COMPONENT_WRAPPER } from 'src/constants'

const WhyFiber2Gig = () => {
  const classes = useStyles()
  const cardRef = useRef<HTMLDivElement>(null)
  const inViewPort = useIntersection(cardRef, '-250px')
  const {
    heading,
    subHeading,
    containerTitle,
    containerText,
    caption,
    cards,
    cardsTitle,
  } = useAppData('speedAdvantagesCards', true) || {}

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <hr className={classes.hrLine} />
        <InjectHTML
          className={classes.sectionheading}
          tagType="h2"
          data-testid="heading"
          styleType="h3"
          value={heading?.value}
        />
        <Typography
          className={classes.sectionSubheading}
          tagType="h3"
          data-testid="subheading"
          styleType="p1"
        >
          {subHeading?.value || ''}
        </Typography>
        <div className={classes.article}>
          <Grid
            spacing={2}
            container
            className={classes.articleContainer}
            justifyContent="space-between"
          >
            <Grid item lg={5} md={12} sm={12}>
              <div className={classes.leftContainer}>
                <Typography
                  className={classes.heading}
                  tagType="h2"
                  data-testid="containerTitle"
                  styleType="h4"
                >
                  {containerTitle?.value || ''}
                </Typography>
                <Typography
                  tagType="p"
                  className={classes.description}
                  data-testid="containerText"
                  styleType="p2"
                >
                  {containerText?.value || ''}
                </Typography>
              </div>
            </Grid>
            <Grid item lg={7} md={12} sm={12}>
              <Typography
                tagType="p"
                data-testid="goFiberText"
                styleType="p1"
                fontType="boldFont"
                className={classes.cardHeader}
              >
                {cardsTitle?.value || ''}
              </Typography>
              <Grid container spacing={1}>
                {(cards?.targetItems || []).map(
                  (cardData: any, index: number) => {
                    return (
                      <Grid
                        item
                        lg={4}
                        md={4}
                        sm={4}
                        xs={12}
                        ref={cardRef}
                        key={index}
                      >
                        <Fade in={inViewPort} timeout={{ enter: index * 500 }}>
                          <div className={classes.card} data-testid="card">
                            <Typography
                              className={classes.cardTitle}
                              tagType="p"
                              data-testid="cardTitle"
                              styleType="p2"
                              color="tertiary"
                            >
                              {cardData?.cardTitle?.value || ''}
                            </Typography>
                            <Picture
                              data-testid="cardImage"
                              desktop={{
                                image: cardData?.cardImage?.src,
                                webp: cardData?.imagewebp?.src,
                              }}
                              altText={cardData?.cardImage?.alt}
                            />
                            <Typography
                              className={classes.cardMiddleText}
                              tagType="p"
                              testId="cardSubTitle"
                              styleType="h3"
                              color="primary"
                            >
                              <React.Fragment>
                                {cardData?.cardSubTitle?.value || ''}
                                <InjectHTML
                                  pureInjection
                                  className={classes.inlineCardDesc}
                                  value={cardData?.cardDescription?.value}
                                />
                              </React.Fragment>
                            </Typography>
                            <InjectHTML
                              className={classes.cardBottomText}
                              tagType="p"
                              testId="cardDescription"
                              styleType="p1"
                              color="secondary"
                              value={cardData?.cardDescription?.value}
                            />
                          </div>
                        </Fade>
                      </Grid>
                    )
                  },
                )}
              </Grid>
              <InjectHTML
                className={classes.caption}
                tagType="span"
                data-testid="caption"
                styleType="legal"
                value={caption?.value || ''}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    overflow: 'hidden',
    margin: 0,
  },
  container: {
    position: 'relative',
    ...COMPONENT_WRAPPER,
  },
  sectionheading: {
    textAlign: 'center',
    '& sup': {
      fontSize: '0.8rem',
      lineHeight: 0,
      position: 'relative',
      top: '-10px',
    },
    [breakpoints.down('sm')]: {
      fontSize: 32,
    },
  },

  sectionSubheading: {
    textAlign: 'center',
    marginTop: 18,
    fontWeight: 400,
  },
  heading: {
    textAlign: 'left',
    marginBottom: '16px',
    [breakpoints.down('sm')]: {
      fontSize: 24,
    },
  },
  subheading: {
    textAlign: 'left',
  },
  article: {
    padding: '0px 8px',
    marginTop: 82,
    marginBottom: 40,
    [breakpoints.down('sm')]: {
      marginTop: 40,
    },
  },
  articleContainer: {
    padding: '12px 20px 10px',
    backgroundColor: colors.main.lightGray,
    [breakpoints.down('xs')]: {
      padding: '12px 0',
    },
  },
  card: {
    visibility: 'visible',
    padding: '20px',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'stretch',
    backgroundColor: colors.main.midnightExpress,
    margin: '10px 0',
    height: '100%',
    justifyContent: 'space-between',
    '& img': {
      width: 122,
      margin: '-28px 0px 0px -10px',
      [breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    [breakpoints.down('sm')]: {
      visibility: 'visible !important',
      transform: 'none',
      opacity: '1 !important',
    },
    [breakpoints.down('xs')]: {
      padding: '20px 10px',
    },
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
      transform: 'translateY(-200%)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  cardHeader: {
    [breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  cardTitle: {
    marginBottom: 'auto',
  },
  cardMiddleText: {
    padding: 0,
    margin: 0,
    marginBottom: '10px',
    [breakpoints.down('xs')]: {
      display: 'flex',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
    },
  },
  cardBottomText: {
    '& sup': {
      fontSize: '10px',
      lineHeight: 0,
      verticalAlign: 'super',
    },
    [breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  inlineCardDesc: {
    color: colors.main.greenishBlue,
    fontSize: '1.125rem',
    display: 'none',
    marginLeft: 12,
    '& sup': {
      fontSize: '10px',
    },
    [breakpoints.down('md')]: {
      marginBottom: 0,
    },
    [breakpoints.down('xs')]: {
      display: 'inline-block',
      lineHeight: '1em',
      paddingTop: '6px',
      marginLeft: '5px',
      marginBottom: 5,
    },
    '& br': {
      display: 'none',
    },
  },
  caption: {
    display: 'block',
    margin: '24px 0px',
  },
  description: {
    lineHeight: '24px',
    maxWidth: '85%',
    color: colors.main.midnightExpress,
  },
  leftContainer: {
    maxWidth: '400px',
    padding: '28px 0px 30px 14px',
    [breakpoints.down('md')]: {
      maxWidth: '100%',
      padding: '28px 0 0',
    },
    [breakpoints.down('sm')]: {
      padding: '10px 0 0',
    },
  },
  hrLine: {
    marginTop: 20,
    marginBottom: 40,
    borderTop: 'none',
    borderBottom: `1px solid ${colors.main.borderLightGray}`,
  },
}))

export default WhyFiber2Gig
