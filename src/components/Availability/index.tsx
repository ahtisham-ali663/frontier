import { makeStyles, Grid, Button } from '@material-ui/core'
import { Typography } from 'src/blitz'
import { useAppData } from 'src/hooks'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '150px 12px',
  },
  isBgGray: {
    backgroundColor: '#fafafa!important',
  },
  sectionLabel: {
    fontSize: '1rem',
    lineHeight: '1rem',
    color: '#d1d2d4',
    marginTop: 0,
    textTransform: 'uppercase',
  },
  availabilityHeadlineWrap: {
    paddingBottom: '30px',
  },

  textAlignCentered: {
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: '3.4rem',
    lineHeight: '3.4rem',
    color: '#57595c',
    marginTop: '20px',
    [theme.breakpoints.down('md')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.6rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.0rem',
      lineHeight: '2.5rem',
    },
  },
  sectionCenteredGraphic: {
    margin: '0 0 30px',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 40,
    },
  },
  mapImg: {
    display: 'inline-block',
    height: 'auto',
    maxWidth: '100%',
    verticalAlign: 'middle',
  },
  columns: {
    paddingLeft: '1.5rem',
    paddingEight: '1.5rem',
    float: 'left',
  },
  availabilitySideWrap: {
    paddingTop: 40,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'row',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  availabilityCopyWrap: {
    [theme.breakpoints.down('md')]: {
      padding: '0px 20px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0px',
    },
  },
  availabilityHeadline: {
    fontSize: '18px',
    color: '#58595b',
    marginBottom: '20px',
  },
  availabilityCopy: {
    fontSize: '16px',
    lineHeight: '22px',
    color: '#58595b',
    marginBottom: '80px',
  },
  availabilityCtaMessage: {
    lineHeight: '22px',
    paddingRight: '30px',
    fontSize: '18px',
    color: '#58595b',
    fontWeight: 600,
  },
  section__button: {
    width: '228px',
    fontSize: 20,
    lineHeight: '2.6rem',
    textTransform: 'capitalize',
    [theme.breakpoints.down('md')]: {
      width: '195px',
      fontSize: '14px',
      marginTop: '10px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '195px',
      fontSize: '12px',
      marginTop: '10px',
    },
  },
  marginTop20: {
    marginTop: 20,
  },
}))

const Availablity = () => {
  const classes = useStyles()
  const { fields } = useAppData('Service Availability')
  const { btnName, btnValue, calltoaction, image, posts, tooltip, title } =
    fields?.data?.datasource || {}

  const handleCheckAvailabilityClick = () => {
    window.scrollTo({ top: 350, behavior: 'smooth' })
  }

  return (
    <>
      <section className={`${classes.isBgGray}`}>
        <div className={`${classes.root} frontierRow`}>
          <Grid item lg={12}>
            <div className={`${classes.availabilityHeadlineWrap}`}>
              <Typography
                className={`${
                  (classes.sectionLabel, classes.textAlignCentered)
                }`}
                tagType="h1"
              >
                {tooltip?.value || ''}
              </Typography>
              <Typography
                className={`${
                  (classes.sectionHeader, classes.textAlignCentered)
                }`}
                tagType="h2"
              >
                {title?.value}
              </Typography>
            </div>
          </Grid>
          <Grid container spacing={5}>
            <Grid item xl={8} lg={8} md={12} sm={12}>
              <div className={`${classes.textAlignCentered}`}>
                {image?.src && (
                  <img
                    className={`${classes.mapImg}`}
                    alt="map"
                    width="742"
                    height="515"
                    src={image?.src}
                  />
                )}
                {/* {image?.src && (
                  <figure className={`${classes.sectionCenteredGraphic}`}>
                    <picture>
                      <source type="image/webp" srcSet={image?.src} />
                      <Image
                        className={`${classes.mapImg}`}
                        alt="map"
                        width="742"
                        height="515"
                        src={image?.src}
                      />
                    </picture>
                  </figure>
                )} */}
              </div>
            </Grid>
            <Grid item xl={4} lg={4} md={12} sm={12}>
              <div className={`${classes.availabilitySideWrap}`}>
                {(posts?.post || []).map((post: any, id: number) => {
                  return (
                    <div
                      key={`availpost_${id}`}
                      className={`${classes.availabilityCopyWrap}`}
                    >
                      <Typography
                        className={`${classes.availabilityHeadline}`}
                        tagType="h5"
                      >
                        {post?.title?.value || ''}
                      </Typography>
                      <Typography
                        className={`${classes.availabilityCopy}`}
                        styleType="p4"
                      >
                        {post?.content?.value || ''}
                      </Typography>
                    </div>
                  )
                })}
              </div>
            </Grid>
          </Grid>
          <Grid item lg={12} md={12} sm={12}>
            <div className={`${classes.textAlignCentered}`}>
              <Typography
                className={classes.availabilityCtaMessage}
                tagType="span"
              >
                {calltoaction?.value}
              </Typography>
              <Button
                className={classes.section__button}
                href={btnValue?.value}
                color="primary"
                variant="contained"
                onClick={handleCheckAvailabilityClick}
              >
                {btnName?.value}
              </Button>
            </div>
          </Grid>
        </div>
      </section>
    </>
  )
}
export default Availablity
