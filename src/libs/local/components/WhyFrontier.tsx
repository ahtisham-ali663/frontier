import { useMemo } from 'react'
import { makeStyles } from '@material-ui/core'
import { Tile } from 'src/blitz'
import colors from 'src/styles/theme/colors'
const WhyFrontier = (data: any) => {
  const classes = useStyles()
  const { tiles }: any = data?.data || {}

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
          styleType: 'h4',
        },
        description: {
          value: item?.description?.value,
          styleType: 'p1',
          tagType: 'p',
        },
        links: [
          {
            href: item?.linkUrl?.url,
            text: {
              children: item?.linkText?.value,
              styleType: 'p1',
              tagType: 'span',
              href: item?.linkUrl?.url,
            },
            id: item?.linkText?.value?.toLowerCase()?.includes('contact')
              ? 'enableChat'
              : '',
            target: '_blank',
          },
        ],
      }
      tilesList.push(payload)
    }
    return tilesList
  }, [tiles])

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        {list.map((tile, i) => (
          <Tile
            key={i}
            title={tile?.title}
            description={tile?.description}
            links={tile?.links}
            className={classes.tile}
          />
        ))}
      </div>
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    background: colors.main.white,
  },
  wrapper: {
    maxWidth: 1146,
    margin: 'auto',
    padding: '5rem  7.5rem',
    boxSizing: 'content-box',
    display: 'flex',
    gap: '3rem',
    [breakpoints.down('sm')]: {
      padding: '48px 16px',
      flexDirection: 'column',
    },
  },
  tile: {
    flex: 1,
    padding: 0,
    alignContent: 'space-between',
    flexDirection: 'column',
    display: 'flex',
    '& p span': {
      display: 'unset',
      [breakpoints.down('xs')]: {
        fontSize: '16px',
        lineHeight: '1.5rem',
      },
    },
    '& h3': {
      minHeight: '5rem',
      [breakpoints.down('md')]: {
        minHeight: '7rem',
      },
      [breakpoints.down('sm')]: {
        minHeight: 'auto',
      },
    },
    '& p': { flex: 1, marginBottom: '1.5rem' },
    '& a': {
      marginRight: 'auto',
      textDecoration: 'none',
      '& span': {
        fontWeight: '700',
        textDecoration: 'underline',
        '&:hover': {
          color: colors.main.brightRed,
        },
      },
    },
  },
}))

export default WhyFrontier
