import { Button, InjectHTML } from 'src/blitz'
import { makeStyles } from '@material-ui/core'
import colors from 'src/styles/theme/colors'
import { useAppData } from 'src/hooks'

const InternetCredit = () => {
  const { buttonText, buttonUrl, title, description } = useAppData(
    'InternetCredit',
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
                styleType="h5"
                fontType="boldFont"
                value={description?.value}
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
  root: { backgroundColor: colors.main.greenishBlue },
  container: {
    maxWidth: 1232,
    padding: '1rem',
    width: '100%',
    margin: 'auto',
    display: 'flex',
    alignItems: 'flex-start',
    paddingTop: '5rem',
    paddingBottom: '6rem',
    [breakpoints.down('sm')]: {
      flexDirection: 'column',
      paddingTop: '3rem',
      paddingBottom: '3rem',
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
  },
  btnLearn: {
    marginTop: '2rem',
    width: 'fit-content',
    fontSize: '1.125rem',
    [breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}))
