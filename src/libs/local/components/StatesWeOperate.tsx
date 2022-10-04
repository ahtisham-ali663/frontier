import { makeStyles } from '@material-ui/core'
import colors from 'src/styles/theme/colors'
import { Button, InjectHTML, Typography } from 'src/blitz'

const StatesWeOperate = ({ data, componentName }: any) => {
  const classes = useStyles()
  const { states, subtitle, title, buttonText, buttonHref } = data

  const backgroundColor =
    componentName === 'city' ? colors.main.newBackgroundGray : colors.main.white
  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className={classes.root}
      data-testid="statesWeOperate"
    >
      <div className={classes.container}>
        <div className={classes.mapWrapper}>
          <div className={classes.titleWrapper}>
            <Typography tagType="h2" styleType="h3" className={classes.title}>
              {title?.value}
            </Typography>
            <div className={classes.subtitleWrapper}>
              <Typography
                tagType="p"
                styleType="p1"
                className={classes.subtitle}
              >
                {subtitle?.value}
              </Typography>
              <Button
                className={classes.checkButton}
                type="link"
                text={buttonText?.value}
                href={buttonHref?.url}
                hoverVariant="primary"
              />
            </div>
          </div>
        </div>
        <div className={classes.stateNameWrapper}>
          <InjectHTML className={classes.stateName} value={states?.value} />
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    backgroundColor: colors.main.white,
    color: colors.main.white,
  },
  container: {
    maxWidth: '1160px',
    margin: 'auto',
    padding: '132px 0px',
    [breakpoints.down('md')]: {
      padding: '80px 24px',
    },
  },
  mapWrapper: {
    maxWidth: '920px',
    margin: 'auto',
  },
  title: {
    width: '55%',
    paddingRight: '16px',
    marginBottom: '1rem',
    [breakpoints.down('sm')]: {
      width: '100%',
      textAlign: 'left',
    },
  },
  highlightCircle: {
    height: 20,
    width: 20,
    display: 'block',
    marginRight: 8,
  },
  highlightWrapper: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 20,
    position: 'absolute',
    bottom: '4px',
    [breakpoints.down('xs')]: {
      bottom: '-24px',
    },
  },
  coverageImage: {
    width: '100%',
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    [breakpoints.down('sm')]: {
      flexDirection: 'column',
      textAlign: 'center',
    },
  },
  subtitleWrapper: {
    width: '42%',
    [breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  subtitle: {
    textAlign: 'left',
    margin: 0,
    [breakpoints.down('sm')]: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
  },
  checkButton: {
    width: 'fit-content',
    textTransform: 'uppercase',
    marginTop: '16px',
    display: 'block',
    [breakpoints.down('xs')]: {
      width: 'auto',
    },
  },
  stateNameWrapper: {
    width: '100%',
    maxWidth: '1160px',
    margin: 'auto',
    borderTop: `4px solid ${colors.main.brightRed}`,
    marginTop: '56px',
    paddingTop: 32,
  },
  stateName: {
    '& span ul': {
      maxWidth: '916px',
      padding: '0px',
      columnCount: '4',
      margin: '0 auto',
      flexWrap: 'wrap',

      [breakpoints.down('xs')]: {
        columnCount: '2',
      },
    },
    '& span ul li': {
      color: colors.main.dark,
      textAlign: 'left',
      listStyleType: 'none',
      justifyContent: 'flex-start',
      fontSize: '1.125rem',
      lineHeight: '1.625rem',
      marginBottom: '.5rem',
      fontWeight: 400,
      [breakpoints.down('xs')]: {
        fontSize: '1rem',
        lineHeight: '1.5rem',
      },
      '& a': {
        color: colors.main.dark,
        textDecoration: 'underline',
        fontWeight: 700,
        '&:hover': {
          color: colors.main.brightRed,
        },
      },
    },
  },
  mapContainer: {
    marginTop: '36px',
    position: 'relative',
  },
}))

export default StatesWeOperate
