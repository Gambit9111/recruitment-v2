import { type AppType } from "next/dist/shared/lib/utils";
import { Archivo } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"] });

import "@/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={archivo.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
