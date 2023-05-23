import { type AppType } from "next/dist/shared/lib/utils";
import { Archivo } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const archivo = Archivo({ subsets: ["latin"] });

import "@/styles/globals.css";

import { useRouter } from "next/router";

// @ts-ignore
const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={router.route}
        className={archivo.className}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        // transition={{
        //   duration: 5, // Duration for the entry animation
        //   exit: 0.5, // Duration for the exit animation
        // }}
        variants={{
          pageInitial: {
            opacity: 0,
            transition: { duration: 0.5 }, // Duration for the initial animation
          },
          pageAnimate: {
            opacity: 1,
            transition: { duration: 1 }, // Duration for the animate animation
          },
          pageExit: {
            opacity: 0,
            transition: { duration: 0.5 }, // Duration for the exit animation
          },
        }}
      >
        <Component {...pageProps} />
      </motion.main>
    </AnimatePresence>
  );
};

export default MyApp;
