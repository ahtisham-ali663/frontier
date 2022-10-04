import { useAppData } from 'src/hooks'
import {
  Button,
  Typography,
  InjectHTML,
  TwoColumnLayout,
  Stripes,
} from 'src/blitz'
import { makeStyles } from '@material-ui/core'
import { TWO_GIG } from 'src/constants'
import colors from 'src/styles/theme/colors'

const DirectKick = () => {
  const compData = useAppData('MLSDirectKick', true) || {}
  const classes = useStyles()
  const onButtonClick = () => {
    //@ts-ignore
    s_objectID = TWO_GIG.replace('{NAME}', compData?.butontText?.value)
  }
  const renderContent = () => {
    return (
      <div className={classes.contentBlock}>
        <Typography tagType="h3" styleType="h4">
          {compData?.heading?.value}
        </Typography>
        <InjectHTML
          className={classes.paragraphStyle}
          tagType="p"
          styleType="p1"
          value={compData?.content?.value}
        />
        <Button
          type="link"
          text={compData?.butontText?.value}
          href={compData?.buttonUrl?.url}
          className={classes.callBtn}
          onClick={onButtonClick}
        />
      </div>
    )
  }
  return (
    <div id="direct-kick" className={classes.root}>
      <div className={classes.redContainer}></div>
      <Stripes stripeColor="secondary" className={classes.stripes} />
      <TwoColumnLayout
        image={compData?.imageContentBox?.src}
        webpImage={compData?.imageContentBox?.webp}
        mobileImage={compData?.mobileImage?.src}
        mobileWebpImage={compData?.mobileWebpImage?.src}
        tabletImage={compData?.imageContentBox?.src}
        tabletWebpImage={compData?.imageContentBox?.src}
        title={compData?.imageContentBox?.alt}
        content={renderContent()}
        reverse={true}
        className={classes.container}
        innerWrapperClassName={classes.innerWrapper}
        gridClassName={classes.containerWrapper}
        imageWrapperClassName={classes.imageWrapper}
        mobileReverse={true}
      />
    </div>
  )
}

export default DirectKick

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    position: 'relative',
  },
  innerWrapper: {
    maxWidth: '100%',
    padding: '0',
  },
  contentBlock: {
    maxWidth: '610px',
    padding: '2rem 1rem 2rem 4rem',
    alignSelf: 'center',
    [breakpoints.down('md')]: {
      paddingLeft: '2rem',
    },
    [breakpoints.down('sm')]: {
      padding: '2rem 1rem 6rem 1rem',
    },
  },
  redContainer: {
    position: 'absolute',
    zIndex: 0,
    width: '50vw',
    height: '100%',
    backgroundColor: colors.main.brightRed,
    [breakpoints.down('xs')]: {
      display: 'none',
    },
    [breakpoints.between('xs', 'sm')]: {
      width: '100vw',
      height: '69vw',
    },
  },
  stripes: {
    '& div': {
      width: '50vw',
      left: 0,
      bottom: 'unset',

      [breakpoints.down('xs')]: {
        display: 'none',
      },
      [breakpoints.between('xs', 'sm')]: {
        width: '100vw',
      },
    },
    '& div:nth-of-type(1)': {
      top: `200px`,
    },
    '& div:nth-of-type(2)': {
      top: `245px`,
    },
    '& div:nth-of-type(3)': {
      top: `290px`,
    },
  },
  container: {
    backgroundColor: 'transparent',
    position: 'relative',
    [breakpoints.down('sm')]: {
      margin: '0',
      padding: '0',
    },
  },
  boxText: {
    [breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column-reverse',
    },
  },
  heading: {
    marginTop: '0 !important',
  },
  containerWrapper: {
    alignItems: 'stretch',
    '& .gridItemContent': {
      justifyContent: 'flex-start',
    },
    '& .gridItemImage': {
      maxWidth: '710px',
      [breakpoints.down('sm')]: {
        maxWidth: '100%',
        flexBasis: '69vw',
      },

      [breakpoints.down('xs')]: {
        flexBasis: '110vw',
      },
    },
  },
  callBtn: {
    [breakpoints.down('sm')]: {
      paddingLeft: '.75rem',
      paddingRight: '.75rem',
    },
  },
  imageWrapper: {
    backgroundColor: 'transparent',
  },
  paragraphStyle: {
    marginBottom: '1rem',
    [breakpoints.down('sm')]: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
    '& strong': {
      marginBottom: '32px',
      fontSize: '1.5rem',
      lineHeight: '2rem',
      display: 'block',
      [breakpoints.down('sm')]: {
        fontSize: '1.125rem',
        lineHeight: '1.625rem',
      },
    },
    '& p': {
      marginBottom: '4px',
    },
  },
}))
