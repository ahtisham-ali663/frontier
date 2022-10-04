import { useMemo } from 'react'
import { makeStyles } from '@material-ui/core'
import { Accordion, InjectHTML } from 'src/blitz'
import { useAppData } from 'src/hooks'
import { COMPONENT_WRAPPER } from 'src/constants'
import { FAQ_EXPAND, FAQ_COLLAPSE, SITE_INTERACTION } from 'src/constants'
import DTMClient from 'src/utils/adobe/dynamicTagManagement/client'
const GroupFaqACP = () => {
  const classes = useStyles()
  const { field } = useAppData('faqGroup', true)

  const fieldListFaq = useMemo(() => {
    return field?.list.map((faqSection: any) => {
      return faqSection?.faqItems.faqs?.map(({ title, description }: any) => ({
        title: title?.value || '',
        description: description?.value || '',
      }))
    })
  }, [field])
  const accordionClickHandler = (isExpanded: boolean, title: string) => {
    const description = (isExpanded ? FAQ_EXPAND : FAQ_COLLAPSE).replace(
      '{TITLE}',
      `acp:${title.toLowerCase()}`,
    )
    DTMClient.triggerEvent(
      { events: 'event14', eVar14: description },
      'tl_o',
      SITE_INTERACTION,
    )
  }

  return (
    <>
      {field?.list?.map((list: any, index: number) => {
        return (
          <div key={`faq-${index}`} className={classes.root}>
            {list?.title?.value && (
              <InjectHTML
                tagType="h2"
                styleType="h4"
                className={classes.faqTitle}
                value={list?.title?.value}
              />
            )}
            <div className={classes.faqContainer}>
              <Accordion
                list={fieldListFaq[index]}
                borderUnderDescription={true}
                descriptionClassName={classes.accordionDescription}
                isSingleItemOpen={true}
                accordionClickHandler={accordionClickHandler}
              />
            </div>
          </div>
        )
      })}
    </>
  )
}

const useStyles = makeStyles(() => ({
  root: {
    ...COMPONENT_WRAPPER,
    margin: '60px auto',
    maxWidth: '1000px',
  },
  faqTitle: {
    textAlign: 'left',
    margin: 'auto',
  },
  faqContainer: {
    maxWidth: '968px',
    margin: '30px auto',
  },
  accordionDescription: {
    marginTop: 0,
    padding: 16,
    '& a': {
      textDecoration: 'underline',
      fontWeight: 700,
    },
    '& p': {
      margin: '0!important',
      marginBottom: '16px!important',
    },
  },
}))

export default GroupFaqACP
