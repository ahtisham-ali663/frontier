import { makeStyles } from '@material-ui/core'
import { Picture, Typography } from 'src/blitz'
import colors from 'src/styles/theme/colors'
import { COMPONENT_WRAPPER } from 'src/constants'
import { useAppData } from 'src/hooks'
const BreakThrough = () => {
  const {
    title,
    description,
    mobilebanner,
    desktopbanner,
    mobileleftImage,
    desktopleftImage,
    desktopcenterImage,
    mobilecenterImage,
    desktoprightImage,
    mobilerightImage,
  } = useAppData('breakThrough', true)
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.heading}>
          <Typography tagType="h2" styleType="h3" color="tertiary">
            {title?.value}
          </Typography>
          <Typography tagType="p" styleType="h5" color="tertiary">
            {description?.value}
          </Typography>
        </div>
        <Picture
          altText={desktopbanner?.alt}
          desktop={{
            image: `${desktopbanner?.src}`,
          }}
          tablet={{
            image: `${desktopbanner?.src}`,
          }}
          mobile={{
            image: `${mobilebanner?.src}`,
          }}
          className={classes.bannerImg}
        />
        <div className={classes.FooterContainer}>
          <div className={classes.leftImg}>
            <Picture
              altText={desktopleftImage?.alt}
              desktop={{
                image: `${desktopleftImage?.src}`,
              }}
              tablet={{
                image: `${desktopleftImage?.src}`,
              }}
              mobile={{
                image: `${mobileleftImage?.src}`,
              }}
              className={classes.leftImg}
            />
          </div>
          <div className={classes.centerImg}>
            <Picture
              altText={desktopcenterImage?.alt}
              desktop={{
                image: `${desktopcenterImage?.src}`,
              }}
              tablet={{
                image: `${desktopcenterImage?.src}`,
              }}
              mobile={{
                image: `${mobilecenterImage?.src}`,
              }}
              className={classes.centerImg}
            />
          </div>
          <div className={classes.rightImg}>
            <Picture
              altText={desktoprightImage?.alt}
              desktop={{
                image: `${desktoprightImage?.src}`,
              }}
              tablet={{
                image: `${desktoprightImage?.src}`,
              }}
              mobile={{
                image: `${mobilerightImage?.src}`,
              }}
              className={classes.rightImg}
            />
          </div>
        </div>
        <Picture
          altText={desktopcenterImage?.alt}
          desktop={{
            image: `${desktopcenterImage?.src}`,
          }}
          tablet={{
            image: `${desktopcenterImage?.src}`,
          }}
          mobile={{
            image: `${mobilecenterImage?.src}`,
          }}
          className={classes.belowImg}
        />
      </div>
    </div>
  )
}
const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {
    backgroundColor: `${colors.main.midnightExpress}`,
  },
  container: {
    ...COMPONENT_WRAPPER,
    padding: `${typography.pxToRem(80)} 0 ${typography.pxToRem(68)} 0`,

    [breakpoints.down('sm')]: {
      padding: `${typography.pxToRem(48)} ${typography.pxToRem(16)}`,
    },
  },
  heading: {
    textAlign: 'center',
    marginBottom: `${typography.pxToRem(48)}`,
    [breakpoints.down('sm')]: {
      marginBottom: `${typography.pxToRem(16)}`,
    },
  },
  bannerImg: {
    width: '100%',
    height: 'auto',
  },
  FooterContainer: {
    display: 'flex',
    marginTop: `${typography.pxToRem(48)}`,
  },
  leftImg: {
    flexBasis: '40%',
    height: '300px',
    width: '100%',
    marginRight: `${typography.pxToRem(23)}`,
    [breakpoints.down('xs')]: {
      marginRight: `${typography.pxToRem(8)}`,
      flexBasis: '68%',
      height: `${typography.pxToRem(145)}`,
    },
  },
  centerImg: {
    flexBasis: '37%',
    height: `${typography.pxToRem(300)}`,
    marginRight: `${typography.pxToRem(23)}`,
    width: '100%',
    [breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  rightImg: {
    flexBasis: '23%',
    height: `${typography.pxToRem(300)}`,
    width: '100%',
    [breakpoints.down('xs')]: {
      flexBasis: '31%',
      height: `${typography.pxToRem(145)}`,
    },
  },
  belowImg: {
    display: 'none',
    [breakpoints.down('xs')]: {
      display: 'block',
      width: '100%',
      marginTop: `${typography.pxToRem(16)}`,
    },
  },
}))
export default BreakThrough
