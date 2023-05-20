import React, { useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';

type Section = {
  title: string;
  color: string;
  content: string;
};

const sections: Section[] = [
  {
    title: 'Talent Acquisition',
    color: 'bg-red-500',
    content: 'This involves sourcing, recruiting, interviewing, and hiring of individuals for new positions. Our team provides a full-service talent acquisition experience, identifying and engaging with top talent in the industry.',
  },
  {
    title: 'Technical Skillset Matching',
    color: 'bg-green-500',
    content: 'We understand the importance of matching candidates not only to the job description, but also to your company culture and team dynamics. Our process includes a thorough evaluation of a candidate’s technical skills to ensure a perfect fit.',
  },
  {
    title: 'Remote Workforce Planning',
    color: 'bg-teal-500',
    content: 'In today’s digital age, remote work is becoming increasingly popular. We help businesses plan their remote workforce strategies, ensuring a successful remote setup that fosters productivity and employee satisfaction.',
  },
  {
    title: 'Candidate Skill Analysis',
    color: 'bg-blue-500',
    content: 'We conduct in-depth skill analysis for all potential candidates. By identifying and understanding their skills, we can better match them with opportunities that suit their abilities and career goals.',
  },
  {
    title: 'Business & HR Management',
    color: 'bg-yellow-500',
    content: 'Our team assists businesses in managing their human resources, from setting up HR processes and systems to advising on best practices in HR management. We aim to help businesses optimize their workforce and foster a positive working environment.',
  },
  {
    title: 'IT & Tech Recruiting',
    color: 'bg-orange-500',
    content: 'Specializing in IT and tech recruiting, we find the best tech talent for your company. With an understanding of the industry and its specific challenges, we source candidates who have the right technical skills and fit for your company culture.',
  },
];

const Banner: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  return (
    <div className="mt-24 flex w-full flex-col gap-6">
      {sections.map((section, index) => (
        <React.Fragment key={index}>
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setExpandedSection(expandedSection === index ? null : index)}
          >
            <div className="flex items-center gap-3">
              <h3>{index + 1}</h3>
              <h1 className="text-xl">{section.title}</h1>
            </div>
            <div className={`h-14 w-14 rounded-full ${section.color}`} />
          </div>
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: expandedSection === index ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-6 py-4 text-color-white">{section.content}</p>
          </motion.div>
          <div className="h-[1px] w-full bg-color-white" />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Banner;