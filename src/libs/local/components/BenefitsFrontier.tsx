import { useMemo } from 'react'
import { makeStyles } from '@material-ui/core'
import { Typography, Tile } from 'src/blitz'
import colors from 'src/styles/theme/colors'
import { COMPONENT_WRAPPER } from 'src/constants'

const BenefitsFrontier = (data: any) => {
  const classes = useStyles()
  const { title, tiles }: any = data?.data || {}

  const list = useMemo(() => {
    if (!tiles?.list) {
      return []
    }
    const tilesList = []
    for (const item of tiles?.list) {
      const payload: any = {
        title: {
          children: item?.title?.value,
          tagType: 'h3',
          styleType: 'h5',
        },
        description: {
          value: item?.description?.value,
          styleType: 'p1',
          tagType: 'p',
          className: classes.tiledescription,
        },
      }
      tilesList.push(payload)
    }
    return tilesList
  }, [tiles])

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.titleSection}>
          <Typography tagType="h2" styleType="h3" color="secondary">
            {title?.value}
          </Typography>
        </div>
        <div className={classes.tiles}>
          {list.map((tile, i) => (
            <Tile
              key={`${tile?.title?.children}-${i}`}
              backgroundColor="white"
              title={tile?.title}
              description={tile?.description}
              ctas={tile?.ctas}
              className={classes.tile}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    background: colors.main.dark,
  },
  wrapper: {
    ...COMPONENT_WRAPPER,
    padding: '6.25rem 1rem',
    [breakpoints.down('sm')]: {
      padding: '3rem 1rem',
    },
  },
  titleSection: {
    marginBottom: '3rem',
    maxWidth: '1100px',
    [breakpoints.down('sm')]: {
      marginBottom: '2rem',
    },
  },
  tiles: {
    display: 'flex',
    gap: '2.5rem',
    [breakpoints.down('sm')]: {
      gap: '2rem',
      flexDirection: 'column',
    },
    '& h3': {
      minHeight: '4rem',
      [breakpoints.down('sm')]: {
        minHeight: 'auto',
        fontSize: '1.125rem',
      },
    },
  },
  tile: {
    padding: '2.5rem',
    [breakpoints.down('sm')]: {
      padding: '2em',
    },
    '& p': {
      marginBottom: 0,
    },
  },
  tiledescription: { fontSize: '1rem', lineHeight: '1.5rem' },
}))

export default BenefitsFrontier
