import { useMemo } from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import { Button, InjectHTML } from 'src/blitz'
import { COMPONENT_WRAPPER } from 'src/constants'
import { useAppData } from 'src/hooks'
import colors from 'src/styles/theme/colors'
const FiberUpgradeFAQ = () => {
  const classes = useStyles()
  const { faqItems, title, schema }: any = useAppData('faqList', true)
  const faqList = faqItems?.faqs || []

  const FIFaqList = useMemo(() => {
    return faqList?.map(({ title, buttonText, buttonValue }: any) => ({
      title: title?.value || '',
      buttonText: buttonText?.value || '',
      buttonValue: buttonValue?.url || '',
    }))
  }, [faqList])
  return (
    <div className={classes.root} data-testid="FiberUpgradeFAQ">
      {title?.value && (
        <InjectHTML
          data-testid="faqTitle"
          tagType="h2"
          styleType="h2"
          className={classes.faqTitle}
          value={title?.value}
        />
      )}
      <Grid
        container
        className={classes.boxWrapper}
        justifyContent="space-between"
      >
        {FIFaqList?.map((item: any, index: number) => (
          <Grid item sm={12} md={3} key={index} className={classes.boxItem}>
            <InjectHTML
              tagType="h4"
              styleType="h4"
              className={classes.faqTitleItem}
              value={item?.title}
            />
            <div className={classes.btnWrapper}>
              {item?.buttonText && (
                <Button
                  type="link"
                  href={item?.buttonValue}
                  text={item?.buttonText}
                  variant="secondary"
                  hoverVariant="primary"
                  className={classes.btnStyle}
                />
              )}
            </div>
          </Grid>
        ))}
      </Grid>
      {schema?.value != null && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema?.value }}
        />
      )}
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    ...COMPONENT_WRAPPER,
    margin: '0 auto',
    padding: '5rem 1rem 5rem 1rem',
    [breakpoints.down('xs')]: {
      paddingTop: '3rem',
    },
  },
  faqTitle: {
    paddingBottom: 56,
    marginBottom: 56,
    borderBottom: `4px solid ${colors.main.brightRed}`,
  },
  boxWrapper: {
    [breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  boxItem: {
    [breakpoints.down('sm')]: {
      marginBottom: '2rem',
    },
  },
  faqTitleItem: {},
  btnStyle: {
    padding: '10px 21.7px',
    display: 'block',
    [breakpoints.down('xs')]: {
      fontSize: '1.125rem',
      lineHeight: '1.125rem',
      width: '100%',
    },
  },
  btnWrapper: {
    display: 'inline-flex',
    marginTop: '2rem',
    '& a': {
      display: 'flex',
    },
    [breakpoints.down('sm')]: {
      width: '100%',
      '& a': {
        justifyContent: 'center',
      },
    },
  },
}))

export default FiberUpgradeFAQ
