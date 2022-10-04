import axios from 'axios'
import getConfig from 'next/config'
const config = getConfig()
const publicRuntimeConfig = config?.publicRuntimeConfig

// API client methods
const client = {
  profile: () => {
    return axios.get(`${getBaseURL()}/api/profile`)
  },
  getPredictiveSuggestions: (address: string) => {
    return axios.get(`${getBaseURL()}/api/address-search?address=${address}`)
  },
  serviceabilityCheck: (env: string, controlNumber: string) => {
    return axios.get(
      `${getBaseURL()}/api/serviceability?env=${env}&controlNumber=${controlNumber}`,
    )
  },
  submitACPForm: (data: any) => {
    return axios({
      url: `${getBaseURL()}/api/acp-form`,
      method: 'POST',
      data,
      headers: {
        'requesting-application': 'ResiEcomm',
      },
    })
  },
  checkOutages: (phone: string) => {
    return axios.get(`${getBaseURL()}/api/checkoutages?phone=${phone}`)
  },
}

// Returns BASE URL based upon the env
const getBaseURL = () => {
  const origin = window.location.origin
  const nextBasePath =
    publicRuntimeConfig?.basePath?.replace(/\/+/g, '/') || 'pages'
  if (!origin) {
    return 'https://www.frontier.com/' + nextBasePath
  }
  if (process.env.NODE_ENV === 'production') {
    return origin.includes(nextBasePath)
      ? trimOrigin(origin)
      : origin + nextBasePath
  }
  return 'http://localhost:3000/' + nextBasePath.replace(/\/+/g, '/')
}

const trimOrigin = (url = '') => {
  if (url && url[url.length - 1] === '/') {
    return url.slice(0, -1)
  }
  return url
}

export default client
