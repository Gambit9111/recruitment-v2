import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/server/db'

// * add tags to the vacancies, send post request with json format like this

// ? {
// ?   "vacancyTitle": "Carpenter",
// ?   "tagNames": ["Car Provided", "Accommodation Provided", "Driving License Required", "40 Hours per week", "Construction Work", "Day Shift", "Qualified Position"]
// ? }

const addTags = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { vacancyTitle, tagNames } = req.body
      console.log("zopanx", req.body)

      // Check if the vacancy and tags exist
      const vacancy = await prisma.vacancy.findFirst({
        where: {title: vacancyTitle},
      })
      if (!vacancy) {
        return res.status(404).json({ message: 'Vacancy not found' })
      }

      const tags = await prisma.tag.findMany({
        where: { name: { in: tagNames } },
      })
      if (tags.length !== tagNames.length) {
        return res.status(404).json({ message: 'One or more tags not found' })
      }

      console.log(vacancyTitle,tagNames, vacancy, tags )

      // // Connect the vacancy with the tags
      for (const tag of tags) {
        await prisma.vacancyTag.create({
          data: {
            vacancyTitle: vacancyTitle,
            tagName: tag.name,
          },
        })
      }

      res.status(200).json({ message: 'Tags applied to the vacancy successfully' })
    } catch (error) {
      res.status(500).json({ message: 'Error applying tags to the vacancy', error })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'POST':
      return addTags(req, res)
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}