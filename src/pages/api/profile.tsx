import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const FRONTIER_BASE_URL = process.env.FRONTIER_BASE_URL || ''
const getProfile = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.headers.cookie?.includes('connect.sid')) {
      const details = await axios.get(`${FRONTIER_BASE_URL}api/profile`, {
        headers: { cookie: req.headers.cookie },
      })
      return res.status(200).json(details?.data)
    } else {
      return res.status(401).json({
        error: 'Unauthorized',
      })
    }
  } catch (error) {
    res.status(500).json({ env: process.env, error })
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return getProfile(req, res)
}
