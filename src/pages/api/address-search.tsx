import type { NextApiRequest, NextApiResponse } from 'next'
import fetcher from './fetcherWithAuthToken'
import { apiErrorLogger } from 'src/utils/adobe/api-error-logger'

const getPredictiveText = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const details = await fetcher.get(
      `address-management/v1/AddressSearch/Predictive?address=${req.query.address}`,
    )
    return res.status(200).json(details?.data || {})
  } catch (error) {
    apiErrorLogger(error, 'predictive-service')
    res.status(500).json(error)
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return getPredictiveText(req, res)
}
