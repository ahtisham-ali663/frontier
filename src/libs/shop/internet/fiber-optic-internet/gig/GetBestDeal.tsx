import { useMemo } from 'react'
import { makeStyles } from '@material-ui/core'
import { Typography, FourTiles } from 'src/blitz'
import { useAppData } from 'src/hooks'
import colors from 'src/styles/theme/colors'

const GetBestDeal = () => {
  const classes = useStyles()
  const { title, tiles }: any = useAppData('getBestDeal', true)

  const list = useMemo(() => {
    if (!tiles?.list) {
      return []
    }
    const tilesList = []
    for (const item of tiles?.list) {
      const payload: any = {
        title: item?.title?.value,
        description: item?.description?.value,
      }
      tilesList.push(payload)
    }
    return tilesList
  }, [tiles])

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Typography
          tagType="h4"
          styleType="h4"
          className={classes.title}
          color="secondary"
        >
          {title?.value}
        </Typography>
        <FourTiles
          type="red"
          textAlign="left"
          cardClassName={classes.tileCard}
          tiles={list}
          titleClassName={classes.tileTitle}
          isClickable={false}
          mobileOneCol
        />
      </div>
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    background: colors.main.dark,
  },
  wrapper: {
    maxWidth: 1332,
    margin: 'auto',
    padding: '80px 0px',
    [breakpoints.down('sm')]: {
      padding: '48px 16px',
    },
  },
  title: {
    textAlign: 'center',
    marginTop: '16px',
    marginBottom: '48px',
  },
  tileTitle: {
    minHeight: 44,
    paddingRight: 60,
    color: colors.main.brightRed,
    [breakpoints.down('sm')]: {
      paddingRight: 0,
    },
  },
  tileCard: {
    paddingBottom: 60,
    [breakpoints.down('sm')]: {
      paddingBottom: 32,
    },
  },
}))

export default GetBestDeal
