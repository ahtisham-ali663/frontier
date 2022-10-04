import { makeStyles } from '@material-ui/core'
import { Accordion, InjectHTML } from 'src/blitz'

const SecurePasswordFaq = ({ data }: any) => {
  const classes = useStyles()
  const { id, faqs, title, description, maxCap } = data || {}

  const FIFaqList = faqs?.links?.map(({ title, description }: any) => ({
    title: title?.value || '',
    description: description?.value || '',
  }))

  if (!data || Object.keys(data || {}).length == 0) {
    return null
  }

  return (
    <div className={classes.root} id={id?.value}>
      {title?.value && (
        <InjectHTML
          tagType="h2"
          styleType="h4"
          className={classes.faqTitle}
          value={title?.value}
        />
      )}
      <div>
        {description?.value && (
          <InjectHTML
            styleType="p1"
            className={classes.faqDescription}
            value={description?.value}
          />
        )}
      </div>
      <div className={classes.faqContainer}>
        <Accordion
          list={FIFaqList}
          descriptionClassName={classes.accordionDescription}
          maxCap={maxCap.value}
        />
      </div>
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    maxWidth: '1140px',
    margin: '60px auto',
    padding: '0 20px',
    [breakpoints.down('sm')]: {
      margin: '32px auto',
      marginBottom: 80,
      padding: 0,
    },
  },
  faqTitle: {
    maxWidth: 600,
  },
  faqDescription: {
    margin: '16px auto',
  },
  faqContainer: {
    maxWidth: '840px',
    marginTop: '30px',
    [breakpoints.down('sm')]: {
      marginTop: 8,
    },
  },
  accordionDescription: {
    marginTop: 0,
    padding: 16,
    '& a': {
      textDecoration: 'underline',
    },
    '& p': {
      margin: '0!important',
      marginBottom: '16px!important',
    },
  },
}))

export default SecurePasswordFaq
