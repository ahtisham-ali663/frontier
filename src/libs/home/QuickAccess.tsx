import { useMemo } from 'react'
import { makeStyles } from '@material-ui/core'
import { Typography, FourTiles, InjectHTML } from 'src/blitz'
import { useAppData } from 'src/hooks'
import {
  COMPONENT_WRAPPER,
  HOMEPAGE_ID,
  HOMEPAGE_QUICK_ACCESS,
} from 'src/constants'
const QuickAccess = () => {
  const classes = useStyles()
  const { title, tiles } = useAppData('quickAccessToYourAccount', true)

  const list = useMemo(() => {
    if (!tiles?.list) {
      return []
    }
    const tilesList = tiles?.list?.map((item: any, index: number) => ({
      title: item?.title?.value,
      description: item?.description?.value,
      icon: <InjectHTML value={item?.svgIcon?.rendered} />,
      href: item?.href?.url,
      objectID: `${HOMEPAGE_QUICK_ACCESS[index]}${HOMEPAGE_ID}`,
    }))
    return tilesList
  }, [tiles])

  return (
    <div className={classes.root}>
      <Typography tagType="h2" styleType="h4" className={classes.title}>
        {title?.value}
      </Typography>
      <FourTiles type="light" textAlign="center" tiles={list} />
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    ...COMPONENT_WRAPPER,
    [breakpoints.down('sm')]: {
      padding: 16,
    },
  },
  title: {
    textAlign: 'center',
    margin: '32px 0px',
    [breakpoints.down('xs')]: {
      padding: '0px 16px',
      fontSize: '1.5rem',
      lineHeight: '32px',
    },
  },
}))

export default QuickAccess
