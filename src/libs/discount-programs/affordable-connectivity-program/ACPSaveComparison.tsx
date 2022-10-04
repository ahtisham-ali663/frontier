import { useMemo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ComparisonTable, InjectHTML } from 'src/blitz'
import { IComparison } from 'src/blitz/components/ComparisonTable/types'
import colors from 'src/styles/theme/colors'
import { useAppData } from 'src/hooks'
import { QuestionIcon } from 'src/blitz/assets/react-icons'

const ACPSaveComparison = () => {
  const classes = useStyles()
  const { title, items, legal, headerNameTitle } = useAppData(
    'ACPSaveComparison',
    true,
  )

  const list = useMemo((): IComparison[] => {
    const itemsData: IComparison[] = []
    items?.list?.map((listData: any) => {
      const header = listData?.headerDescription?.value || ''
      const properties = listData?.properties?.list?.map(
        ({ name, textValue, value, isPrimary, toolTip }: any) => {
          return {
            name: name?.value || '',
            textValue: textValue?.value,
            value: value?.value,
            isPrimary: !!isPrimary?.value,
            toolTip: toolTip?.value,
          }
        },
      )
      itemsData.push({ properties, header })
    })
    return itemsData
  }, [items])

  return (
    <div id="fiber-offering" className={classes.root}>
      <InjectHTML
        tagType="h2"
        styleType="h3"
        className={classes.title}
        value={title?.value || ''}
      />

      <div className={classes.comparisonWrapper}>
        <ComparisonTable
          items={list}
          addBorderToHeader
          toolTipIcon={<QuestionIcon />}
          dropShadowForTooltip
          hideBorderForTooltip
          showBorderRadiusForTooltip
          headerNameTitle={headerNameTitle?.value}
          styleModifier={{
            header: classes.rowHeader,
            textStyleType: 'p1',
            showRedCheckMarks: true,
            backgroundEvenRow: false,
            roundedBorders: true,
            valueTextCSS: classes.valueClass,
            rowHeaderLabel: classes.rowHeader,
            rowClassName: classes.rowClass,
            tableHeaderClassName: classes.tableHeaderClass,
            backgroundColor: colors.main.newBackgroundGray,
          }}
        />
      </div>
      <InjectHTML
        className={classes.legal}
        tagType="p"
        styleType="legal"
        value={legal?.value}
      />
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    maxWidth: 1200,
    margin: '60px auto',
    [breakpoints.down('md')]: {
      padding: '0 16px',
    },
  },
  comparisonWrapper: {
    marginTop: 50,
    borderTop: `1px solid ${colors.main.gray90}`,
    [breakpoints.down('md')]: {
      marginTop: 30,
    },
  },
  title: {
    textAlign: 'left',
    [breakpoints.down('md')]: {
      '& br': { display: 'none' },
    },
  },
  legal: {
    display: 'block',
    '& a': { fontFamily: 'PP Object Sans' },
  },
  cta: {
    display: 'block',
    textAlign: 'center',
    margin: '40px 0',
  },
  valueClass: {
    fontWeight: 400,
  },
  rowClass: {
    justifyContent: 'space-around',
    '& div:nth-of-type(4) div span': {
      fontFamily: 'PP Object Sans Bold',
    },
    [breakpoints.down('sm')]: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
    '& div div span': {
      [breakpoints.down('sm')]: {
        fontSize: '1rem',
        lineHeight: '1.5rem',
      },
    },
    '& svg': { position: 'relative', top: '3px', marginLeft: '3px' },
    '& div:nth-of-type(1) > span > div > span': {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.625rem',
      textAlign: 'left',
      marginLeft: '2.85rem',
      [breakpoints.down('md')]: {
        marginLeft: '0',
      },

      [breakpoints.down('xs')]: {
        fontFamily: 'PP Object Sans Bold',
      },
    },
  },
  rowHeader: {
    [breakpoints.down('sm')]: {
      padding: '0.5rem 0',
    },
    '& div h3': {
      fontSize: '1.125rem',
      lineHeight: '1.625rem',
      [breakpoints.down('sm')]: {
        fontSize: '1rem',
        lineHeight: '1.5rem',
      },
    },
  },
  tableHeaderClass: {
    justifyContent: 'space-between',
    padding: '2rem 1.5rem 2rem',
    [breakpoints.down('sm')]: {
      padding: '1.5rem 0',
    },
  },
}))

export default ACPSaveComparison
