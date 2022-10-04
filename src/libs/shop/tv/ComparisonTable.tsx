import { useMemo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ComparisonTable, Typography, ButtonWithChatLink } from 'src/blitz'
import { useAppData } from 'src/hooks'
import { COMPONENT_WRAPPER } from 'src/constants'

const Comparison = () => {
  const classes = useStyles()
  const {
    title,
    items,
    primaryButtonText,
    primaryButtonUrl,
    chatNowText,
    alreadyACustomerText,
  } = useAppData('tvCompareTable', true)

  const list = useMemo((): any[] => {
    const itemsData: any[] = []
    items?.list?.map((listData: any) => {
      const logo = listData?.logo?.src || ''
      const alt = listData?.logo?.alt || 'YouTube TV'
      const properties = listData?.properties?.list?.map(
        ({ name, textValue, value, iconSource }: any) => {
          return {
            name: name?.value || '',
            textValue: textValue?.value,
            value: value?.value,
            iconSource: iconSource?.value,
          }
        },
      )
      itemsData.push({ logo, properties, alt })
    })
    return itemsData
  }, [items])

  return (
    <div className={classes.root}>
      <Typography tagType="h2" styleType="h3" className={classes.title}>
        {title?.value || ''}
      </Typography>
      <div className={classes.comparisonWrapper}>
        <ComparisonTable
          items={list}
          addBorderToHeader={false}
          styleModifier={{
            header: classes.header,
            textAlignCenter: true,
            hidePreferredRowValue: true,
            valueTextCSS: classes.valueText,
            rowHeaderLabel: classes.rowHeaderLabel,
            backgroundEvenRow: false,
          }}
        />
      </div>
      <div className={classes.planContainer}>
        <ButtonWithChatLink
          buttonName={primaryButtonText?.name}
          hoverVariant="primary"
          buttonLink={primaryButtonUrl?.url}
          bgType="dark"
          labelLinkText={chatNowText?.value}
          labelName={alreadyACustomerText?.value}
          labelFontType="mediumFont"
          labelNameColor="black"
          labelLinkTextColor="red"
          labelStyleType="p2"
          labelTagType="div"
          chatClassName={classes.alreadyACustomerContainer}
          btnClassName={classes.btnName}
        />
      </div>
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    ...COMPONENT_WRAPPER,
    margin: '60px auto',
    [breakpoints.down('sm')]: {
      margin: '0',
      marginTop: '2rem',
    },
  },
  comparisonWrapper: {
    marginTop: 64,
    maxWidth: 1000,
    margin: 'auto',
    [breakpoints.down('xs')]: {
      marginTop: 20,
    },
  },
  title: {
    textAlign: 'center',
    [breakpoints.down('xs')]: {
      padding: '0 1rem',
      margin: 'auto',
    },
  },
  header: {
    '& img': {
      height: 56,
      maxWidth: 'unset',
    },
  },
  planContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 32,
    textAlign: 'center',
    flexDirection: 'column',
  },
  alreadyACustomerContainer: {
    justifyContent: 'center',
    marginTop: '32px !important',
  },
  btnName: {
    width: 'unset',
    display: 'inline-flex',
    maxWidth: 'fit-content',
    marginTop: '3rem',
    [breakpoints.down('xs')]: {
      margin: 'auto',
      marginTop: '1rem',
      paddingLeft: '1rem',
      paddingRight: '1rem',
    },
  },
  valueText: {
    maxWidth: 225,
    fontWeight: 'normal',
    [breakpoints.down('xs')]: {
      fontSize: '14px !important',
      paddingBottom: '22px !important',
    },
  },
  rowHeaderLabel: {
    flexDirection: 'column',
    alignItems: 'flex-start !important',
    maxWidth: 300,
    [breakpoints.down('xs')]: {
      alignItems: 'center !important',
      fontSize: '16px !important',
      paddingBottom: '16px !important',
      paddingTop: '16px !important',
    },
  },
}))

export default Comparison
