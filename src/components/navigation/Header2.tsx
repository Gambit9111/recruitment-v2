import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Footer from "./Footer";

type Header2Props = {};

const Header2: React.FC<Header2Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // This function adds or removes a class from the body when the menu is open or closed

  return (
    <header className="sticky top-0 z-10 mx-4 flex items-center border-b border-color-white bg-color-black py-4 text-color-white">
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
            className="fixed left-0 top-[5.05rem] z-20 h-[calc(100vh-5.05rem)] w-full bg-color-black overflow-auto"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5 }}
          >
            {/* Add your dropdown menu items here */}
            <ul className="space-y-8 pt-16 text-3xl font-light uppercase text-color-white/50 p-4">
              <li>
                <Link className="hover:text-color-yellow" href="/">Home</Link>
              </li>
              <li>
                <Link className="hover:text-color-yellow" href="/about-us">About Us</Link>
              </li>
              <li>
                <Link className="hover:text-color-yellow" href="/vacancies">Vacancies</Link>
              </li>
              <li>
                <Link className="hover:text-color-yellow" href="/employers">Employers</Link>
              </li>
              <li>
                <Link className="hover:text-color-yellow" href="/apply">Apply</Link>
              </li>
            </ul>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header2;
