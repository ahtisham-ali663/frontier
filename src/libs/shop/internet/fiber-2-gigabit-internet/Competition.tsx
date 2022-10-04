import { makeStyles } from '@material-ui/core/styles'
import { useAppData } from 'src/hooks'
import { ComparisonTable, Typography } from 'src/blitz'
import { useMemo } from 'react'

const Competition = () => {
  const classes = useStyles()
  const { title, items } = useAppData('comparisonTableUpdated', true)

  const list = useMemo((): any[] => {
    const itemsData: any[] = []
    items?.list?.map((listData: any) => {
      const logo = listData?.logo?.src || ''
      const properties = listData?.properties?.list?.map(
        ({ name, textValue, value }: any) => {
          return {
            name: name?.value || '',
            textValue: textValue?.value,
            value: value?.value,
          }
        },
      )
      itemsData.push({ logo, properties })
    })
    return itemsData
  }, [items])

  return (
    <div className={classes.root}>
      <Typography tagType="h2" styleType="h4" className={classes.title}>
        {title?.value || ''}
      </Typography>
      <div className={classes.comparisonWrapper}>
        <ComparisonTable
          items={list}
          addBorderToHeader
          styleModifier={{
            header: classes.header,
            textAlignCenter: false,
          }}
        />
      </div>
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    maxWidth: 1140,
    margin: '60px auto',
    [breakpoints.down('md')]: {
      padding: 10,
    },
    [breakpoints.down('xs')]: {
      padding: 0,
    },
  },
  comparisonWrapper: {
    marginTop: 64,
    [breakpoints.down('xs')]: {
      marginTop: 20,
    },
  },
  title: {
    textAlign: 'center',
    [breakpoints.down('xs')]: {
      maxWidth: 180,
      margin: 'auto',
    },
  },
  header: {
    '& img': {
      height: 25,
      [breakpoints.down('xs')]: {
        height: 20,
      },
    },
  },
}))

export default Competition
