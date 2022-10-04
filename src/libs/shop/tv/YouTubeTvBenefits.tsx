import { makeStyles } from '@material-ui/core'
import {
  TwoColumnLayout,
  Typography,
  InjectHTML,
  ButtonWithChatLink,
} from 'src/blitz'
import { COMPONENT_WRAPPER } from 'src/constants'
import { useAppData } from 'src/hooks'
import colors from 'src/styles/theme/colors'

const YouTubeTvBenefits = () => {
  const classes = useStyles()

  const {
    heading,
    benefitsList,
    plansButton,
    customerChat,
    customerChatLinkText,
    image,
    title,
  }: any = useAppData('YouTubeTvBenefits', true)
  const NonImageContent = () => (
    <div id="two-gig" className={classes.NonImageContainer}>
      <div className={classes.NonImageWrapper}>
        <InjectHTML tagType="h3" styleType="h3" value={heading?.value} />

        {benefitsList?.list?.map((item: any, i: number) => (
          <ul key={`key-titles-${i}`}>
            <Typography tagType="span" styleType="p2" fontType="boldFont">
              {item?.benefitsTitle?.value}
            </Typography>

            {item?.benefitsDetails?.details?.map((details: any, j: number) => (
              <li key={`key-titles-${i}-details-${j}`}>
                <span className={classes.dot}></span>
                <Typography tagType="span" styleType="p2">
                  {details?.detail?.value}
                </Typography>
              </li>
            ))}
          </ul>
        ))}
        <div className={classes.planContainer}>
          <ButtonWithChatLink
            buttonName={plansButton?.name}
            hoverVariant="primary"
            buttonLink={plansButton?.url}
            bgType="light-gray"
            labelLinkText={customerChatLinkText?.value}
            labelName={customerChat?.value}
            labelFontType="mediumFont"
            labelNameColor="black"
            labelLinkTextColor="red"
            labelStyleType="p1"
            labelTagType="div"
            buttonTarget="_blank"
            chatClassName={classes.alreadyACustomerContainer}
            btnClassName={classes.planBtn}
          />
        </div>
      </div>
    </div>
  )

  return (
    <div className={classes.wrapper}>
      <TwoColumnLayout
        imageWrapperClassName={classes.imageWrapper}
        gridClassName={classes.grid}
        image={image?.src}
        webpImage={image?.webp}
        title={title?.value}
        content={<NonImageContent />}
        reverse={true}
      />
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  wrapper: {
    ...COMPONENT_WRAPPER,
    padding: 0,
    '& img': {
      maxHeight: 'unset',
    },
    [breakpoints.down('sm')]: {
      '& > div > div': {
        padding: 0,
      },
    },
  },
  NonImageContainer: {
    backgroundColor: colors.main.white,
    marginRight: 'auto',
    width: '100%',
    [breakpoints.down('sm')]: {
      padding: '1rem 1rem 2rem',
      width: '100%',
    },
  },
  NonImageWrapper: {
    backgroundColor: colors.main.newBackgroundGray,
    paddingLeft: '7%',
    padding: '3rem 2rem 4.5rem 4rem',
    [breakpoints.down('sm')]: {
      padding: '2rem 1rem 2.5rem 1rem',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& ul': {
      listStyleType: 'none',
      marginBottom: 0,
      paddingLeft: 0,
    },
    [breakpoints.down('sm')]: {
      padding: '1rem',
    },
  },
  link: {
    marginTop: '3rem',
    display: 'inline-block',
    width: 'unset',
    maxWidth: 'fit-content',
    [breakpoints.down('sm')]: {
      marginTop: '1rem',
      paddingRight: '1rem',
      paddingLeft: '1rem',
      margin: 'auto',
    },
  },
  planContainer: {
    marginTop: 48,
    [breakpoints.down('sm')]: {
      marginTop: 32,
    },
  },
  alreadyACustomerContainer: {
    marginTop: '32px !important',
    [breakpoints.down('md')]: {
      flexDirection: 'column',
    },
    [breakpoints.down('sm')]: {
      marginTop: '16px !important',
    },
  },
  customerChat: {
    paddingTop: '1rem',
    marginRight: '.5rem',
    display: 'inline-block',
  },
  planBtn: {
    [breakpoints.down('md')]: {
      margin: 'auto',
      marginTop: '1rem',
      paddingLeft: '1rem',
      paddingRight: '1rem',
    },
    [breakpoints.down('sm')]: {
      display: 'flex !important',
      marginTop: 0,
      maxWidth: 'none !important',
      justifyContent: 'center',
    },
  },
  dot: {
    height: '0.25rem',
    width: '0.25rem',
    marginBottom: '0.25rem',
    marginRight: '0.25rem',
    backgroundColor: colors.main.midnightExpress,
    display: 'inline-block',
    borderRadius: '100%',
  },
  imageWrapper: {
    [breakpoints.up('md')]: {
      height: '100%',
    },
  },
  grid: {
    [breakpoints.up('md')]: {
      '& > div:nth-of-type(2)': {
        minWidth: 'calc(50% + 3rem)',
      },
      '& > div:first-of-type': {
        maxWidth: 'calc(50% - 3rem)',
      },
    },
  },
}))

export default YouTubeTvBenefits
