import { useMemo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, ComparisonTable, Typography, InjectHTML } from 'src/blitz'
import { IComparison } from 'src/blitz/components/ComparisonTable/types'
import colors from 'src/styles/theme/colors'
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
          addBorderToHeader
          styleModifier={{
            header: classes.header,
            textStyleType: 'p1',
            showRedCheckMarks: true,
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
      padding: '0 12px',
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
    textAlign: 'center',
  },
  header: {
    [breakpoints.down('md')]: {
      padding: '8px 0',
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
  },
  cta: {
    display: 'block',
    textAlign: 'center',
    margin: '40px 0',
  },
}))

export default FiberOfferings
