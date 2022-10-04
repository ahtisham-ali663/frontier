import { useMemo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, ComparisonTable, Typography, InjectHTML } from 'src/blitz'
import { IComparison } from 'src/blitz/components/ComparisonTable/types'
import { useAppData } from 'src/hooks'
import { FIBER_OFFERINGS } from 'src/constants'

const FiberOfferings = () => {
  const classes = useStyles()
  const { title, items, legal, buttonText, buttonURL } = useAppData(
    'comparisonTableUpdated',
    true,
  )

  const list = useMemo((): IComparison[] => {
    const itemsData: IComparison[] = []
    items?.list?.map((listData: any) => {
      const header = listData?.headerDescription?.value || ''
      const properties = listData?.properties?.list?.map(
        ({ name, textValue, value, isPrimary, toolTip, header }: any) => {
          return {
            name: name?.value || '',
            textValue: textValue?.value,
            value: value?.value,
            isPrimary: !!isPrimary?.value,
            toolTip: toolTip?.value,
            header: header?.value,
          }
        },
      )
      itemsData.push({ properties, header })
    })
    return itemsData
  }, [items])

  console.log(list)

  const onButtonClick = () => {
    //@ts-ignore
    s_objectID = FIBER_OFFERINGS.replace('{NAME}', buttonText?.value)
  }

  return (
    <div id="fiber-offering" className={classes.root}>
      <Typography tagType="h2" styleType="h3" className={classes.title}>
        {title?.value || ''}
      </Typography>
      <div className={classes.comparisonWrapper}>
        <ComparisonTable
          items={list}
          styleModifier={{
            rowHeaderLabel: classes.rowHeaderStles,
            header: classes.header,
            textStyleType: 'p1',
            showRedCheckMarks: true,
            headerClassName: classes.headerStyles,
            tableHeaderClassName: classes.tableHeader,
            rowValueClassName: classes.tableRowClass,
            primaryCellClassName: classes.primaryCell,
            valueTextCSS: classes.tableLabelStyles,
          }}
        />
      </div>
      <InjectHTML
        className={classes.legal}
        tagType="p"
        styleType="legal"
        value={legal?.value}
      />
      <div className={classes.cta}>
        <Button
          type="link"
          text={buttonText?.value}
          href={buttonURL?.url}
          onClick={onButtonClick}
          className={classes.btnStyle}
        />
      </div>
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    maxWidth: 1200,
    margin: '60px auto 170px auto',
    [breakpoints.down('md')]: {
      padding: '0 16px',
      marginTop: 0,
      marginBottom: 76,
    },
    [breakpoints.down('sm')]: {
      marginBottom: 76,
    },
  },
  comparisonWrapper: {
    marginTop: 50,
    [breakpoints.down('md')]: {
      marginTop: 30,
    },
  },
  title: {
    textAlign: 'center',
    fontSize: '42px',
    lineHeight: '50px',
    [breakpoints.down('md')]: {
      padding: '20px 0',
    },
  },
  btnStyle: {
    padding: '11.5px 34.6px',
    [breakpoints.down('xs')]: {
      padding: '10px 34.6px',
      display: 'block',
    },
  },
  rowHeaderStles: {
    fontSize: '1.125rem',
    lineHeight: '1.625rem',
    padding: '1rem',
    [breakpoints.down('xs')]: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
  },
  header: {
    fontSize: '30px',
    lineHeight: '38px',
    [breakpoints.down('xs')]: {
      fontSize: '16px',
      lineHeight: '24px',
    },
    '& img': {
      height: 25,
      [breakpoints.down('xs')]: {
        height: 20,
      },
    },
  },
  legal: {
    display: 'block',
    paddingLeft: 16,
    fontSize: '12px',
    [breakpoints.down('xs')]: {
      paddingLeft: 0,
      lineHeight: '14px',
    },
  },
  cta: {
    display: 'block',
    textAlign: 'center',
    margin: '40px 0',
  },
  headerStyles: {
    fontSize: '1.875rem',
    lineHeight: '2.375rem',
    [breakpoints.down('xs')]: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
  },
  tableHeader: {
    [breakpoints.down('xs')]: {
      border: 'none',
    },
  },
  tableRowClass: {
    [breakpoints.down('xs')]: {
      padding: 0,
      marginBottom: 32,
    },
  },
  primaryCell: {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
  },
  tableLabelStyles: {
    fontSize: '1.125rem',
    lineHeight: '1.625rem',
  },
}))

export default FiberOfferings
