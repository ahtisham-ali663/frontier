import { makeStyles } from '@material-ui/core/styles'
import { useAppData } from 'src/hooks'
import colors from 'src/styles/theme/colors'
import { Typography, Button, ImagePerk } from 'src/blitz'

const PremiumTechPro = () => {
  const classes = useStyles()
  const {
    TabletImage,
    title,
    subTitle,
    price,
    priceDescription,
    description,
    priceCurrency,
    priceFrequency,
    linkText,
    linkHref,
  } = useAppData('contentBlockWithPrice', true)

  if (!title) {
    return null
  }

  return (
    <div className={classes.root}>
      <ImagePerk
        backgroundColor="secondary"
        backgroundColorContent="black"
        stripeColor="primary"
        content={
          <>
            <Typography tagType="h2" styleType="h3" className={classes.heading}>
              {title?.value}
            </Typography>
            <Typography
              styleType="h5"
              tagType="h3"
              className={classes.subTitle}
            >
              {subTitle?.value}
            </Typography>
            <Typography
              className={classes.paragraphStyle}
              tagType="p"
              styleType="p1"
            >
              {description?.value}
            </Typography>
            <div className={classes.priceContainer}>
              {price && (
                <div>
                  <Typography
                    styleType="p3"
                    tagType="p"
                    className={classes.priceDescription}
                  >
                    {priceDescription?.value}
                  </Typography>
                  <p className={classes.price}>
                    <Typography
                      styleType="h3"
                      tagType="p"
                      className={classes.priceCurrency}
                    >
                      <span>
                        {priceCurrency?.value}
                        {priceFrequency?.value}
                      </span>
                    </Typography>
                    <Typography
                      styleType="h6"
                      tagType="p"
                      className={classes.priceFrequency}
                    >
                      {price?.value}
                    </Typography>
                  </p>
                </div>
              )}
            </div>
            <Button
              type="link"
              text={linkText?.value}
              className={classes.buttonSize}
              hoverVariant="secondary"
              href={`${origin}${linkHref?.url}`}
            />
          </>
        }
        tabletBackgroundImage={TabletImage ?? {}}
      />
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {
    '& div:nth-child(2)': {
      alignSelf: 'flex-end',
    },
  },
  paragraphStyle: {
    margin: '8px 0',
    color: colors.main.white,
  },
  buttonSize: {
    [breakpoints.down('sm')]: {
      width: '100% !important',
    },
  },
  heading: {
    color: colors.main.greenishBlue,
    fontWeight: 700,
    marginBottom: 16,
  },
  subTitle: {
    color: colors.main.white,
  },
  priceDescription: {
    color: colors.main.white,
    marginBottom: 0,
    fontWeight: 400,
  },
  price: {
    margin: 0,
    display: 'inline-flex',
  },
  priceContainer: {
    margin: '1.5625rem 0',
    [breakpoints.down('sm')]: {
      padding: '0px',
      display: 'flex',
      justifyContent: 'flex-start',
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
}))

export default PremiumTechPro
