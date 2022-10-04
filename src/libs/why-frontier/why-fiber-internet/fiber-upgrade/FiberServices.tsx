import { makeStyles, Grid } from '@material-ui/core'
import { Typography, InjectHTML } from 'src/blitz'
import colors from 'src/styles/theme/colors'
import { COMPONENT_WRAPPER } from 'src/constants'
import { useAppData, useWindowDimensions } from 'src/hooks'
const midDevice = 768
const FiberServices = () => {
  const styles = useStyles()
  const { width } = useWindowDimensions()
  const {
    list: { targetItems = [] },
    title,
    subTitle,
  } = useAppData('fiberServices', true)
  return (
    <div id="fiber-impact" className={styles.root}>
      <Grid container>
        <Grid item md={12}>
          <Typography tagType="h2" styleType="h3" className={styles.heading}>
            {title?.value}
          </Typography>
          <Typography tagType="p" styleType="p1" className={styles.subHeading}>
            {subTitle?.value}
          </Typography>
        </Grid>
        {targetItems?.map((item: any, key: number) => {
          return (
            <Grid
              key={key}
              container
              className={styles.innerContainer}
              direction={item?.direction?.item?.value?.value}
            >
              <Grid item sm={5} xs={12}>
                <div className={styles.wrapper}>
                  <InjectHTML
                    tagType="h3"
                    styleType="h3"
                    className={styles.title}
                    value={item?.title?.value}
                  />
                  <InjectHTML
                    tagType="p"
                    styleType="p1"
                    className={styles.contentStyles}
                    value={item?.description?.value}
                  />
                </div>
              </Grid>
              <Grid item sm={7} xs={12}>
                <div className={styles.figure}>
                  <img
                    className={styles.image}
                    width="100%"
                    src={
                      width > midDevice
                        ? item?.image?.src
                        : item?.mobileImage?.src
                    }
                    alt={item?.image?.alt}
                  />
                </div>
              </Grid>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    ...COMPONENT_WRAPPER,
    padding: '3.75rem 16px',
    '& .MuiGrid-item': {
      overflow: 'hidden',
      [breakpoints.down('xs')]: {
        maxWidth: 'unset',
        flexBasis: 'unset',
      },
    },
    [breakpoints.down('sm')]: {
      padding: '2rem 1rem 0rem 1rem',
    },
  },
  figure: {
    overflow: 'hidden',
    backgroundColor: colors.main.newBackgroundGray,
    [breakpoints.up('lg')]: {
      height: '100%',
    },
  },
  image: {
    [breakpoints.up('lg')]: {
      height: '100%',
      objectFit: 'cover',
      display: 'flex',
    },
  },
  heading: {
    marginBottom: 16,
    textAlign: 'center',
    [breakpoints.down('sm')]: {
      fontSize: '2.625rem',
      lineHeight: '50px',
    },
  },
  subHeading: {
    margin: '0 0 78px',
    textAlign: 'center',
    [breakpoints.down('sm')]: {
      margin: '0 0 52px',
    },
  },
  wrapper: {
    padding: '56px 66px',
    minHeight: 400,
    backgroundColor: colors.main.newBackgroundGray,
    [breakpoints.up('lg')]: {
      height: '100%',
    },
    [breakpoints.up('sm')]: {
      padding: 30,
      minHeight: 330,
    },
    [breakpoints.down('xs')]: {
      padding: '1rem',
      minHeight: 'auto',
    },
  },
  title: {
    marginBottom: '1rem',
    [breakpoints.down('xs')]: {
      fontSize: '1.5rem',
      lineHeight: '2rem',
    },
  },
  contentStyles: {
    margin: 0,
    fontSize: '1.125rem',
    lineHeight: '1.625rem',
    [breakpoints.down('xs')]: {
      fontSize: '1rem',
    },
  },
  innerContainer: {
    marginBottom: '2rem',
    [breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
}))

export default FiberServices
