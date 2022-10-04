import { useMemo } from 'react'
import { makeStyles } from '@material-ui/core'
import { Accordion, Typography } from 'src/blitz'

const FaqList = ({ data }: any) => {
  const classes = useStyles()
  const { faqItems, title, schema } = data
  const faqList = faqItems?.faqs || []

  const FIFaqList = useMemo(() => {
    return faqList?.map(({ title, description }: any) => ({
      title: title?.value || '',
      description: description?.value || '',
    }))
  }, [faqList])

  if (faqList?.length === 0) {
    return null
  }

  return (
    <div className={classes.root}>
      <Typography tagType="h2" styleType="h3" className={classes.sectionTitle}>
        {title?.value || ''}
      </Typography>
      <Accordion
        list={FIFaqList}
        descriptionClassName={classes.accordionDescription}
      />
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
    maxWidth: '1132px',
    margin: 'auto',
    padding: '110px 16px',
    [breakpoints.down('xs')]: {
      padding: '48px 16px',
    },
  },
  sectionTitle: {
    textAlign: 'center',
    marginBottom: '32px',
  },
  accordionDescription: {
    marginTop: 0,
    padding: 16,
    '& a': {
      textDecoration: 'underline',
      fontWeight: 'bold',
    },
    '& p': {
      margin: '0!important',
    },
  },
}))

export default FaqList
