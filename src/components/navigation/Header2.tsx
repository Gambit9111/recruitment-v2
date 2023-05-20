import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Footer from "./Footer";

type Header2Props = {};

const links = [
  { href: "/", name: "Home" },
  { href: "/about-us", name: "About Us" },
  { href: "/vacancies", name: "Vacancies" },
  { href: "/employers", name: "Employers" },
  { href: "/apply", name: "Apply" },
];

const Header2: React.FC<Header2Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const variants = {
    // @ts-ignore
    open: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.15,
      },
    }),
    closed: { opacity: 0 },
  };

  // This function adds or removes a class from the body when the menu is open or closed

  return (
    <header className="sticky top-0 z-10 mx-4 flex items-center bg-color-black py-4 text-color-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute top-20 h-[1px] w-full bg-color-white"
      />
      <motion.button
        className="z-30"
        onClick={handleToggle}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
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
      </motion.button>
      <motion.div
        className="ml-4 flex h-12 w-12 items-center justify-center rounded-full border-[1.5px] border-color-white"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <p className="text-[0.55rem] font-medium uppercase tracking-wider">
          Engnr.
        </p>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed left-0 top-[5.05rem] z-20 h-[calc(100vh-5.05rem)] w-full overflow-auto bg-color-black"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5 }}
          >
            <ul className="space-y-8 p-4 pt-16 text-3xl font-light uppercase text-color-white/50">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  custom={i}
                  variants={variants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <Link className="hover:text-color-yellow" href={link.href}>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header2;
