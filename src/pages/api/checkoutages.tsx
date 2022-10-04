import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiErrorLogger } from 'src/utils/adobe/api-error-logger'

const FRONTIER_BASE_URL = process.env.FRONTIER_BASE_URL || ''

const getCheckOutages = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const details = await axios.get(
      `${FRONTIER_BASE_URL}api/checkoutages/${req.query.phone}`,
    )
    return res.status(200).json(details?.data || {})
  } catch (error: any) {
    apiErrorLogger(error, 'predictive-service')
    res.status(error?.statusCode || error?.response?.status || 500).json(error)
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return getCheckOutages(req, res)
}
