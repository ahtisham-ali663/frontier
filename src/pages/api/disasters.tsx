import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

// const FRONTIER_BASE_URL = process.env.FRONTIER_BASE_URL || ''
const getDisasters = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get(
      'https://api-qat03.frontier.com/pucalerts/v1/disasters',
      {
        headers: {
          Authorization: 'Basic ZnRyY29tOmZyb250aWVyMTIz',
          apikey: 're4O2nBMFRFJWAmJ5GVGOAU7j2lDrYFD',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )

    return res.status(200).json(response.data)
  } catch (error) {
    res.status(500).json({ env: process.env, error })
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return getDisasters(req, res)
}
