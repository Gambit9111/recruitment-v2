import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/server/db'

// GET /api/vacancies/:id
export const getVacancy = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query
  const vacancy = await prisma.vacancy.findUnique({
    where: { id: Number(id) },
    include: {tags: true},
  })
  res.json(vacancy)
}

// // PUT /api/vacancies/:id
// export const updateVacancy = async (req: NextApiRequest, res: NextApiResponse) => {
//   const { id } = req.query
//   const { title, description, location, salaryRange, experienceLevel, publishedDate } = req.body
//   const result = await prisma.vacancy.update({
//     where: { id: Number(id) },
//     data: { title, description, location, salaryRange, experienceLevel, publishedDate },
//   })
//   res.json(result)
// }

// // DELETE /api/vacancies/:id
// export const deleteVacancy = async (req: NextApiRequest, res: NextApiResponse) => {
//   const { id } = req.query
//   const result = await prisma.vacancy.delete({
//     where: { id: Number(id) },
//   })
//   res.json(result)
// }

export default function handle(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'GET':
      return getVacancy(req, res)
    // case 'PUT':
    //   return updateVacancy(req, res)
    // case 'DELETE':
    //   return deleteVacancy(req, res)
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}