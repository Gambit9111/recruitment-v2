import React from 'react';
import { motion } from 'framer-motion';
import type { Vacancy } from '@/pages/vacancies';

const Card: React.FC<Vacancy> = ({ title, location, salaryRange, description, experienceLevel, publishedDate, tags }) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div>
      <div
        className="flex items-center justify-between cursor-pointer py-3"
        onClick={() => setExpanded(!expanded)}
      >
        <h1 className="text-lg text-color-white">{title}</h1>
        <motion.div
          className="h-14 w-28 rounded-full flex items-center justify-center"
          style={{ borderColor: expanded ? '#FFD95A' : 'gray' }}
          animate={{ rotate: expanded ? 360 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {expanded ? (
            <span className="bg-color-yellow/50 text-color-black rounded-lg px-3">
              Hide Details
            </span>
          ) : (
            <span className="bg-color-yellow/50 text-color-black rounded-lg px-3">
              Read More
            </span>
          )}
        </motion.div>
      </div>
      <motion.div
        className="overflow-hidden"
        initial={{ height: 0 }}
        animate={{ height: expanded ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="p-2 text-color-white/80">Location: {location}</p>
        <p className="p-2 text-color-white/80">Salary: {salaryRange}</p>
        <p className="p-2 text-color-white/80">Description: {description}</p>
        <p className="p-2 text-color-white/80">Experience Level: {experienceLevel}</p>
        <p className="p-2 text-color-white/80">Published Date: {new Date(publishedDate).toLocaleDateString()}</p>
        <p className="p-2 text-color-white/80">Tags: {tags.map(tag => tag.tagName).join(", ")}</p>
      </motion.div>
      <div className="h-[1px] w-full bg-color-white" />
    </div>
  );
};

export default Card;