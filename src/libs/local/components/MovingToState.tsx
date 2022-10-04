import { makeStyles } from '@material-ui/core'
import { ImagePerk, Typography, InjectHTML } from 'src/blitz'

const MovingToState = (data: any) => {
  const compData = data?.data || {}
  const classes = useStyles()

  return (
    <div id="moving_to_state" className={classes.container}>
      <ImagePerk
        className={classes.boxText}
        backgroundColor="white"
        backgroundColorContent="black"
        stripeColor="primary"
        content={
          <>
            <Typography color="secondary" tagType="h2" styleType="h3">
              {compData?.heading?.value}
            </Typography>
            <InjectHTML
              color="tertiary"
              tagType="p"
              styleType="p1"
              className={classes.subHeading}
              value={compData?.subHeading?.value}
            />
          </>
        }
        tabletBackgroundImage={compData?.tabletBackgroundImage ?? {}}
      />
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  container: {
    [breakpoints.down('sm')]: {
      padding: '1.5rem 0',
    },
  },
  subHeading: {
    marginTop: '1rem',
    [breakpoints.down('sm')]: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
  },
  boxText: {
    [breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column-reverse',
    },
    '& div:first-child': {
      '& h3': {
        margin: '0 0 1rem 0',
      },
      '& div:first-child': {
        [breakpoints.down('sm')]: {
          bottom: '75%',
        },
        [breakpoints.down('xs')]: {
          bottom: '79%',
        },
      },
      '& div:nth-child(2)': {
        [breakpoints.down('sm')]: {
          bottom: 'calc(75% - 45px)',
        },
        [breakpoints.down('xs')]: {
          bottom: 'calc(79% - 38px)',
        },
      },
      '& div:last-child': {
        [breakpoints.down('sm')]: {
          bottom: 'calc(75% - 90px)',
        },
        [breakpoints.down('xs')]: {
          bottom: 'calc(79% - 78px)',
        },
      },
    },
    '& div:last-child > div:first-child': {
      [breakpoints.up('md')]: {
        width: '34.875rem',
      },
    },
  },
}))

export default MovingToState
