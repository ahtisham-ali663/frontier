import { useAppData } from 'src/hooks'
import { InjectHTML } from 'src/blitz'
import { makeStyles, Grid } from '@material-ui/core'
import { COMPONENT_WRAPPER } from 'src/constants'
import colors from 'src/styles/theme/colors'
const UltrafastInternet = () => {
  const classes = useStyles()
  const { cardsData, title, subtitle }: any = useAppData('Additionalcost', true)
  return (
    <div id="channel-fast-internet" className={classes.root}>
      <div className={classes.container}>
        <Grid container>
          <Grid item md={7} sm={12}>
            <InjectHTML
              className={classes.mainTitle}
              tagType="h3"
              styleType="h3"
              value={title?.value}
            />
          </Grid>
          <Grid item md={5} sm={12}>
            <InjectHTML
              className={classes.subTitle}
              tagType="h6"
              styleType="h6"
              value={subtitle?.value}
            />
          </Grid>
        </Grid>

        <div className={classes.cardsContainer}>
          {cardsData?.targetItems?.map((eachCard: any, index: number) => (
            <div className={classes.card} key={index}>
              <InjectHTML
                color="primary"
                className={classes.heading}
                tagType="h5"
                styleType="h5"
                value={eachCard?.heading?.value}
              />

              <InjectHTML
                className={classes.subHeading}
                tagType="p"
                styleType="p1"
                value={eachCard?.subHeading?.value}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UltrafastInternet

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    padding: '80px 16px',
    backgroundColor: colors.main.midnightExpress,
    [breakpoints.down('md')]: {
      padding: '48px 16px',
    },
  },
  card: {
    backgroundColor: colors.main.white,
    padding: '2rem 2rem 1rem 2rem',
    width: '23%',
    [breakpoints.down('sm')]: {
      width: '100%',
      marginBottom: '2rem',
      padding: '1rem 1em 0rem 1rem',
    },
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    [breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  mainTitle: {
    color: colors.main.greenishBlue,
  },
  subTitle: {
    color: colors.main.white,
    marginBottom: '3rem',
  },
  container: {
    ...COMPONENT_WRAPPER,
    [breakpoints.down('xs')]: {
      padding: 0,
    },
  },
  heading: {
    marginBottom: '1rem',
    [breakpoints.down('xs')]: {
      '& br': {
        display: 'none',
      },
    },
  },
  subHeading: {
    marginBottom: '1rem',
  },
}))
