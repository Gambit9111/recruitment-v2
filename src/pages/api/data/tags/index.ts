import type { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/server/db'

// GET /api/tags
export const getAllTags = async (req: NextApiRequest, res: NextApiResponse) => {
    const tags = await prisma.tag.findMany()
    res.json(tags)
  }

  export default function handle(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req

    switch (method) {
      case 'GET':
        return getAllTags(req, res)
    //   case 'POST':
    //     return createVacancy(req, res)
      default:
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  
    // switch (method) {
    //   case 'GET':
    //     return getAllVacancies(req, res)
    //   case 'POST':
    //     return createVacancy(req, res)
    //   default:
    //     res.setHeader('Allow', ['GET', 'POST'])
    //     res.status(405).end(`Method ${method} Not Allowed`)
    // }
  }