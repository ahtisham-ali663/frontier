import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

// re4O2nBMFRFJWAmJ5GVGOAU7j2lDrYFD      api key

// Basic ZnRyY29tOmZyb250aWVyMTIz               authorization

// const FRONTIER_BASE_URL = process.env.FRONTIER_BASE_URL || ''
const getOutages = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get(
      'https://api-qat03.frontier.com/pucalerts/v1/poweroutages/CA',
      {
        headers: {
          Authorization: 'Basic ZnRyY29tOmZyb250aWVyMTIz',
          apikey: 're4O2nBMFRFJWAmJ5GVGOAU7j2lDrYFD',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )

    // const response = await axios.get(`https://frontier.com/js/capo/ftr_Ca_TopoBounds.js`)

    // const response = await axios.get(`http://localhost:8000/capo`)

    return res.status(200).json(response.data)
  } catch (error) {
    console.log(error, 'error message')
    res.status(500).json({ env: process.env, error })
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  return await getOutages(req, res)
}
