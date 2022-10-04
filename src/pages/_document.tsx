import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
const fontFiles = [
  'PPObjectSans-Regular.eot',
  'PPObjectSans-Regular.otf',
  'PPObjectSans-Regular.ttf',
  'PPObjectSans-Regular.woff',
  'PPObjectSans-Regular.woff2',
  'PPObjectSans-Medium.eot',
  'PPObjectSans-Medium.otf',
  'PPObjectSans-Medium.ttf',
  'PPObjectSans-Medium.woff',
  'PPObjectSans-Medium.woff2',
  'PPObjectSans-Bold.eot',
  'PPObjectSans-Bold.otf',
  'PPObjectSans-Bold.ttf',
  'PPObjectSans-Bold.woff',
  'PPObjectSans-Bold.woff2',
  'BandwidthDisplay_Rg.otf',
  'BandwidthDisplay_Rg.ttf',
  'BandwidthDisplay_Rg.woff',
  'BandwidthDisplay_Rg.woff2',
]
import GTagSnippet, { GTM } from 'src/utils/gtag'
import DynatraceTracking from 'src/utils/dynatrace'
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Pre loads the fonts to avoid font flickering - Also cached in next.config.js
          so it will cache fonts in the browser and avoid it from re-downloading it again and again */}
          {fontFiles.map((file, index) => (
            <link
              key={`font-file-${index}`}
              rel="preload"
              href={`${publicRuntimeConfig?.basePath}/pp_fonts/${file}`}
              as="font"
              crossOrigin=""
            />
          ))}
          {/* eslint-disable-next-line @next/next/no-css-tags */}
          <link
            rel="stylesheet"
            href={`${publicRuntimeConfig?.basePath}/css/font-loader.css`}
          />
          <GTagSnippet />
          <GTM />
          <DynatraceTracking />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props, i) =>
        sheets.collect(<App key={i} {...props} />),
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  }
}
