import { makeStyles } from '@material-ui/core'
import { InjectHTML } from 'src/blitz'
import { COMPONENT_WRAPPER } from 'src/constants'
import { useAppData } from 'src/hooks'
import colors from 'src/styles/theme/colors'

const BannerList: React.FC = () => {
  const classes = useStyles()

  const {
    // heading,
    description,
    strikeprice,
    actualprice,
    details,
    legalNote,
  }: any = useAppData('FrontierCustomers', true)
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        {/* {heading?.value && (
          <InjectHTML
            tagType="h2"
            styleType="h2"
            fontType="boldFont"
            color="secondary"
            className={classes.heading}
            value={heading?.value}
          />
        )} */}
        <div className={classes.bottomWrapper}>
          {!description?.value && !strikeprice?.value && !actualprice?.value && (
            <div className={classes.bottomContent}>
              <InjectHTML
                tagType="p"
                styleType="h6"
                // color="secondary"
                fontType="regularFont"
                className={classes.text}
                value={
                  description?.value ||
                  '<svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M3.92913 12.0795C3.73793 11.8803 3.42141 11.8737 3.22217 12.0649C3.02292 12.2561 3.0164 12.5726 3.20759 12.7719L3.92913 12.0795ZM8.91744 18L8.55667 18.3462L8.91744 18.7221L9.27821 18.3462L8.91744 18ZM20.7934 6.34619C20.9846 6.14694 20.978 5.83043 20.7788 5.63923C20.5795 5.44804 20.263 5.45456 20.0718 5.65381L20.7934 6.34619ZM3.20759 12.7719L8.55667 18.3462L9.27821 17.6538L3.92913 12.0795L3.20759 12.7719ZM9.27821 18.3462L20.7934 6.34619L20.0718 5.65381L8.55667 17.6538L9.27821 18.3462Z" fill="#141928"></path>\n                </svg> $200 Visa Reward Card'
                }
              />

              {/* <Typography
                tagType="span"
                styleType="p1"
                className={classes.strikeprice}
                color="tertiary"
              >
                {strikeprice?.value}
              </Typography> */}
              {/* <Typography tagType="span" styleType="h5" color="tertiary">
                {actualprice?.value}
              </Typography> */}
            </div>
          )}
          {!details?.value && !legalNote?.value && (
            <div className={classes.bottomContent}>
              <InjectHTML
                tagType="p"
                styleType="h6"
                // color="tertiary"
                fontType="regularFont"
                className={classes.text}
                value={
                  description?.value ||
                  `<svg className=${classes.myIcon} width="24" height="24" viewbox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg">\n                <path d="M3.92913 12.0795C3.73793 11.8803 3.42141 11.8737 3.22217 12.0649C3.02292 12.2561 3.0164 12.5726 3.20759 12.7719L3.92913 12.0795ZM8.91744 18L8.55667 18.3462L8.91744 18.7221L9.27821 18.3462L8.91744 18ZM20.7934 6.34619C20.9846 6.14694 20.978 5.83043 20.7788 5.63923C20.5795 5.44804 20.263 5.45456 20.0718 5.65381L20.7934 6.34619ZM3.20759 12.7719L8.55667 18.3462L9.27821 17.6538L3.92913 12.0795L3.20759 12.7719ZM9.27821 18.3462L20.7934 6.34619L20.0718 5.65381L8.55667 17.6538L9.27821 18.3462Z" fill="#141928"></path>\n                </svg> eero Pro 6 total-home Wi-Fi system`
                }
              />
              {/* <Typography tagType="p" styleType="legal" color="tertiary">
                {legalNote?.value || "hello"}
              </Typography> */}
            </div>
          )}
          {!details?.value && !legalNote?.value && (
            <div className={classes.bottomContent}>
              <InjectHTML
                tagType="p"
                styleType="h6"
                // color="tertiary"
                fontType="regularFont"
                className={classes.text}
                value={
                  description?.value ||
                  '<svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M3.92913 12.0795C3.73793 11.8803 3.42141 11.8737 3.22217 12.0649C3.02292 12.2561 3.0164 12.5726 3.20759 12.7719L3.92913 12.0795ZM8.91744 18L8.55667 18.3462L8.91744 18.7221L9.27821 18.3462L8.91744 18ZM20.7934 6.34619C20.9846 6.14694 20.978 5.83043 20.7788 5.63923C20.5795 5.44804 20.263 5.45456 20.0718 5.65381L20.7934 6.34619ZM3.20759 12.7719L8.55667 18.3462L9.27821 17.6538L3.92913 12.0795L3.20759 12.7719ZM9.27821 18.3462L20.7934 6.34619L20.0718 5.65381L8.55667 17.6538L9.27821 18.3462Z" fill="#141928"></path>\n                </svg> Waived Activation Fee'
                }
              />
              {/* <Typography tagType="p" styleType="legal" color="tertiary">
                {legalNote?.value || "hello"}
              </Typography> */}
            </div>
          )}
          {!details?.value && !legalNote?.value && (
            <div className={classes.bottomContent}>
              <InjectHTML
                tagType="p"
                styleType="h6"
                // color="tertiary"
                fontType="regularFont"
                className={classes.text}
                value={
                  description?.value ||
                  '<svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M3.92913 12.0795C3.73793 11.8803 3.42141 11.8737 3.22217 12.0649C3.02292 12.2561 3.0164 12.5726 3.20759 12.7719L3.92913 12.0795ZM8.91744 18L8.55667 18.3462L8.91744 18.7221L9.27821 18.3462L8.91744 18ZM20.7934 6.34619C20.9846 6.14694 20.978 5.83043 20.7788 5.63923C20.5795 5.44804 20.263 5.45456 20.0718 5.65381L20.7934 6.34619ZM3.20759 12.7719L8.55667 18.3462L9.27821 17.6538L3.92913 12.0795L3.20759 12.7719ZM9.27821 18.3462L20.7934 6.34619L20.0718 5.65381L8.55667 17.6538L9.27821 18.3462Z" fill="#141928"></path>\n                </svg> 3-yr. Price Guarantee'
                }
              />
              {/* <Typography tagType="p" styleType="legal" color="tertiary">
                {legalNote?.value || "hello"}
              </Typography> */}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    backgroundColor: '#96FFF5',
  },
  wrapper: {
    ...COMPONENT_WRAPPER,
    marginBottom: '8.75rem',
    [breakpoints.down('sm')]: {
      margin: '0 1rem 1rem 1rem',
    },
  },

  bottomWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    [breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  bottomContent: {
    flex: 1,
    marginTop: '1rem',
    '& p': { marginTop: 0, marginBottom: '1rem' },
    [breakpoints.down('sm')]: {
      marginTop: '1rem',
    },
  },
  strikeprice: {
    textDecoration: 'line-through',
    marginRight: '.5rem',
    color: colors.main.borderGrey,
  },
  text: {
    fontSize: '14px',
  },
  myIcon: {
    fill: 'red',
  },
}))

export default BannerList
