import { makeStyles, Grid } from '@material-ui/core'
import { Button, InjectHTML } from 'src/blitz'
import { COMPONENT_WRAPPER } from 'src/constants'
import colors from 'src/styles/theme/colors'
import { useAppData } from 'src/hooks'

const QuickLinks = () => {
  const classes = useStyles()
  const quickLinksData = useAppData('quickLinks', true)
  if (Object.keys(quickLinksData)?.length === 0) {
    return null
  }
  const {
    title,
    links,
    actionCardIcon,
    actionCardTitle,
    actionCardButtonText,
    actionCardDescription,
    actionCardButtonUrl,
    actionCardBackgroundColor,
  } = quickLinksData

  return (
    <div className={classes.root} data-testid="QuickLinks">
      {title?.value && (
        <InjectHTML
          data-testid="faqTitle"
          tagType="h2"
          styleType="h4"
          className={classes.title}
          value={title?.value}
        />
      )}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={12} lg={7}>
          <Grid container spacing={2}>
            {links?.list?.map((item: any, index: number) => {
              return (
                <Grid
                  item
                  key={`action-card-${index}`}
                  xs={12}
                  sm={4}
                  md={4}
                  lg={4}
                >
                  <a
                    href={item?.href?.url}
                    id={item?.hrefId?.value}
                    className={classes.quickLinksCard}
                  >
                    <InjectHTML
                      className={classes.quickLinkCardIcon}
                      value={item?.icon?.value}
                    />
                    <InjectHTML
                      tagType="h3"
                      styleType="h6"
                      value={item?.title?.value}
                    />
                  </a>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={5}>
          <div
            style={{
              backgroundColor:
                actionCardBackgroundColor?.Color?.field?.value ||
                actionCardBackgroundColor?.value,
            }}
            className={classes.actionCard}
          >
            <InjectHTML
              className={classes.actionCardIcon}
              value={actionCardIcon?.value}
            />
            <InjectHTML
              tagType="h3"
              styleType="h5"
              value={actionCardTitle?.value}
              className={classes.actionCardTitle}
            />
            <InjectHTML
              className={classes.actionCardDescription}
              value={actionCardDescription?.value}
              styleType="p1"
            />
            <Button
              type="link"
              text={actionCardButtonText?.value}
              href={actionCardButtonUrl?.url}
              variant="secondary"
              className={classes.linkBtn}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    ...COMPONENT_WRAPPER,
    margin: '60px auto',
  },
  title: {
    margin: '32px auto',
  },
  quickLinksCard: {
    border: `1px solid ${colors.main.borderGrey}`,
    borderRadius: 16,
    padding: 16,
    display: 'block',
    minHeight: 125,
    height: '100%',
    '&:hover': {
      backgroundColor: colors.main.grey,
      boxShadow: '0px 0px 7px 3px rgb(0 0 0 / 9%)',
    },
    [breakpoints.down('xs')]: {
      minHeight: 'unset',
      border: 0,
      borderBottom: `1px solid ${colors.main.borderGrey}`,
      borderRadius: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: 0,
      paddingBottom: 16,
      '&:hover': {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
    },
  },
  quickLinkCardIcon: {
    marginBottom: 18,
    height: 30,
    '& svg': {
      height: 30,
      width: 30,
    },
    [breakpoints.down('xs')]: {
      marginBottom: 0,
    },
  },
  actionCardIcon: {
    marginBottom: 12,
    [breakpoints.down('xs')]: {
      height: 'unset',
    },
  },
  actionCard: {
    borderRadius: 16,
    padding: 24,
    minHeight: 'unset',
    height: '100%',
    [breakpoints.up('lg')]: {
      marginLeft: 30,
      minHeight: 265,
    },
    [breakpoints.down('md')]: {
      width: '66%',
    },
    [breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  linkBtn: {
    width: 'max-content',
    display: 'block',
    [breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  actionCardDescription: {
    marginBottom: 24,
  },
  actionCardTitle: {
    [breakpoints.down('xs')]: {
      fontSize: 18,
    },
  },
}))

export default QuickLinks
