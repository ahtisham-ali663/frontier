import { makeStyles } from '@material-ui/core/styles'
import { useAppData } from 'src/hooks'
import { Button, ComparisonTable, Typography } from 'src/blitz'
import { IComparison } from 'src/blitz/components/ComparisonTable/types'
import { useMemo } from 'react'
import { COMPARISON } from 'src/constants'
import colors from 'src/styles/theme/colors'

const CompareFibers = () => {
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

  const onButtonClick = () => {
    //@ts-ignore
    s_objectID = COMPARISON.replace('{NAME}', buttonText?.value)
  }

  return (
    <div id="compare-fibers" className={classes.root}>
      <Typography tagType="h2" styleType="h4" className={classes.title}>
        {title?.value || ''}
      </Typography>
      <div className={classes.comparisonWrapper}>
        <ComparisonTable
          items={list}
          addBorderToHeader
          styleModifier={{
            header: classes.header,
            textStyleType: 'p1',
            showRedCheckMarks: true,
          }}
        />
      </div>
      <Typography className={classes.legal} tagType="p" styleType="legal">
        {legal?.value || ''}
      </Typography>
      <div className={classes.cta}>
        <Button
          type="link"
          text={buttonText?.value}
          href={buttonURL?.url}
          onClick={onButtonClick}
        />
      </div>
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    maxWidth: 1140,
    margin: '84px auto 67px',
    [breakpoints.down('md')]: {
      padding: '0 16px',
    },
  },
  comparisonWrapper: {
    marginTop: 64,
    borderTop: `1px solid ${colors.main.gray90}`,
    [breakpoints.down('md')]: {
      marginTop: 30,
    },
  },
  title: {
    textAlign: 'center',
  },
  header: {
    '& img': {
      height: 25,
      [breakpoints.down('xs')]: {
        height: 20,
      },
    },
  },
  legal: {
    display: 'block',
  },
  cta: {
    display: 'block',
    textAlign: 'center',
    margin: '48px 0',
    marginBottom: '-12px',
  },
}))

export default CompareFibers
