import { useMemo } from 'react'
import { makeStyles } from '@material-ui/core'
import { Accordion, InjectHTML } from 'src/blitz'
import { useAppData } from 'src/hooks'
import {
  FAQ_EXPAND,
  FAQ_COLLAPSE,
  SITE_INTERACTION,
  COMPONENT_WRAPPER,
} from 'src/constants'
import DTMClient from 'src/utils/adobe/dynamicTagManagement/client'

const FiberInternetFAQ = () => {
  const classes = useStyles()
  const { faqItems, title, schema } = useAppData('faqList', true)
  const faqList = faqItems?.faqs || []

  const FIFaqList = useMemo(() => {
    return faqList?.map(({ title, description }: any) => ({
      title: title?.value || '',
      description: description?.value || '',
    }))
  }, [faqList])

  const accordionClickHandler = (isExpanded: boolean, title: string) => {
    const description = (isExpanded ? FAQ_EXPAND : FAQ_COLLAPSE).replace(
      '{TITLE}',
      `tv-faq:${title.toLowerCase()}`,
    )
    DTMClient.triggerEvent(
      { events: 'event14', eVar14: description },
      'tl_o',
      SITE_INTERACTION,
    )
  }

  return (
    <div className={classes.root} data-testid="FiberInternetFAQ">
      {title?.value && (
        <InjectHTML
          data-testid="faqTitle"
          tagType="h2"
          styleType="h3"
          className={classes.faqTitle}
          value={title?.value}
        />
      )}
      <div className={classes.faqContainer}>
        <Accordion
          list={FIFaqList}
          descriptionClassName={classes.accordionDescription}
          accordionClickHandler={accordionClickHandler}
        />
      </div>
      {schema?.value != null && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema?.value }}
        />
      )}
    </div>
  )
}

const useStyles = makeStyles(() => ({
  root: {
    ...COMPONENT_WRAPPER,
    margin: '60px auto',
  },
  faqTitle: {
    textAlign: 'center',
    maxWidth: 600,
    margin: 'auto',
  },
  faqContainer: {
    maxWidth: '840px',
    margin: '30px auto',
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

export default FiberInternetFAQ
