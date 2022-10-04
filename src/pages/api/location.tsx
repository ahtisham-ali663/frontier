import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const FRONTIER_BASE_URL = process.env.FRONTIER_BASE_URL || ''

const getLocation = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const details = await axios.get(`${FRONTIER_BASE_URL}api/location`, {
      headers: { cookie: req.headers.cookie },
    })
    return res.status(200).json(details?.data)
  } catch (error) {
    res.status(500).json(error)
  }
}

const setLocation = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const details = await axios.post(
      `${FRONTIER_BASE_URL}api/location`,
      req.body,
    )
    return res.status(200).json(details?.data || {})
  } catch (error) {
    res.status(500).json(error)
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getLocation(req, res)
    case 'POST':
      return setLocation(req, res)
  }
  return getLocation(req, res)
}
