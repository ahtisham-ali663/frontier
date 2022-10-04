import { Fragment } from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import DTMScripts from 'src/utils/adobe/dynamicTagManagement/components'
import InvocaScripts from 'src/utils/invoca'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
const PageHead = ({ data }: any) => {
  const pageMeta =
    useSelector((state: any) => state?.appData?.data?.['PageMeta']) || {}
  const {
    metaTitle,
    metaDescription,
    metaKeywords,
    CanonicalTag,
    index,
    favicon,
  } = data || pageMeta

  return (
    <Fragment>
      {DTMScripts.Library()}
      {InvocaScripts.Library()}
      <Head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          src={`${publicRuntimeConfig?.basePath}/js/at.js`}
          data-nscript="beforeInteractive"
        />
        {metaTitle && (
          <>
            <title>
              {metaTitle?.value ? metaTitle.value : 'Frontier Communications'}
            </title>
            <meta name="author" content="Frontier Communications"></meta>
            <meta
              name="description"
              content={metaDescription?.value ? metaDescription.value : ''}
            />
            <meta
              name="keywords"
              content={metaKeywords?.value ? metaKeywords.value : ''}
            />
            <link rel="apple-touch-icon" href="/images/logoname.png"></link>
            <meta httpEquiv="Cache-control" content="public" />
            <meta name="theme-color" content="#317EFB" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <meta
              name="title"
              content={
                metaTitle?.value ? metaTitle.value : 'Frontier Communications'
              }
            />
            <meta name="robots" content={index?.value ? index.value : ''} />
            {favicon?.value?.url && (
              <link rel="shortcut icon" href={favicon?.value?.url} />
            )}
            {favicon?.value?.url && (
              <link rel="icon" href={favicon?.value?.url} type="image/ico" />
            )}
            {CanonicalTag?.value && (
              <link rel="canonical" href={CanonicalTag?.value} />
            )}
            {CanonicalTag?.value && (
              <link
                rel="alternate"
                hrefLang="x-default"
                href={CanonicalTag?.value}
              />
            )}
            {CanonicalTag?.value && (
              <link
                rel="alternate"
                hrefLang="en-us"
                href={CanonicalTag?.value}
              />
            )}
          </>
        )}
      </Head>
    </Fragment>
  )
}

export default PageHead
