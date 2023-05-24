import { type AppType } from "next/dist/shared/lib/utils";
import { Archivo } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const archivo = Archivo({ subsets: ["latin"] });

import "@/styles/globals.css";

// router needed to capcure route change
import { useRouter } from "next/router";


const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();

  return (

    // * makes the page fade out / fade in during route change
    
    <AnimatePresence mode="wait">
      <motion.span
        key={router.route}
        className={archivo.className}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
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
      </motion.span>
    </AnimatePresence>
  );
};

export default MyApp;
