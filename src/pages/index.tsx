import { type NextPage } from "next";
import Head from "next/head";
import MainLayout from "@/components/layouts/MainLayout";
import VacanciesButton from "@/components/misc/VacanciesButton";
import welder1png from "../../public/images/welder1.png";
import warehouse2png from "../../public/images/warehouse2.png";
import aircraft3 from "../../public/images/aircraft3.png";
import factory4 from "../../public/images/factory4.png";
import warehouse5 from "../../public/images/warehouse5.png";
import construction6 from "../../public/images/construction6.png";

import React, { useState, useEffect } from "react";

import {
  motion,
  useViewportScroll,
  useTransform,
  useScroll,
} from "framer-motion";

import SuccessCard from "@/components/misc/SuccessCard";

import Banner from "@/components/content/Banner";

// Animation Variants
const textVariants = {
  hidden: { opacity: 0, x: "-100vw" },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  hidden2: { opacity: 0, x: "100vw" },
  visible2: { opacity: 1, x: 0, transition: { duration: 0.9 } },
  hidden3: { opacity: 0, y: "0vh" },
  visible3: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

type HomeProps = {};

const Home: NextPage<HomeProps> = () => {
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  const xPosition1 = useTransform(scrollY, [300, 10], ["-70vw", "0vw"]);
  const xPosition2 = useTransform(scrollY, [300, 10], ["70vw", "0vw"]);
  const yPosition3 = useTransform(scrollY, [300, 100], ["-100vh", "0vh"]);

  const xPosition4 = useTransform(scrollY, [350, 10], ["0vw", "100vw"]);
  const xPosition5 = useTransform(scrollY, [400, 10], ["0vw", "100vw"]);
  const opacityValue1 = useTransform(scrollY, [400, 10], [1, 0]);

  const [count, setCount] = useState(1);
  const maxCount = 113;
  const [intervalTime, setIntervalTime] = useState(250);

  useEffect(() => {
    const onScroll = () => {
      if (!hasScrolled && window.pageYOffset > 0) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasScrolled]);

  useEffect(() => {
    if (hasScrolled && count < maxCount) {
      const id = setTimeout(() => {
        setCount(count + 1);
        setIntervalTime(Math.max(10, intervalTime - 10)); // reduce time by 10ms each second, but not less than 10ms
      }, intervalTime);
      return () => clearTimeout(id);
    }
  }, [count, hasScrolled, intervalTime]);

  return (
    <>
      <Head>
        <title>Engnr.</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <div className="relative flex min-h-screen flex-col items-start overflow-hidden">
          <motion.div
            style={{ y: yPosition3 }}
            variants={textVariants}
            initial="hidden3"
            animate="visible3"
            className="gradient-circle"
          />
          <motion.h1
            style={{ x: xPosition1 }}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="gradient-text mt-12 pr-28 text-3xl font-bold uppercase tracking-tighter"
          >
            Big Goals? When Results matter, Engnr. Delivers.
          </motion.h1>
          <motion.h2
            style={{ x: xPosition2 }}
            variants={textVariants}
            initial="hidden2"
            animate="visible2"
            className="mt-8 pr-20 tracking-tighter"
          >
            Discover. Connect. Empower. Merging intuition and innovation to
            achieve exceptional talent solutions.
          </motion.h2>
          <motion.button
            style={{ x: xPosition1 }}
            className="mt-8 flex gap-4 rounded-sm border border-color-white/30 px-4 py-4"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.0592 15.521C17.527 15.2015 18.0757 15.0211 18.6418 15.0004C19.2079 14.9798 19.7682 15.1199 20.258 15.4044C20.7479 15.689 21.1471 16.1064 21.4096 16.6084C21.672 17.1104 21.787 17.6764 21.7412 18.241C20.5414 18.6603 19.267 18.8235 18.0002 18.72C17.9963 17.5866 17.67 16.4768 17.0592 15.522C16.5171 14.6718 15.7693 13.972 14.8851 13.4875C14.0008 13.003 13.0086 12.7493 12.0002 12.75C10.9921 12.7495 10.0001 13.0032 9.11596 13.4877C8.23186 13.9723 7.48423 14.6719 6.94223 15.522M17.9992 18.719L18.0002 18.75C18.0002 18.975 17.9882 19.197 17.9632 19.416C16.1486 20.4571 14.0923 21.0033 12.0002 21C9.83023 21 7.79323 20.424 6.03723 19.416C6.01152 19.1846 5.99917 18.9519 6.00023 18.719M6.00023 18.719C4.73386 18.8263 3.46014 18.6637 2.26123 18.242C2.21558 17.6776 2.33062 17.1117 2.59306 16.6099C2.85549 16.1081 3.2546 15.6908 3.74423 15.4063C4.23386 15.1218 4.79403 14.9817 5.35995 15.0021C5.92587 15.0226 6.47444 15.2028 6.94223 15.522M6.00023 18.719C6.00382 17.5857 6.33185 16.4769 6.94223 15.522M15.0002 6.75C15.0002 7.54565 14.6842 8.30871 14.1215 8.87132C13.5589 9.43393 12.7959 9.75 12.0002 9.75C11.2046 9.75 10.4415 9.43393 9.87891 8.87132C9.3163 8.30871 9.00023 7.54565 9.00023 6.75C9.00023 5.95435 9.3163 5.19129 9.87891 4.62868C10.4415 4.06607 11.2046 3.75 12.0002 3.75C12.7959 3.75 13.5589 4.06607 14.1215 4.62868C14.6842 5.19129 15.0002 5.95435 15.0002 6.75ZM21.0002 9.75C21.0002 10.0455 20.942 10.3381 20.829 10.611C20.7159 10.884 20.5502 11.1321 20.3412 11.341C20.1323 11.5499 19.8842 11.7157 19.6113 11.8287C19.3383 11.9418 19.0457 12 18.7502 12C18.4548 12 18.1622 11.9418 17.8892 11.8287C17.6162 11.7157 17.3682 11.5499 17.1592 11.341C16.9503 11.1321 16.7846 10.884 16.6715 10.611C16.5584 10.3381 16.5002 10.0455 16.5002 9.75C16.5002 9.15326 16.7373 8.58097 17.1592 8.15901C17.5812 7.73705 18.1535 7.5 18.7502 7.5C19.347 7.5 19.9193 7.73705 20.3412 8.15901C20.7632 8.58097 21.0002 9.15326 21.0002 9.75ZM7.50023 9.75C7.50023 10.0455 7.44203 10.3381 7.32896 10.611C7.21589 10.884 7.05015 11.1321 6.84122 11.341C6.63229 11.5499 6.38425 11.7157 6.11127 11.8287C5.83828 11.9418 5.5457 12 5.25023 12C4.95476 12 4.66217 11.9418 4.38919 11.8287C4.11621 11.7157 3.86817 11.5499 3.65924 11.341C3.45031 11.1321 3.28457 10.884 3.1715 10.611C3.05843 10.3381 3.00023 10.0455 3.00023 9.75C3.00023 9.15326 3.23728 8.58097 3.65924 8.15901C4.0812 7.73705 4.65349 7.5 5.25023 7.5C5.84697 7.5 6.41926 7.73705 6.84122 8.15901C7.26318 8.58097 7.50023 9.15326 7.50023 9.75Z"
                stroke="#FFD95A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Our Vacancies</p>
          </motion.button>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-8 flex w-full items-center gap-4"
          >
            <div className="h-[1px] w-full bg-color-white" />
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35 27L25 37M25 37L15 27M25 37V13"
                stroke="#F6F2EC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="25" cy="25" r="24.5" stroke="#F6F2EC" />
            </svg>
          </motion.div>
          <motion.h1
            style={{ x: xPosition4 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: hasScrolled ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-medium tracking-tighter"
          >
            We're not your average recruiting firm.
          </motion.h1>
          <motion.h2
            style={{ opacity: opacityValue1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: hasScrolled ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 pr-10 tracking-tighter"
          >
            Since 2011, Engnr. has been pivotal in crafting successful careers
            and shaping the future of work. Our team, with its rich and diverse
            background, excels in both corporate recruitment and independent
            talent scouting, fusing our savvy and practicality to deliver
            extraordinary employment opportunities for our clients.
          </motion.h2>
          <motion.h3
            style={{ opacity: opacityValue1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: hasScrolled ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="pt-16 text-6xl"
          >
            {count}
          </motion.h3>
          <motion.h4
            style={{ opacity: opacityValue1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: hasScrolled ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold uppercase tracking-tighter text-color-yellow/80"
          >
            Active Talents
          </motion.h4>
          <motion.h2
            style={{ opacity: opacityValue1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: hasScrolled ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="pr-16 tracking-tighter"
          >
            Supporting a Wide Range of Employers and Job Seekers, from Startups
            to Fortune 500 Companies.
          </motion.h2>
          <motion.div
            style={{ x: xPosition5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: hasScrolled ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="my-16 grid grid-cols-2 tracking-tighter"
          >
            <div className="pr-2">
              <h1 className="text-6xl">93%</h1>
              <h2 className="text-sm">Employee Retention Rate</h2>
            </div>
            <div className="pr-2">
              <h1 className="text-6xl">$1M</h1>
              <h2 className="text-sm">Achieved $3B in Customer Cost Savings</h2>
            </div>
            <div className="pr-2">
              <h1 className="text-6xl">97%</h1>
              <h2 className="text-sm">Customer Satisfaction Rating</h2>
            </div>
          </motion.div>
          <div className="h-[1px] w-full bg-color-white" />
          {/* Service Pillars */}
          <h1 className="mt-16 text-2xl font-medium tracking-tighter ">
            Service Pillars
          </h1>
          <h2 className="mt-2 pr-10 tracking-tighter">
            Success comes from creating meaningful relationships with our
            clients and candidates, considering ourselves as an integral part of
            your professional journey.
          </h2>
          <button className="mt-8 flex gap-4 rounded-sm bg-color-yellow px-12 py-4 tracking-tighter text-color-black">
            <p>Learn More</p>
          </button>
          <Banner />
          <h1 className="mt-24 text-lg font-bold">
            --"In our firm's initial years, Engnr quickly scaled its operations
            by employing smart and innovative strategies to aid our clients in
            landing their dream jobs. Now, leveraging that experience, we are
            set to broaden our reach to additional job markets, persistently
            delivering top-notch services in the years to come."
          </h1>
          <h2 className="mt-8">Curtis Porter, President</h2>
          <div className="my-16 h-[1px] w-full bg-color-white" />
        </div>
        {/* Success stories */}
        <div className="space-y-8">
          <h1 className="mb-8 text-2xl font-medium ">Our Stories</h1>
          <SuccessCard
            image={welder1png}
            headline="Timothy"
            pharagraph="A seasoned welder from a small town, Timothy desired larger-scale opportunities to showcase his skills. With Engnr, he connected with a major construction company undertaking an infrastructure project in a bustling city. His portfolio and solid references landed him the role of Lead Welder. Today, he leads a team, contributing significantly to monumental projects, and symbolizes the possibilities that Engnr provides for skilled tradespeople seeking growth and progress."
          />
          <SuccessCard
            image={warehouse2png}
            headline="Nia"
            pharagraph="Once a forklift operator in a local warehouse, yearned for growth. Through Engnr, she connected with a multinational logistics company, impressing them with her diligence and ambition. Today, Nia supervises an entire warehouse shift, efficiently managing goods movement. Her ascent, despite being in a male-dominated field, epitomizes Engnr's mission of bridging the gap between potential and opportunities."
          />
          <SuccessCard
            image={aircraft3}
            headline="Viktor"
            pharagraph="An Eastern European aircraft mechanic, sought international opportunities to broaden his experience. Engnr helped him connect with a renowned global airline. His profound expertise and passion secured him the position. Today, Viktor serves as a vital part of the airline's maintenance team, working on cutting-edge aircraft. His story exemplifies Engnr's commitment to connecting skilled individuals with opportunities, transcending borders and industries."
          />
          <SuccessCard
            image={factory4}
            headline="Anastasya"
            pharagraph="Experienced machine operator, desired to take her passion for premium beer production to the next level. Using Engnr, she found a position as a Head Machine Operator at a leading craft brewery. Her unique blend of technical skills and knowledge about the brewing process made her the perfect candidate. Today, Anastasya oversees the production line of one of the country's most esteemed breweries, ensuring every batch meets the highest quality standards. Her story showcases how Engnr can match unique talents with niche industries to brew up success."
          />
          <SuccessCard
            image={warehouse5}
            headline="Igor"
            pharagraph="At just 23, Igor from Ukraine displayed exceptional organizational and leadership skills that belied his young age. Keen to apply these talents in a demanding environment, he turned to Engnr. Through our platform, he connected with an international corporation in need of an Area Manager for their large-scale warehouse. His youthful energy, strategic thinking, and ability to manage diverse teams quickly made him an indispensable asset to the company. Today, Igor successfully oversees daily operations, embodying Engnr's vision of driving success through a perfect blend of talent and opportunity."
          />
          <SuccessCard
            image={construction6}
            headline="Tomas"
            pharagraph="Hailing from a family of builders, Tomas was passionate about construction. But he aspired to shift from hands-on work to managerial roles. Engnr bridged the gap, connecting him with a company seeking a site manager for an ambitious construction project. With his deep understanding of the field and leadership skills, Tomas made an instant impact. He is now successfully overseeing complex operations, ensuring projects are completed within scope and budget. Tomas' journey is testament to Engnr's mission of empowering skilled professionals to reach their full potential."
          />
        </div>
        <h1 className="my-8 text-xl">
          Celebrating a decade of thought leadership, innovation and client
          partnerships.
        </h1>
        <button className="my-8 flex gap-4 rounded-sm bg-color-yellow px-12 py-4 tracking-tighter text-color-black">
          <p>Learn More</p>
        </button>
      </MainLayout>
    </>
  );
};

export default Home;
