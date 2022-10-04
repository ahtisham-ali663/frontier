import { Button, InjectHTML } from 'src/blitz'
import { makeStyles } from '@material-ui/core'
import { useAppData } from 'src/hooks'
import colors from 'src/styles/theme/colors'

const InternetCredit = () => {
  const { buttonText, buttonUrl, title, description } = useAppData(
    'watchNFL',
    true,
  )
  const classes = useStyles()

  return (
    <div id="internet-credit" className={classes.root}>
      <div className={classes.container}>
        <div className={classes.leftContainer}>
          {title?.value && (
            <InjectHTML tagType="h2" styleType="h3" value={title?.value} />
          )}
        </div>
        <div className={classes.rightContainer}>
          {description?.value && (
            <div>
              <InjectHTML
                tagType="p"
                styleType="p1"
                fontType="mediumFont"
                value={description?.value}
                className={classes.descriptionStyles}
              />
            </div>
          )}
          <Button
            type="link"
            href={buttonUrl?.url}
            text={buttonText?.value}
            className={classes.btnLearn}
          />
        </div>
      </div>
    </div>
  )
}

export default InternetCredit

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    background: colors.main.newBackgroundGray,
    marginBottom: 80,
    [breakpoints.down('xs')]: {
      marginBottom: 130,
    },
  },
  container: {
    maxWidth: 1144,
    padding: '1rem',
    width: '100%',
    margin: 'auto',
    display: 'flex',
    alignItems: 'flex-start',
    paddingTop: '3rem',
    paddingBottom: '3rem',
    [breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  leftContainer: { flex: 1 },
  rightContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    [breakpoints.down('sm')]: {
      marginTop: '1rem',
      '& p span': { fontSize: '1.125rem', lineHeight: '1.625rem' },
    },
    [breakpoints.down('xs')]: {
      marginTop: 0,
    },
  },
  btnLearn: {
    marginTop: '1rem',
    width: 'fit-content',
    fontSize: '1.125rem',
    lineHeight: 1,
    display: 'flex',
    [breakpoints.down('xs')]: {
      display: 'block',
      fontSize: '1.125rem',
      minHeight: 'auto',
      padding: '14px',
      width: '100%',
    },
  },
  descriptionStyles: {
    marginTop: 0,
    [breakpoints.down('xs')]: {
      fontSize: '1.125rem',
      lineHeight: '1.625rem',
      marginTop: 16,
    },
  },
}))
