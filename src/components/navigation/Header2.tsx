import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

type Header2Props = {};

const Header2: React.FC<Header2Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="z-10 mx-4 flex items-center border-b border-color-white bg-color-black py-4 text-color-white sticky top-0">
      <button className="z-30" onClick={handleToggle}>
        {isOpen ? (
          <svg
            width="32"
            height="24"
            viewBox="0 0 32 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 18L24 6M8 6L24 18"
              stroke="#F6F2EC"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="32"
            height="24"
            viewBox="0 0 32 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9H27M5 15.75H27"
              stroke="#F6F2EC"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </button>
      <div className="ml-4 flex h-12 w-12 items-center justify-center rounded-full border-[1.5px] border-color-white">
        <p className="text-[0.55rem] font-medium uppercase tracking-wider">
          Engnr.
        </p>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed left-0 top-20 z-20 flex h-screen w-full flex-col items-center justify-center gap-8 bg-red-900"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.2 }}
          >
            {/* Add your dropdown menu items here */}
            <ul className="space-y-1 text-color-white">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/vacancies">Vacancies</Link></li>
              <li><Link href="/employers">Employers</Link></li>
              <li><Link href="/apply">Apply</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header2;
