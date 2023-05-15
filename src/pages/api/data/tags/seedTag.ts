// api/seedTags.ts

import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/server/db";

const tags = [
    {
      id: 1,
      name: "Car Provided",
    },
    {
      id: 2,
      name: "Accommodation Provided",
    },
    {
      id: 3,
      name: "Driving License Required",
    },
    {
      id: 4,
      name: "40 Hours per week",
    },
    {
      id: 5,
      name: "50 Hours per week",
    },
    {
      id: 6,
      name: "Construction Work",
    },
    {
      id: 7,
      name: "Factory Work",
    },
    {
      id: 8,
      name: "Commercial Work",
    },
    {
      id: 9,
      name: "Day Shift",
    },
    {
      id: 10,
      name: "Night Shift",
    },
    {
      id: 11,
      name: "Qualified Position",
    },
    {
      id: 12,
      name: "Unqualified Position",
    },
    {
      id: 13,
      name: "No Accommodation",
    },
    {
      id: 14,
      name: "45 Hours per week",
    },
  ];

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
      try {
        for (const item of tags) {
            await prisma.tag.create({
                data:{
                    name: item.name
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