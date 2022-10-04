import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const FRONTIER_BASE_URL = process.env.FRONTIER_BASE_URL || ''

const handleLogout = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.headers.cookie?.includes('connect.sid')) {
      await axios.post(
        `${FRONTIER_BASE_URL}api/logout`,
        {},
        {
          headers: { cookie: req.headers.cookie },
        },
      )
      return res.status(200).json({})
    } else {
      return res.status(401).json({
        error: 'Unauthorized',
      })
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return handleLogout(req, res)
}
