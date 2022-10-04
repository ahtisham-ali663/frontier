import { useMemo } from 'react'
import { makeStyles } from '@material-ui/core'
import { Accordion, InjectHTML } from 'src/blitz'
// import { useAppData } from 'src/hooks'
import {
  FAQ_EXPAND,
  FAQ_COLLAPSE,
  SITE_INTERACTION,
  COMPONENT_WRAPPER,
} from 'src/constants'
import DTMClient from 'src/utils/adobe/dynamicTagManagement/client'

const datasource = {
  faqItems: {
    faqs: [
      {
        title: {
          value: 'What Frontier services are available in my neighborhood?',
        },
        description: {
          value:
            '<p>Frontier Internet services vary by location. <a data-tagular-events="ElementClicked" data-tagular-payload="{&quot;elementType&quot;:&quot;LINK&quot;,&quot;location&quot;:&quot;SHOP PAGE&quot;,&quot;position&quot;:&quot;FAQ&quot;,&quot;text&quot;:&quot;Check availability&quot;}" href="/buy" data-di-id="di-id-a8b9fa1-cbfa4631">Check availability</a> to see which plans are available at your address.</p>',
        },
      },
      {
        title: {
          value: 'Do I have to sign a contract with Frontier?',
        },
        description: {
          value:
            '<p>No. There is no annual commitment requirement for any Frontier Internet plans. Some plans offer optional rewards that carry a one-year agreement and early termination fee when added.</p>',
        },
      },
      {
        title: {
          value: 'What Frontier services are available to my home?',
        },
        description: {
          value:
            '<p>Frontier Internet services vary depending on your location. <a data-tagular-events="ElementClicked" data-tagular-payload="{&quot;elementType&quot;:&quot;LINK&quot;,&quot;location&quot;:&quot;SHOP PAGE&quot;,&quot;position&quot;:&quot;FAQ&quot;,&quot;text&quot;:&quot;Check availability&quot;}" href="/buy" data-di-id="di-id-a8b9fa1-cbfa4631">Check availability</a> to see which plans are available to your home.</p>',
        },
      },
      {
        title: {
          value: 'Are there any limits to the amount of data I can use?',
        },
        description: {
          value:
            '<p>No. You can use the internet as much as you want every month with no extra fees.</p>',
        },
      },
    ],
  },
  title: {
    value: 'FAQs',
  },
  heading: {
    value: 'Questions about Frontier? We’ve got answers.',
  },
  schema: {
    value:
      '<script type="application/ld+json">\r\n{\r\n  "@context": "https://schema.org",\r\n  "@type": "FAQPage",\r\n  "mainEntity": [{\r\n    "@type": "Question",\r\n    "name": "Which networks are available with YouTube TV?",\r\n    "acceptedAnswer": {\r\n      "@type": "Answer",\r\n      "text": "YouTube TV lets you stream live & local sports, news and shows from 85+ channels including ABC, CBS, FOX, NBC, ESPN, HGTV, TNT, and more. Local and regional programming is also provided with YouTube TV, offering complete local network coverage in over 98% of US TV households. Please visit the YouTube TV Channel Lineup and enter your 5-digit ZIP code for a full list of your area\'s channel lineup.\r\n Movies and many recent shows are also provided by networks on-demand. Premium add-on networks are also available for an additional monthly charge including Fox Soccer Plus, SHOWTIME, STARZ and more."\r\n    }\r\n  },{\r\n    "@type": "Question",\r\n    "name": "What is YouTube TV?",\r\n    "acceptedAnswer": {\r\n      "@type": "Answer",\r\n      "text": "YouTube TV is a subscription streaming service that lets you watch live TV from major broadcast and popular cable networks. Enjoy local and national live sports, breaking news, and must-see shows the moment they air. Included: unlimited cloud DVR storage space so you can record your favorites, and stream them wherever you go. You also get 6 accounts per household, so share with your family members or roommates."\r\n    }\r\n  },{\r\n    "@type": "Question",\r\n    "name": "Where is YouTube TV available?",\r\n    "acceptedAnswer": {\r\n      "@type": "Answer",\r\n      "text": "YouTube TV is available nationwide in over 99.5% of households in the United States.\r\nPlease visit the YouTube TV Channel Lineup and enter your 5-digit ZIP code for a full list of your area\'s channel lineup."\r\n    }\r\n  },{\r\n    "@type": "Question",\r\n    "name": "Who provides streaming services?",\r\n    "acceptedAnswer": {\r\n      "@type": "Answer",\r\n      "text": "Streaming services are typically provided by subscription-based entertainment providers like Sling, Fubo, and Philo, to name a few. Customers are also able to subscribe to live news, sporting events, and other streamed programming from ESPN, ABC, NBC, as well as other live-streaming networks."\r\n    }\r\n  },{\r\n    "@type": "Question",\r\n    "name": "Will I see charges for streaming services on my Frontier bill?",\r\n    "acceptedAnswer": {\r\n      "@type": "Answer",\r\n      "text": "No, streaming services are provided by third parties, so you\'ll work directly with the streaming provider(s) of your choice. Frontier does not bill customers for their streaming service(s)."\r\n    }\r\n  },{\r\n    "@type": "Question",\r\n    "name": "Do streaming services offer simultaneous multi-streaming so more than one person can watch at the same time?",\r\n    "acceptedAnswer": {\r\n      "@type": "Answer",\r\n      "text": "That depends on the streaming provider and the package you choose. Most packages offer multi-streaming anywhere from 3-5 simultaneous streams. Your Frontier connection must be fast enough to support multi-streaming for an optimal multi-streaming experience."\r\n    }\r\n  }]\r\n}\r\n</script>',
  },
}

const FrontierFAQ = () => {
  const classes = useStyles()
  //   const { faqItems, title, schema } = useAppData('faqList', true)
  const { faqItems, title, schema, heading } = datasource

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
      `plans-faq:${title.toLowerCase()}`,
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
      {heading?.value && (
        <InjectHTML
          data-testid="faqTitle"
          tagType="h2"
          styleType="h5"
          className={classes.faqTitle}
          value={heading?.value}
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

export default FrontierFAQ
