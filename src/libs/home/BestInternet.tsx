import { makeStyles } from '@material-ui/core'
import { Button } from 'src/blitz'
import { TwoColumnLayout, Typography, InjectHTML } from 'src/blitz'
import { BEST_INTERNET } from 'src/constants'
import { useAppData } from 'src/hooks'

const BestInternet = () => {
  const classes = useStyles()
  const {
    title,
    subTitle,
    image,
    legalText,
    checkAvailabilityBtnLink,
    checkAvailabilityBtnText,
  } = useAppData('bestInternetData', true)

  const onButtonClick = () => {
    //@ts-ignore
    s_objectID = BEST_INTERNET.replace(
      '{NAME}',
      checkAvailabilityBtnText?.value,
    )
  }
  const NonImageContent = () => (
    <div id="best-internet" className={classes.NonImageContainer}>
      <Typography
        tagType="p"
        styleType="h3"
        className={classes.BestInternetTitle}
      >
        {title?.value}
      </Typography>
      <Typography
        tagType="p"
        styleType="p1"
        className={classes.TwoGigImageSubTitle}
      >
        {subTitle?.value}
      </Typography>
      <InjectHTML
        tagType="p"
        styleType="legal"
        className={classes.BestInternetLegal}
        value={legalText?.value}
      />
      <Button
        variant="primary"
        type="link"
        text={checkAvailabilityBtnText?.value}
        href={checkAvailabilityBtnLink?.url}
        className={classes.checkAvailBtn}
        onClick={onButtonClick}
      />
    </div>
  )

  return (
    <TwoColumnLayout
      image={image?.src}
      webpImage={image?.webp}
      title={title?.value}
      content={<NonImageContent />}
      reverse={false}
      className={classes.container}
    />
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  container: {
    overflow: 'hidden',
    '& img': {
      objectFit: 'contain',
      padding: 5,
      [breakpoints.down('xs')]: {
        padding: '.3125rem 0',
        transform: 'scale(1.2)',
      },
    },
  },
  BestInternetTitle: {
    lineHeight: '50px',
    marginBottom: '16px',
    [breakpoints.down('sm')]: {
      fontSize: 30,
      lineHeight: '38px',
    },
  },
  NonImageContainer: {
    padding: 16,
    paddingLeft: 0,
    marginLeft: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingRight: 120,
    width: '100%',
    [breakpoints.down('sm')]: {
      padding: '32px 16px',
    },
  },
  TwoGigImageSubTitle: {
    marginBottom: '16px',
    maxWidth: 450,
    margin: 0,
    [breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  BestInternetLegal: {
    marginBottom: '32px',
  },
  checkAvailBtn: {
    maxWidth: 300,
    textTransform: 'uppercase',
    [breakpoints.down('xs')]: {
      maxWidth: '100%',
    },
  },
}))

export default BestInternet
