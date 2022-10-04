import { makeStyles } from '@material-ui/core'
import { Button, Typography } from 'src/blitz'
import { COMPONENT_WRAPPER } from 'src/constants'
import { useAppData } from 'src/hooks'
import colors from 'src/styles/theme/colors'

const PreferToCall = () => {
  const classes = useStyles()

  const { heading, description, contactNumberText, contactNumberSrc }: any =
    useAppData('PreferToCall', true)

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        {heading?.value && (
          <Typography
            tagType="h3"
            styleType="h3"
            fontType="boldFont"
            className={classes.heading}
          >
            {heading?.value}
          </Typography>
        )}
        <div className={classes.rightWrapper}>
          {description?.value && (
            <Typography tagType="p" styleType="h6">
              {description?.value}
            </Typography>
          )}
          {contactNumberText?.value && (
            <Button
              type="link"
              href={'tel:' + contactNumberSrc?.value}
              text={contactNumberText?.value}
              className={classes.callBtn}
            />
          )}
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: { background: colors.main.greenishBlue },
  wrapper: {
    ...COMPONENT_WRAPPER,
    display: 'flex',
    gap: '1.25rem',
    '& p': {
      margin: 0,
    },
    [breakpoints.down('sm')]: {
      flexDirection: 'column',
      flexBasis: 'auto',
      gap: '1rem',
      padding: '4rem 1rem',
    },
    padding: '5rem 1rem',
  },
  heading: {
    order: 1,
    flex: 1,
    [breakpoints.down('sm')]: {
      letterSpacing: '-0.01em',
      alignSelf: 'stretch',
    },
  },
  rightWrapper: {
    order: 2,
    flex: 1,
    marginTop: 0,
    [breakpoints.down('sm')]: {
      alignSelf: 'stretch',
    },
  },
  callBtn: {
    display: 'flex',
    width: 'fit-content',
    marginTop: '1rem',
    fontSize: '1.125rem',
    lineHeight: '1.125rem',
    justifyContent: 'center',
    [breakpoints.down('xs')]: {
      width: '100% !important',
      fontSize: '1.125rem',
    },
  },
}))

export default PreferToCall
