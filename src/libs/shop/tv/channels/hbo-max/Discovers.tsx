import { useAppData } from 'src/hooks'
import { InjectHTML } from 'src/blitz'
import { makeStyles, Grid } from '@material-ui/core'
import { COMPONENT_WRAPPER } from 'src/constants'
import colors from 'src/styles/theme/colors'
const Discovers = () => {
  const classes = useStyles()

  const { mdImages, title, subtitle, smImages }: any = useAppData(
    'discover',
    true,
  )
  return (
    <div id="channel-fast-internet" className={classes.root}>
      <div className={classes.container}>
        <Grid container>
          <Grid item md={12} sm={12}>
            <InjectHTML
              className={classes.mainTitle}
              tagType="h3"
              styleType="h3"
              value={title?.value}
            />

            <InjectHTML
              className={classes.subTitle}
              tagType="h5"
              styleType="h5"
              value={subtitle?.value}
            />
          </Grid>
        </Grid>

        <div className={classes.root}>
          <Grid container>
            <Grid item md={12} sm={12}>
              <div className={classes.cardsContainer}>
                {mdImages?.targetItems?.map((image: any) => (
                  <img
                    key={image?.image?.alt}
                    alt={image?.image?.alt}
                    src={image?.image?.src}
                    className={classes.mdImages}
                  />
                ))}
              </div>
              <div className={classes.cardsContainer}>
                {smImages?.targetItems?.map((image: any) => (
                  <img
                    key={image?.image?.alt}
                    alt={image?.image?.alt}
                    src={image?.image?.src}
                    className={classes.smImages}
                  />
                ))}
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default Discovers

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    padding: '25px 16px',
    backgroundColor: colors.main.midnightExpress,
    [breakpoints.down('md')]: {
      padding: '48px 16px 29px',
    },
  },
  card: {
    backgroundColor: colors.main.midnightExpress,
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
      display: 'inline',
      flexDirection: 'column',
    },
  },
  mdImages: {
    width: '50%',
  },
  smImages: {
    width: '25%',
  },
  mainTitle: {
    color: colors.main.white,
    textAlign: 'center',
  },
  subTitle: {
    color: colors.main.white,
    textAlign: 'center',
    margin: '1rem 19rem',
    [breakpoints.down('sm')]: {
      margin: '3px',
    },
    [breakpoints.down('md')]: {
      margin: '3px',
    },
  },
  container: {
    ...COMPONENT_WRAPPER,
    maxWidth: '1428px',
    [breakpoints.down('xs')]: {
      padding: 0,
    },
  },
  heading: {
    [breakpoints.down('xs')]: {
      '& br': {
        display: 'none',
      },
    },
  },
}))
