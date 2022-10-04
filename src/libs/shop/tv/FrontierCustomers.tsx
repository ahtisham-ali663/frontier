import { makeStyles } from '@material-ui/core'
import { InjectHTML, Typography } from 'src/blitz'
import { COMPONENT_WRAPPER } from 'src/constants'
import { useAppData } from 'src/hooks'
import colors from 'src/styles/theme/colors'

const FrontierCustomers: React.FC = () => {
  const classes = useStyles()

  const {
    heading,
    description,
    strikeprice,
    actualprice,
    details,
    legalNote,
  }: any = useAppData('FrontierCustomers', true)
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        {heading?.value && (
          <InjectHTML
            tagType="h2"
            styleType="h2"
            fontType="boldFont"
            color="secondary"
            className={classes.heading}
            value={heading?.value}
          />
        )}
        <div className={classes.bottomWrapper}>
          {description?.value && strikeprice?.value && actualprice?.value && (
            <div className={classes.bottomContent}>
              <InjectHTML
                tagType="p"
                styleType="h4"
                color="tertiary"
                fontType="regularFont"
                value={description?.value}
              />

              <Typography
                tagType="span"
                styleType="p1"
                className={classes.strikeprice}
                color="tertiary"
              >
                {strikeprice?.value}
              </Typography>
              <Typography tagType="span" styleType="h5" color="tertiary">
                {actualprice?.value}
              </Typography>
            </div>
          )}
          {details?.value && legalNote?.value && (
            <div className={classes.bottomContent}>
              <Typography tagType="p" styleType="p1" color="tertiary">
                {details.value}
              </Typography>
              <Typography tagType="p" styleType="legal" color="tertiary">
                {legalNote.value}
              </Typography>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    backgroundColor: colors.main.midnightExpress,
  },
  wrapper: {
    ...COMPONENT_WRAPPER,
    marginBottom: '8.75rem',
    [breakpoints.down('sm')]: {
      margin: '0 1rem 1rem 1rem',
    },
  },
  heading: {
    '&::first-line': {
      color: colors.main.white,
    },
    [breakpoints.down('sm')]: {
      paddingRight: '2rem',
      marginBottom: '1rem',
    },
    paddingTop: '2.5rem',
    paddingBottom: '3rem',
    borderBottom: `4px solid ${colors.main.greenishBlue}`,
  },
  bottomWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    paddingBottom: '8.75rem',
    [breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingBottom: '4.5rem',
    },
  },
  bottomContent: {
    flex: 1,
    marginTop: '3.75rem',
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
}))

export default FrontierCustomers
