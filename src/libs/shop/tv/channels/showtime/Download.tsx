import { Picture, Typography } from 'src/blitz'
import { makeStyles } from '@material-ui/core'
import { useAppData } from 'src/hooks'
import { COMPONENT_WRAPPER } from 'src/constants'
const Download = () => {
  const {
    title,
    description,
    desktopdownloadAppImage,
    mobiledownloadAppImage,
    playStoreImage,
    appStoreUrl,
    playStoreurl,
    appStoreImage,
  } = useAppData('download', true)
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes.downloadImg}>
        <Picture
          altText={`${desktopdownloadAppImage?.src}`}
          desktop={{
            image: `${desktopdownloadAppImage?.src}`,
          }}
          mobile={{
            image: `${mobiledownloadAppImage?.src}`,
          }}
          className={classes.w100}
        />
      </div>
      <div className={classes.content}>
        <Typography tagType="h2" styleType="h3">
          {title?.value}
        </Typography>
        <Typography tagType="p" styleType="p1">
          {description?.value}
        </Typography>
        <div className={classes.playStoreContainer}>
          <div className={classes.googlePlayStore}>
            <a href={playStoreurl?.url}>
              <Picture
                altText={playStoreImage?.alt}
                desktop={{
                  image: `${playStoreImage?.src}`,
                }}
              />
            </a>
          </div>
          <div className={classes.appStore}>
            <a href={appStoreUrl?.url}>
              <Picture
                altText={appStoreImage?.alt}
                desktop={{
                  image: `${appStoreImage?.src}`,
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
const useStyles = makeStyles(({ breakpoints, typography }) => ({
  container: {
    ...COMPONENT_WRAPPER,
    display: 'flex',
    padding: `${typography.pxToRem(80)} 0`,
    [breakpoints.down('sm')]: {
      padding: `${typography.pxToRem(32)}`,
      flexDirection: 'column-reverse',
    },
  },
  downloadImg: {
    flexBasis: '60%',
    padding: `0 ${typography.pxToRem(32)} ${typography.pxToRem(
      32,
    )} ${typography.pxToRem(32)}`,
    [breakpoints.down('sm')]: {
      flexBasis: '100%',
      width: '100%',
      padding: 0,
    },
  },
  content: {
    flexBasis: '40%',
    marginTop: `${typography.pxToRem(14)}`,
    padding: `${typography.pxToRem(32)} ${typography.pxToRem(
      32,
    )} ${typography.pxToRem(32)} 0`,
    [breakpoints.down('sm')]: {
      marginTop: 0,
      padding: 0,
      flexBasis: '100%',
    },
  },
  playStoreContainer: {
    display: 'flex',
    marginBottom: `${typography.pxToRem(32)}`,
    [breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  googlePlayStore: {
    marginRight: `${typography.pxToRem(8)}`,
    [breakpoints.down('sm')]: {
      marginRight: `${typography.pxToRem(16)}`,
    },
  },
  appStore: {
    marginLeft: `${typography.pxToRem(8)}`,
  },

  w100: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}))
export default Download
