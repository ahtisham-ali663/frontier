import { makeStyles } from '@material-ui/core'
import { Button, Typography } from 'src/blitz'
import { TwoColumnLayout, InjectHTML } from 'src/blitz'
import { COMPONENT_WRAPPER } from 'src/constants'
import { useAppData, useChatState } from 'src/hooks'
import colors from 'src/styles/theme/colors'

const AppleTv = () => {
  const classes = useStyles()
  const {
    title,
    subTitle,
    image,
    getOfferBtnLink,
    getOfferBtnText,
    learnMoreButtonText,
    learnMoreButtonUrl,
    existingCustomerLabel,
    chatNowText,
  } = useAppData('AppleTv', true)
  const { setChatState } = useChatState()

  if (!title) {
    return null
  }
  const NonImageContent = () => (
    <div data-testid="AppleTv" className={classes.NonImageContainer}>
      {title?.value && (
        <InjectHTML
          tagType="h2"
          styleType="h3"
          fontType="boldFont"
          data-testid="title"
          className={classes.AppleTvTitle}
          value={title?.value}
        />
      )}
      {subTitle?.value && (
        <InjectHTML
          data-testid="subTitle"
          tagType="p"
          styleType="p1"
          className={classes.AppleTvSubTitle}
          value={subTitle?.value}
        />
      )}
      <div className={classes.buttonsWrapper}>
        <Button
          variant="tertiary"
          hoverVariant="secondary"
          type="link"
          text={learnMoreButtonText?.value}
          href={learnMoreButtonUrl?.url}
          className={classes.getOfferBtn}
        />
        {getOfferBtnText?.value && getOfferBtnLink?.url && (
          <Button
            variant="secondary"
            type="link"
            text={getOfferBtnText?.value}
            href={getOfferBtnLink?.url}
            className={classes.getOfferBtn}
          />
        )}
      </div>
      {existingCustomerLabel && (
        <div className={classes.existingCustomerWrapper}>
          <Typography
            tagType="p"
            styleType="p2"
            fontType="boldFont"
            className={classes.chatNow}
          >
            {existingCustomerLabel?.value}
          </Typography>
          <button
            className={classes.chatNowButton}
            onClick={() => setChatState(true)}
          >
            <Typography
              tagType="p"
              styleType="p2"
              fontType="boldFont"
              className={classes.chatNowButtonText}
            >
              {chatNowText?.value}
            </Typography>
          </button>
        </div>
      )}
    </div>
  )

  return (
    <TwoColumnLayout
      image={image?.src}
      webpImage={image?.webp}
      title={title?.value}
      content={<NonImageContent />}
      reverse={true}
      gridClassName={classes.gridClassName}
      className={classes.container}
      imageWrapperClassName={classes.imageWrapperClassName}
    />
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  container: {
    overflow: 'hidden',
    background: colors.main.newBackgroundGray,
    [breakpoints.down('sm')]: {
      padding: '0 16px',
      flexDirection: 'row-reverse',
    },
    '& img': {
      objectFit: 'contain',
      padding: 5,
      [breakpoints.down('sm')]: {
        padding: '.3125rem 0',
        flexDirection: 'column-reverse',
      },
    },
  },
  gridClassName: {
    ...COMPONENT_WRAPPER,
    padding: '100px 0px',
    [breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      flexWrap: 'nowrap',
    },
  },
  imageWrapperClassName: {
    background: colors.main.newBackgroundGray,
  },
  AppleTvTitle: {
    marginBottom: '16px',
    '& span :hover': { color: colors.main.brightRed },
    [breakpoints.down('sm')]: {
      fontSize: 30,
      lineHeight: '38px',
    },
  },
  NonImageContainer: {
    padding: 16,
    paddingLeft: 48,
    marginLeft: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    [breakpoints.down('sm')]: {
      padding: 6,
    },
  },
  AppleTvSubTitle: {
    marginBottom: 32,
    maxWidth: 500,
    margin: 0,
    [breakpoints.down('sm')]: {
      maxWidth: 'unset',
    },
  },
  chatNow: {
    marginBottom: 0,
    '& a': {
      textDecoration: 'underline',
      '&:hover': {
        color: colors.main.brightRed,
      },
    },
  },
  getOfferBtn: {
    maxWidth: 300,
    textTransform: 'uppercase',
    [breakpoints.down('xs')]: {
      maxWidth: '100%',
    },
  },
  buttonsWrapper: {
    display: 'flex',
    gap: 8,
  },
  existingCustomerWrapper: {
    display: 'flex',
    gap: 2,
  },
  chatNowButtonText: {
    cursor: 'pointer',
    textDecoration: 'underline',
    '&:hover': {
      color: colors.main.brightRed,
    },
  },
  chatNowButton: {
    border: 0,
    cursor: 'pointer',
    background: 'transparent',
  },
}))

export default AppleTv
