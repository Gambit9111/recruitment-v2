import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { SetStateAction } from "react";
import type { MotionValue } from "framer-motion";

type Props = {
    hasScrolled: SetStateAction<boolean>
    opacityValue1: MotionValue<number>
};

function ActiveWorkers({hasScrolled, opacityValue1}: Props) {

  // * count state for current active workers
  const [count, setCount] = useState(1);
  const maxCount = 113;
  // * interval state to increase the speed of numbers
  const [intervalTime, setIntervalTime] = useState(250);

  // * starts the countdown of active workers
  useEffect(() => {
    if (hasScrolled && count < maxCount) {
      const id = setTimeout(() => {
        setCount(count + 1);
        setIntervalTime(Math.max(10, intervalTime - 10)); // reduce time by 10ms each second
      }, intervalTime);
      return () => clearTimeout(id);
    }
  }, [count, hasScrolled, intervalTime]);

  return (
    <>
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
        Supporting a Wide Range of Employers and Job Seekers, from Startups to
        Fortune 500 Companies.
      </motion.h2>
    </>
  );
}

export default ActiveWorkers;
