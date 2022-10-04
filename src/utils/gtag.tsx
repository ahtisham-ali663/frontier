import React from 'react'
import Head from 'next/head'
const GA_TRACKING_ID = 'DC-8577835'
const GlobalGtag = () => {
  const SOURCE = 'https://www.googletagmanager.com/gtag/js?id=' + GA_TRACKING_ID
  return (
    <>
      <script async src={SOURCE} />
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag() { dataLayer.push(arguments); }
                  gtag('js', new Date());
                  gtag('config','${GA_TRACKING_ID}');
                  `,
        }}
      />
    </>
  )
}

const PageLoad = () => {
  const URL =
    typeof window !== 'undefined' &&
    window?.location?.href &&
    typeof gtag !== 'undefined'
  return (
    <Head>
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
                gtag('event', 'conversion', {
                  'allow_custom_scripts': true,
                  'u4': '[${URL}]',
                  'send_to': '${GA_TRACKING_ID}/fronhp/trili006+standard'
                });
                gtag('event', 'conversion', {
                  'allow_custom_scripts': true,
                  'u4': '[${URL}]',
                  'send_to': '${GA_TRACKING_ID}/fronhp/trili00b+unique'
                });
                  `,
        }}
      />
      <noscript>
        <img
          src="https://ad.doubleclick.net/ddm/activity/src=8577835;type=fronhp;cat=trili006;u4=[URL];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?"
          width="1"
          height="1"
          alt=""
        />
      </noscript>
      <noscript>
        <img
          src="https://ad.doubleclick.net/ddm/activity/src=8577835;type=fronhp;cat=trili00b;u4=[URL];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1;num=1?"
          width="1"
          height="1"
          alt=""
        />
      </noscript>
    </Head>
  )
}
const GoogleTagManager = () => {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':

    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    
    })(window,document,'script','dataLayer','GTM-W8MX7L5')
    `,
        }}
      />
    </>
  )
}

export default React.memo(GlobalGtag)
export const GTagPageLoad = React.memo(PageLoad)
export const GTM = React.memo(GoogleTagManager)
