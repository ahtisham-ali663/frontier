import { makeStyles } from '@material-ui/core'
import colors from 'src/styles/theme/colors'
import { TwoColumnLayout, Typography, InjectHTML } from 'src/blitz'
import { useAppData } from 'src/hooks'
import { MOBILE_APP } from 'src/constants'

const MobileApp = () => {
  const classes = useStyles()
  const data = useAppData('getMobileApp', true)
  const onMobileAppLinkClick = (typeLink: string) => {
    //@ts-ignore
    s_objectID = MOBILE_APP.replace('{NAME}', typeLink)
  }
  const renderContent = () => {
    return (
      <div id="mobile-app" className={classes.details}>
        <Typography
          tagType="h2"
          styleType="h3"
          className={classes.ftrMobileAppCardTitle}
        >
          {data?.title?.value}
        </Typography>
        <InjectHTML
          className={classes.ftrMobileAppDescription}
          value={data?.subTitle?.value || ''}
        />
        <div>
          <a
            href={data?.playStoreLink?.url}
            target="_blank"
            className={classes.Stores}
            rel="noreferrer"
            onClick={() => onMobileAppLinkClick('playstore-link')}
          >
            <img
              src={data?.playStoreImage?.src}
              alt={data?.playStoreImage?.alt}
              className={classes.bannerImage}
            />
          </a>
          <a
            href={data?.appStoreLink?.url}
            target="_blank"
            className={classes.Stores}
            rel="noreferrer"
            onClick={() => onMobileAppLinkClick('appstore-link')}
          >
            <img
              src={data?.appStoreImage?.src}
              alt={data?.appStoreImage?.alt}
              className={classes.bannerImage}
            />
          </a>
        </div>
      </div>
    )
  }
  return (
    <TwoColumnLayout
      image={data?.image?.src}
      webpImage={data?.image?.webp}
      title={data?.image?.alt}
      content={renderContent()}
      reverse={false}
      className={classes.container}
    />
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  container: {
    backgroundColor: colors.main.lightGray,
  },
  details: {
    padding: 16,
    paddingLeft: 0,
    backgroundColor: colors.main.lightGray,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 'auto',
    width: '100%',
    [breakpoints.down('sm')]: {
      padding: '32px 16px',
    },
  },
  root: {
    color: colors.main.white,
  },
  bannerImage: {
    width: '135px',
    height: '40px',
    objectFit: 'cover',
  },
  ftrMobileAppCardTitle: {
    margin: '8px 0px',
    maxWidth: 450,
    [breakpoints.down('sm')]: {
      fontSize: 30,
      lineHeight: '38px',
    },
  },
  ftrMobileAppDescription: {
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: '26px',
    letterSpacing: '0.01em',
    marginBottom: '32px',
    maxWidth: 450,
    [breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
    '& sup': {
      fontSize: '10px',
      lineHeight: 0,
      verticalAlign: 'super',
    },
  },
  Stores: {
    marginRight: 16,
  },
}))

export default MobileApp
