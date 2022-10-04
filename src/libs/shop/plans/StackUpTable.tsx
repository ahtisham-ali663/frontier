import { useMemo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ComparisonTable, Typography, ButtonWithChatLink } from 'src/blitz'
// import { useAppData } from 'src/hooks'
import { COMPONENT_WRAPPER } from 'src/constants'

const datasource = {
  title: {
    value: 'How we Stack up',
  },
  header: null,
  items: {
    list: [
      {
        logo: {
          src: 'Fiber Gig Service',
          heading: 'Fiber Gig Service',
        },
        properties: {
          list: [
            {
              name: {
                value: 'Contract',
              },
              textValue: {
                value:
                  '<svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M3.92913 12.0795C3.73793 11.8803 3.42141 11.8737 3.22217 12.0649C3.02292 12.2561 3.0164 12.5726 3.20759 12.7719L3.92913 12.0795ZM8.91744 18L8.55667 18.3462L8.91744 18.7221L9.27821 18.3462L8.91744 18ZM20.7934 6.34619C20.9846 6.14694 20.978 5.83043 20.7788 5.63923C20.5795 5.44804 20.263 5.45456 20.0718 5.65381L20.7934 6.34619ZM3.20759 12.7719L8.55667 18.3462L9.27821 17.6538L3.92913 12.0795L3.20759 12.7719ZM9.27821 18.3462L20.7934 6.34619L20.0718 5.65381L8.55667 17.6538L9.27821 18.3462Z" fill="#141928"></path>\n                </svg>',
              },
            },
            {
              name: {
                value:
                  "Sports channels  <br /> <span class='light-text'>(NFL, NBA and MLB)</span>",
              },
              textValue: {
                value:
                  '<svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M3.92913 12.0795C3.73793 11.8803 3.42141 11.8737 3.22217 12.0649C3.02292 12.2561 3.0164 12.5726 3.20759 12.7719L3.92913 12.0795ZM8.91744 18L8.55667 18.3462L8.91744 18.7221L9.27821 18.3462L8.91744 18ZM20.7934 6.34619C20.9846 6.14694 20.978 5.83043 20.7788 5.63923C20.5795 5.44804 20.263 5.45456 20.0718 5.65381L20.7934 6.34619ZM3.20759 12.7719L8.55667 18.3462L9.27821 17.6538L3.92913 12.0795L3.20759 12.7719ZM9.27821 18.3462L20.7934 6.34619L20.0718 5.65381L8.55667 17.6538L9.27821 18.3462Z" fill="#141928"></path>\n                </svg>',
              },
            },
            {
              name: {
                value:
                  "Popular channels \n                <br /> <span class='light-text'>(PBS, BET, Comedy Central, MTV and Nickelodeon)</span>",
              },
              textValue: {
                value:
                  '<svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M3.92913 12.0795C3.73793 11.8803 3.42141 11.8737 3.22217 12.0649C3.02292 12.2561 3.0164 12.5726 3.20759 12.7719L3.92913 12.0795ZM8.91744 18L8.55667 18.3462L8.91744 18.7221L9.27821 18.3462L8.91744 18ZM20.7934 6.34619C20.9846 6.14694 20.978 5.83043 20.7788 5.63923C20.5795 5.44804 20.263 5.45456 20.0718 5.65381L20.7934 6.34619ZM3.20759 12.7719L8.55667 18.3462L9.27821 17.6538L3.92913 12.0795L3.20759 12.7719ZM9.27821 18.3462L20.7934 6.34619L20.0718 5.65381L8.55667 17.6538L9.27821 18.3462Z" fill="#141928"></path>\n                </svg>',
              },
            },
            {
              name: {
                value: 'DVR storage',
              },
              textValue: {
                value:
                  '<svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M3.92913 12.0795C3.73793 11.8803 3.42141 11.8737 3.22217 12.0649C3.02292 12.2561 3.0164 12.5726 3.20759 12.7719L3.92913 12.0795ZM8.91744 18L8.55667 18.3462L8.91744 18.7221L9.27821 18.3462L8.91744 18ZM20.7934 6.34619C20.9846 6.14694 20.978 5.83043 20.7788 5.63923C20.5795 5.44804 20.263 5.45456 20.0718 5.65381L20.7934 6.34619ZM3.20759 12.7719L8.55667 18.3462L9.27821 17.6538L3.92913 12.0795L3.20759 12.7719ZM9.27821 18.3462L20.7934 6.34619L20.0718 5.65381L8.55667 17.6538L9.27821 18.3462Z" fill="#141928"></path>\n                </svg>',
              },
            },
            {
              name: {
                value: 'Simultaneous <br /> streams & accounts',
              },
              textValue: {
                value:
                  '<svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M3.92913 12.0795C3.73793 11.8803 3.42141 11.8737 3.22217 12.0649C3.02292 12.2561 3.0164 12.5726 3.20759 12.7719L3.92913 12.0795ZM8.91744 18L8.55667 18.3462L8.91744 18.7221L9.27821 18.3462L8.91744 18ZM20.7934 6.34619C20.9846 6.14694 20.978 5.83043 20.7788 5.63923C20.5795 5.44804 20.263 5.45456 20.0718 5.65381L20.7934 6.34619ZM3.20759 12.7719L8.55667 18.3462L9.27821 17.6538L3.92913 12.0795L3.20759 12.7719ZM9.27821 18.3462L20.7934 6.34619L20.0718 5.65381L8.55667 17.6538L9.27821 18.3462Z" fill="#141928"></path>\n                </svg>',
              },
            },
            {
              name: {
                value: 'Promotional offers',
              },
              textValue: {
                value:
                  '<svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M3.92913 12.0795C3.73793 11.8803 3.42141 11.8737 3.22217 12.0649C3.02292 12.2561 3.0164 12.5726 3.20759 12.7719L3.92913 12.0795ZM8.91744 18L8.55667 18.3462L8.91744 18.7221L9.27821 18.3462L8.91744 18ZM20.7934 6.34619C20.9846 6.14694 20.978 5.83043 20.7788 5.63923C20.5795 5.44804 20.263 5.45456 20.0718 5.65381L20.7934 6.34619ZM3.20759 12.7719L8.55667 18.3462L9.27821 17.6538L3.92913 12.0795L3.20759 12.7719ZM9.27821 18.3462L20.7934 6.34619L20.0718 5.65381L8.55667 17.6538L9.27821 18.3462Z" fill="#141928"></path>\n                </svg>',
              },
            },
            {
              name: {
                value: 'Final price',
              },
              textValue: {
                value:
                  '<svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M3.92913 12.0795C3.73793 11.8803 3.42141 11.8737 3.22217 12.0649C3.02292 12.2561 3.0164 12.5726 3.20759 12.7719L3.92913 12.0795ZM8.91744 18L8.55667 18.3462L8.91744 18.7221L9.27821 18.3462L8.91744 18ZM20.7934 6.34619C20.9846 6.14694 20.978 5.83043 20.7788 5.63923C20.5795 5.44804 20.263 5.45456 20.0718 5.65381L20.7934 6.34619ZM3.20759 12.7719L8.55667 18.3462L9.27821 17.6538L3.92913 12.0795L3.20759 12.7719ZM9.27821 18.3462L20.7934 6.34619L20.0718 5.65381L8.55667 17.6538L9.27821 18.3462Z" fill="#141928"></path>\n                </svg>',
              },
            },
          ],
        },
      },
      {
        logo: {
          src: 'Vs.Cable',
          heading: 'Vs.Cable',
        },
        properties: {
          list: [
            {
              name: {
                value: 'Contract',
              },
              textValue: {
                value: '-',
              },
            },
            {
              name: {
                value:
                  "Sports channels  <br /> <span class='light-text'>(NFL, NBA and MLB)</span>",
              },
              textValue: {
                value: '-',
              },
            },
            {
              name: {
                value:
                  "Popular channels \n                <br /> <span class='light-text'>(PBS, BET, Comedy Central, MTV and Nickelodeon)</span>",
              },
              textValue: {
                value: '-',
              },
            },
            {
              name: {
                value: 'DVR storage',
              },
              textValue: {
                value: '-',
              },
            },
            {
              name: {
                value: 'Simultaneous <br /> streams & accounts',
              },
              textValue: {
                value: '-',
              },
            },
            {
              name: {
                value: 'Promotional offers',
              },
              textValue: {
                value: '-',
              },
            },
            {
              name: {
                value: 'Final price',
              },
              textValue: {
                value: '-',
              },
            },
          ],
        },
      },
    ],
  },
  primaryButtonUrl: {
    url: 'https://internet.frontier.com/youtubetv',
  },
  primaryButtonText: {
    value: 'CHECK AVAILABILITY',
  },
  chatNowUrl: null,
  alreadyACustomerText: {
    value: 'Ready to see internet plans available in your neighborhood?',
  },
  chatNowText: {
    value: 'Chat now',
  },
}

const StackUp = () => {
  const classes = useStyles()
  // const {
  //     title,
  //     items,
  //     primaryButtonText,
  //     primaryButtonUrl,
  //     chatNowText,
  //     alreadyACustomerText,
  // } = useAppData('tvCompareTable', true)

  const {
    title,
    items,
    primaryButtonText,
    primaryButtonUrl,
    alreadyACustomerText,
  } = datasource

  const list = useMemo((): any[] => {
    const itemsData: any[] = []
    items?.list?.map((listData: any) => {
      // const logo = listData?.logo?.src || ''
      // const alt = listData?.logo?.alt || 'YouTube TV'
      const header = listData?.logo?.heading || ''

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
      itemsData.push({ header, properties })
    })
    console.log('itemsData', itemsData)
    return itemsData
  }, [items])

  return (
    <div className={classes.root}>
      <Typography tagType="h2" styleType="h3" className={classes.title}>
        {title?.value || 'How we stack up'}
      </Typography>
      <div className={classes.comparisonWrapper}>
        <ComparisonTable
          items={list}
          addBorderToHeader={true}
          styleModifier={{
            header: classes.header,
            textAlignCenter: true,
            // hidePreferredRowValue: true,
            // valueTextCSS: classes.valueText,
            // rowHeaderLabel: classes.rowHeaderLabel,
            // backgroundEvenRow: false,
          }}
        />
      </div>
      <div className={classes.planContainer}>
        <ButtonWithChatLink
          buttonName={primaryButtonText?.value}
          hoverVariant="primary"
          buttonLink={primaryButtonUrl?.url}
          bgType="dark"
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
    textAlign: 'left',
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

export default StackUp
