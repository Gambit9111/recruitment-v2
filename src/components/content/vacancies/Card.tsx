import React from "react";
import { Disclosure } from "@headlessui/react";
import type { Vacancy } from "@/pages/vacancies";

const Card: React.FC<Vacancy> = ({ title, location, salaryRange, description, experienceLevel, publishedDate, tags }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="p-2 hover:border hover:border-color-white bg-color-graydark w-full flex justify-between text-color-white rounded-lg hover:bg-color-black focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            <span className="text-sm">{title}</span>
            {open ? (
              <span className="bg-color-yellow text-color-black rounded-lg px-3">
                Hide Details
              </span>
            ) : (
              <span className="bg-color-yellow text-color-black rounded-lg px-3">
                Read More
              </span>
            )}
          </Disclosure.Button>
          <Disclosure.Panel className="text-color-white">
            <p>Location: {location}</p>
            <p>Salary: {salaryRange}</p>
            <p>Description: {description}</p>
            <p>Experience Level: {experienceLevel}</p>
            <p>Published Date: {new Date(publishedDate).toLocaleDateString()}</p>
            <p>Tags: {tags.map(tag => tag.tagName).join(", ")}</p>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Card;