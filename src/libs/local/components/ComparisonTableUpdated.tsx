import { makeStyles } from '@material-ui/core/styles'
import { ComparisonTable, InjectHTML } from 'src/blitz'
import { useMemo } from 'react'

const ComparisonTableUpdated = ({ data }: any) => {
  const classes = useStyles()
  const { title, items } = data

  const list = useMemo((): any[] => {
    const itemsData: any[] = []
    items?.list?.map((listData: any) => {
      const logo = listData?.logo?.src || ''
      const properties =
        listData?.properties?.list?.map(({ name, textValue, value }: any) => {
          return {
            name: name?.value || '',
            textValue: textValue?.value,
            value: value?.value,
          }
        }) || []

      itemsData.push({ logo, properties })
    })
    return itemsData
  }, [items])

  return (
    <div data-testid="comparison-table" className={classes.root}>
      <InjectHTML
        tagType="h2"
        styleType="h2"
        className={classes.title}
        value={title?.value}
      />
      <div className={classes.comparisonWrapper}>
        <ComparisonTable
          items={list}
          addBorderToHeader
          styleModifier={{
            header: classes.header,
            textAlignCenter: false,
            textStyleType: 'p2',
            valueTextCSS: classes.compTableDetail,
            rowValueClassName: classes.rowValue,
          }}
        />
      </div>
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    maxWidth: 1100,
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
  rowValue: {
    [breakpoints.down('xs')]: {
      paddingBottom: '24px',
    },
  },
  title: {
    textAlign: 'left',
    [breakpoints.down('xs')]: {
      textAlign: 'center',
      '& span': { '& span': { display: 'block' } },
    },
  },
  compTableDetail: {
    fontWeight: 400,
    [breakpoints.down('xs')]: {
      fontSize: '.75rem',
      lineHeight: '1rem',
      '& span': { display: 'block' },
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

export default ComparisonTableUpdated
