import React from 'react'
import '../styles/globals.css'
import '../styles/fonts.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import theme from 'src/styles/theme'
import { ThemeProvider } from '@material-ui/core'
import store from 'src/redux/Store'
import 'swiper/swiper.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
