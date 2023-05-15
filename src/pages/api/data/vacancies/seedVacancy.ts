import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/server/db";

const items = [
    {
        title: "Carpenter",
        description: "Assist with basic carpentry tasks under the guidance of a senior carpenter.",
        location: "Rotterdam, Netherlands",
        salaryRange: "€350 - €500 per week",
        experienceLevel: "Junior",
        publishedDate: new Date("2023-05-12T00:00:00.000Z"),
      },
      {
        title: "Construction Worker",
        description: "General labor on construction sites, no specific skill required but familiarity with construction tools and practices is a plus.",
        location: "Amsterdam, Netherlands",
        salaryRange: "€400 - €600 per week",
        experienceLevel: "Entry",
        publishedDate: new Date("2023-05-13T00:00:00.000Z"),
      },
      {
        title: "Plumber",
        description: "Routine plumbing maintenance and repair tasks, must have basic plumbing skills.",
        location: "The Hague, Netherlands",
        salaryRange: "€500 - €650 per week",
        experienceLevel: "Mid-level",
        publishedDate: new Date("2023-05-14T00:00:00.000Z"),
      },
      {
        title: "Electrician",
        description: "Responsible for electrical installations and repairs, must have relevant certification and experience.",
        location: "Utrecht, Netherlands",
        salaryRange: "€600 - €800 per week",
        experienceLevel: "Senior",
        publishedDate: new Date("2023-05-15T00:00:00.000Z"),
      },
      {
        title: "Warehouse Operative",
        description: "General warehouse duties including packing, sorting, and loading goods. No specific skills required.",
        location: "Eindhoven, Netherlands",
        salaryRange: "€400 - €550 per week",
        experienceLevel: "Entry",
        publishedDate: new Date("2023-05-16T00:00:00.000Z"),
      },
      {
        title: "Painter",
        description: "Must have experience in painting buildings, both interior, and exterior.",
        location: "Rotterdam, Netherlands",
        salaryRange: "€450 - €600 per week",
        experienceLevel: "Mid-level",
        publishedDate: new Date("2023-05-17T00:00:00.000Z"),
      },
      {
        title: "Construction Foreman",
        description: "Must have extensive construction experience and leadership skills.",
        location: "Amsterdam, Netherlands",
        salaryRange: "€750 - €950 per week",
        experienceLevel: "Senior",
        publishedDate: new Date("2023-05-18T00:00:00.000Z"),
      },
      {
        title: "Landscaper",
        description: "Responsible for maintaining gardens and other outdoor landscapes. No specific skills required.",
        location: "The Hague, Netherlands",
        salaryRange: "€400 - €550 per week",
        experienceLevel: "Entry",
        publishedDate: new Date("2023-05-19T00:00:00.000Z"),
      },
      {
        title: "Concrete Worker",
        description: "Assist in the pouring, smoothing, and setting of concrete. Basic knowledge of concrete work required.",
        location: "Utrecht, Netherlands",
        salaryRange: "€450 - €600 per week",
        experienceLevel: "Junior",
        publishedDate: new Date("2023-05-20T00:00:00.000Z"),
      },
      {
        title: "Heavy Equipment Operator",
        description: "Operate heavy machinery on construction sites. Must have relevant licenses and experience.",
        location: "Eindhoven, Netherlands",
        salaryRange: "€600 - €800 per week",
        experienceLevel: "Mid-level",
        publishedDate: new Date("2023-05-21T00:00:00.000Z"),
      },
      {
        title: "Site Manager",
        description: "Manage day-to-day operations on construction sites. Extensive construction and management experience required.",
        location: "Rotterdam, Netherlands",
        salaryRange: "€800 - €1000 per week",
        experienceLevel: "Senior",
        publishedDate: new Date("2023-05-22T00:00:00.000Z"),
      },
      {
        title: "Factory Worker",
        description: "Perform assembly line tasks in a factory environment. No specific skills required.",
        location: "Amsterdam, Netherlands",
        salaryRange: "€400 - €550 per week",
        experienceLevel: "Entry",
        publishedDate: new Date("2023-05-23T00:00:00.000Z"),
      },
      {
        title: "Bricklayer",
        description: "Assist in the laying of bricks, blocks, and other types of building materials. Basic bricklaying skills required.",
        location: "The Hague, Netherlands",
        salaryRange: "€450 - €600 per week",
        experienceLevel: "Junior",
        publishedDate: new Date("2023-05-24T00:00:00.000Z"),
      },
      {
        title: "Crane Operator",
        description: "Operate cranes to lift, move, and place equipment and materials. Must have relevant licenses and experience.",
        location: "Utrecht, Netherlands",
        salaryRange: "€600 - €800 per week",
        experienceLevel: "Mid-level",
        publishedDate: new Date("2023-05-25T00:00:00.000Z"),
      },
      {
        title: "Project Manager",
        description: "Oversee all aspects of construction projects. Extensive construction and management experience required.",
        location: "Eindhoven, Netherlands",
        salaryRange: "€850 - €1100 per week",
        experienceLevel: "Senior",
        publishedDate: new Date("2023-05-26T00:00:00.000Z"),
      },
      {
        title: "Cleaner",
        description: "Perform cleaning duties in factories and warehouse facilities. No specific skills required.",
        location: "Rotterdam, Netherlands",
        salaryRange: "€350 - €500 per week",
        experienceLevel: "Entry",
        publishedDate: new Date("2023-05-27T00:00:00.000Z"),
      }
  ]

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
      try {
        for (const item of items) {
            await prisma.vacancy.create({
                data:{
                    title: item.title,
                    description: item.description,
                    location: item.location,
                    salaryRange: item.salaryRange,
                    experienceLevel: item.experienceLevel,
                    publishedDate: new Date(item.publishedDate),
                }
            })
        }
        res.status(200).json({ message: "Database seeded successfully" });
      } catch (error) {
        res.status(500).json({ message: "Error seeding the database", error });
      }
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  };
  
  export default handler;