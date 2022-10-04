import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useAppData } from 'src/hooks'
import { Typography } from 'src/blitz'
import colors from 'src/styles/theme/colors'
import { CheckMarkBlue } from 'src/blitz/assets/react-icons'
import Image from 'src/components/ImageWithPlaceholder'

const BundleItAllAndSave = () => {
  const classes = useStyles()
  const data = useAppData('bundleInfo', true)

  if (!data?.title) {
    return null
  }

  return (
    <div className={classes.root}>
      <Grid
        className={classes.container}
        container
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sm={12}>
          <Typography tagType="h2" styleType="h4" className={classes.title}>
            {data?.title?.value}
          </Typography>
          <hr className={classes.border} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.heroImageContainer}>
            <Image
              className={classes.heroImage}
              src={data?.image?.src}
              alt={data?.image?.alt}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.descriptionContainer}>
            <div className={classes.descriptionWrapper}>
              <Typography
                tagType="h3"
                styleType="h5"
                className={classes.perkTitle}
              >
                {data?.perkTitle?.value}
              </Typography>
              <Typography
                tagType="p"
                styleType="p1"
                className={classes.perkDesc}
              >
                {data?.perkDescription?.value}
              </Typography>
              <ul>
                {data?.perks?.list?.map((perk: any) => (
                  <li key={perk?.perk?.value}>
                    <CheckMarkBlue className={classes.svgAlign} />
                    <Typography
                      className={classes.bulletsStyle}
                      tagType="div"
                      styleType="p1"
                    >
                      {perk?.perk?.value}
                    </Typography>
                  </li>
                ))}
              </ul>
              <div className={classes.priceContainer}>
                {data?.price && (
                  <div>
                    <Typography
                      styleType="p3"
                      tagType="p"
                      className={classes.priceDescription}
                    >
                      {data?.priceDescription?.value}
                    </Typography>
                    <p className={classes.price}>
                      <Typography
                        styleType="h3"
                        tagType="p"
                        className={classes.priceCurrency}
                      >
                        <span>
                          {data?.priceCurrency?.value}
                          {data?.price?.value}
                        </span>
                      </Typography>
                      <Typography
                        styleType="h6"
                        tagType="p"
                        className={classes.priceFrequency}
                      >
                        {data?.priceFrequency?.value}
                      </Typography>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {
    padding: 16,
  },
  container: {
    maxWidth: 1200,
    margin: 'auto',
    background: colors.main.midnightExpress,
    marginBottom: 32,
    padding: `36px 64px`,
    marginTop: 20,
    color: colors.main.white,
    [breakpoints.down('sm')]: {
      padding: '48px 8px',
    },
  },
  heroImageContainer: {
    margin: 'auto',
    display: 'flex',
    '& > div': {
      margin: '0 auto',
    },
  },
  heroImage: {
    width: '100%',
  },
  title: {
    fontSize: typography.pxToRem(30),
    color: colors.main.blue,
    textAlign: 'center',
    [breakpoints.down('sm')]: {
      fontSize: typography.pxToRem(24),
    },
  },
  descriptionContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: 16,
  },
  border: {
    color: colors.main.blue,
    border: '1px solid',
    marginTop: typography.pxToRem(20),
  },
  bulletsStyle: {
    margin: '2px 0',
    color: colors.main.white,
    display: 'inline-flex',
    paddingLeft: 8,
  },
  svgAlign: {
    placeSelf: 'center stretch',
  },
  descriptionWrapper: {
    width: 'max-content',
    '& ul': {
      paddingLeft: 0,
      listStyleType: 'none',
      '& li': {},
    },
    [breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  priceDescription: {
    color: colors.main.white,
    marginBottom: 0,
  },
  price: {
    margin: 0,
    display: 'inline-flex',
  },
  priceContainer: {
    margin: '1.5625rem 0 1.875rem',
    [breakpoints.down('sm')]: {
      marginBottom: 0,
      padding: '0px',
      display: 'flex',
      justifyContent: 'center',
    },
  },
  priceCurrency: {
    color: colors.main.greenishBlue,
    margin: '0 !important',
    lineHeight: '56px',
    verticalAlign: '50%',
    [breakpoints.down('sm')]: {
      fontSize: typography.pxToRem(42),
    },
  },
  priceFrequency: {
    color: colors.main.white,
    position: 'relative',
    top: 20,
  },
  perkTitle: {
    color: colors.main.blue,
    fontWeight: 700,
  },
  perkDesc: {
    margin: '4px 0px',
    color: colors.main.white,
  },
}))

export default BundleItAllAndSave
