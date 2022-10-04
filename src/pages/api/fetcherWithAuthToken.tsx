import axios from 'axios'

const generateToken = async () => {
  const BASE_URL = process.env.PREDICTIVE_BASE_URL
  const PREDICTIVE_API_KEY = process.env.PREDICTIVE_API_KEY
  const PREDICTIVE_API_PASSWORD = process.env.PREDICTIVE_API_PASSWORD
  return axios.get(
    `${BASE_URL}oauth/v1/accesstoken?grant_type=client_credentials`,
    {
      auth: {
        username: PREDICTIVE_API_KEY || '',
        password: PREDICTIVE_API_PASSWORD || '',
      },
    },
  )
}

class FetcherWithAuthToken {
  token = ''

  constructor() {
    this.updateToken()
  }

  updateToken = async (forceToken = false) => {
    if (!this.token || forceToken) {
      try {
        const tokenDetails = await generateToken()
        const accessToken = tokenDetails?.data?.oauth?.accessToken
        this.token = accessToken
      } catch (error) {
        console.log(error)
      }
    }
  }

  get = async (
    url: string,
    headers = {},
    fetchNewToken = true,
  ): Promise<any> => {
    const BASE_URL = process.env.PREDICTIVE_BASE_URL
    await this.updateToken()
    try {
      const response = await axios.get(`${BASE_URL}${url}`, {
        headers: {
          Authorization: 'Bearer ' + this.token,
          apikey: process.env.PREDICTIVE_API_KEY || '',
          ...(headers || {}),
        },
      })
      return response
    } catch (error: any) {
      if (error?.response?.status === 401) {
        if (fetchNewToken) {
          await this.updateToken(true)
          return this.get(url, headers, false)
        }
      }
      throw error
    }
  }

  post = async (
    url: string,
    body = {},
    headers = {},
    fetchNewToken = true,
  ): Promise<any> => {
    await this.updateToken()
    const BASE_URL = process.env.PREDICTIVE_BASE_URL
    try {
      const response = await axios.post(`${BASE_URL}${url}`, body, {
        headers: {
          Authorization: 'Bearer ' + this.token,
          apikey: process.env.PREDICTIVE_API_KEY || '',
          ...(headers || {}),
        },
      })
      return response
    } catch (error: any) {
      if (error?.response?.status === 401) {
        if (fetchNewToken) {
          await this.updateToken(true)
          return this.post(url, body, headers, false)
        }
      }
      throw error
    }
  }
}

const fetcher = new FetcherWithAuthToken()

export default fetcher
