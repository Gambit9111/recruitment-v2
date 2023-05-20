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
            className="fixed left-0 top-[5.05rem] z-20 h-full w-full bg-color-black overflow-auto"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5 }}
          >
            {/* Add your dropdown menu items here */}
            <ul className="space-y-4 pt-8 text-3xl font-light uppercase text-color-white/50 p-4">
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
            <footer className="bg-color-black">
              <div className="mb-8 mt-8 h-[1px] w-full bg-color-white" />
              <div className="flex">
                <div className="ml-4 flex w-12 flex-col items-center gap-8 pb-16">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-[1.5px] border-color-white">
                    <p className="text-[0.55rem] font-medium uppercase tracking-wider">
                      Engnr.
                    </p>
                  </div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 32 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M28.0904 0.5C30.2482 0.5 32 2.28721 32 4.48847V29.1569C32 31.3582 30.2481 33.1454 28.0904 33.1454H21.4361V20.845H25.5986L26.3906 15.5771H21.4361V12.1584C21.4361 10.7172 22.1282 9.3124 24.3474 9.3124H26.6V4.82749C26.6 4.82749 24.5556 4.47158 22.6011 4.47158C18.5206 4.47158 15.8536 6.99452 15.8536 11.562V15.5771H11.3178V20.845H15.8536V33.1454H3.90963C1.75188 33.1454 0 31.3582 0 29.1569V4.48847C0 2.28721 1.75181 0.5 3.90963 0.5L28.0904 0.5Z"
                      fill="#F6F2EC"
                    />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 32 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M28.0904 0.5C30.2482 0.5 32 2.28721 32 4.48847V29.1569C32 31.3582 30.2481 33.1454 28.0904 33.1454H3.90963C1.75188 33.1454 0 31.3582 0 29.1569V4.48847C0 2.28721 1.75181 0.5 3.90963 0.5L28.0904 0.5ZM16 5.6646C13.0296 5.6646 12.6571 5.67742 11.4905 5.73174C10.3263 5.78594 9.53125 5.97454 8.8355 6.25043C8.11625 6.53557 7.50631 6.91711 6.89825 7.53737C6.29019 8.1577 5.91619 8.78 5.63669 9.51369C5.36631 10.2235 5.18144 11.0346 5.12825 12.2222C5.07506 13.4123 5.0625 13.7923 5.0625 16.8227C5.0625 19.853 5.07506 20.233 5.12825 21.4231C5.18144 22.6108 5.36631 23.4219 5.63669 24.1317C5.91619 24.8654 6.29019 25.4877 6.89825 26.108C7.50631 26.7283 8.11625 27.1099 8.8355 27.395C9.53125 27.6708 10.3263 27.8594 11.4905 27.9136C12.6571 27.968 13.0296 27.9808 16 27.9808C18.9704 27.9808 19.3429 27.968 20.5095 27.9136C21.6737 27.8594 22.4687 27.6708 23.1645 27.395C23.8837 27.1099 24.4937 26.7283 25.1017 26.108C25.7098 25.4877 26.0838 24.8654 26.3633 24.1317C26.6337 23.4219 26.8186 22.6108 26.8717 21.4231C26.9249 20.233 26.9375 19.853 26.9375 16.8227C26.9375 13.7923 26.9249 13.4123 26.8717 12.2222C26.8186 11.0346 26.6337 10.2235 26.3633 9.51369C26.0838 8.78 25.7098 8.1577 25.1017 7.53737C24.4937 6.91711 23.8837 6.53557 23.1645 6.25043C22.4687 5.97454 21.6737 5.78594 20.5095 5.73174C19.3429 5.67742 18.9704 5.6646 16 5.6646ZM16 7.6751C18.9204 7.6751 19.2664 7.68645 20.4197 7.74013C21.4861 7.7898 22.0652 7.97158 22.4506 8.12429C22.9612 8.32673 23.3255 8.56857 23.7083 8.95898C24.091 9.34945 24.328 9.72117 24.5264 10.242C24.6762 10.6352 24.8544 11.226 24.903 12.3139C24.9556 13.4904 24.9668 13.8434 24.9668 16.8227C24.9668 19.802 24.9556 20.1549 24.903 21.3315C24.8544 22.4194 24.6762 23.0102 24.5264 23.4034C24.328 23.9243 24.091 24.2959 23.7083 24.6864C23.3255 25.0769 22.9612 25.3186 22.4506 25.5211C22.0652 25.6739 21.4861 25.8556 20.4197 25.9052C19.2666 25.9589 18.9206 25.9703 16 25.9703C13.0794 25.9703 12.7335 25.9589 11.5803 25.9052C10.5139 25.8556 9.93481 25.6739 9.54937 25.5211C9.03881 25.3186 8.6745 25.0769 8.29175 24.6864C7.909 24.2959 7.67194 23.9243 7.47356 23.4034C7.32381 23.0102 7.14563 22.4194 7.09694 21.3315C7.04431 20.1549 7.03319 19.802 7.03319 16.8227C7.03319 13.8434 7.04431 13.4904 7.09694 12.3139C7.14563 11.226 7.32381 10.6352 7.47356 10.242C7.67194 9.72117 7.909 9.34945 8.29175 8.95898C8.6745 8.56857 9.03881 8.32673 9.54937 8.12429C9.93481 7.97158 10.5139 7.7898 11.5803 7.74013C12.7336 7.68645 13.0796 7.6751 16 7.6751ZM16 11.0929C12.8981 11.0929 10.3834 13.6582 10.3834 16.8227C10.3834 19.9872 12.8981 22.5525 16 22.5525C19.1019 22.5525 21.6166 19.9872 21.6166 16.8227C21.6166 13.6582 19.1019 11.0929 16 11.0929ZM16 20.542C13.9864 20.542 12.3542 18.8769 12.3542 16.8227C12.3542 14.7685 13.9864 13.1033 16 13.1033C18.0136 13.1033 19.6458 14.7685 19.6458 16.8227C19.6458 18.8769 18.0136 20.542 16 20.542ZM23.151 10.8665C23.151 11.606 22.5633 12.2054 21.8384 12.2054C21.1136 12.2054 20.526 11.606 20.526 10.8665C20.526 10.127 21.1136 9.52753 21.8384 9.52753C22.5633 9.52753 23.151 10.127 23.151 10.8665Z"
                      fill="#F6F2EC"
                    />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 32 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M28.0904 0.5C30.2482 0.5 32 2.28721 32 4.48847V29.1569C32 31.3582 30.2481 33.1454 28.0904 33.1454H3.90963C1.75188 33.1454 0 31.3582 0 29.1569V4.48847C0 2.28721 1.75181 0.5 3.90963 0.5L28.0904 0.5ZM12.2199 27.5691C20.7161 27.5691 25.3617 20.387 25.3617 14.1623C25.3617 13.9572 25.3617 13.7519 25.3521 13.5565C26.2525 12.892 27.0379 12.0614 27.6606 11.1136C26.8368 11.4849 25.946 11.739 25.0073 11.8563C25.9652 11.2699 26.6931 10.3514 27.0379 9.24718C26.1472 9.78461 25.1606 10.1755 24.1069 10.3905C23.264 9.47193 22.0667 8.90517 20.7353 8.90517C18.1874 8.90517 16.1184 11.0159 16.1184 13.6152C16.1184 13.9865 16.1567 14.348 16.2429 14.69C12.4019 14.4946 9.00156 12.6184 6.72188 9.7651C6.32913 10.4589 6.09925 11.2699 6.09925 12.1299C6.09925 13.7617 6.91344 15.208 8.15862 16.0483C7.40194 16.0287 6.69312 15.8138 6.0705 15.462V15.5206C6.0705 17.8072 7.66056 19.7029 9.77744 20.1426C9.39431 20.2501 8.98244 20.3088 8.56094 20.3088C8.264 20.3088 7.97669 20.2795 7.68931 20.2208C8.27362 22.097 9.97856 23.4552 11.9996 23.4943C10.4192 24.7549 8.42688 25.5073 6.26213 25.5073C5.88856 25.5073 5.52456 25.4878 5.16056 25.4389C7.18163 26.7874 9.61456 27.5691 12.2199 27.5691Z"
                      fill="#F6F2EC"
                    />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 32 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M28.0904 0.5C30.2482 0.5 32 2.28721 32 4.48847V29.1569C32 31.3582 30.2481 33.1454 28.0904 33.1454H3.90963C1.75188 33.1454 0 31.3582 0 29.1569V4.48847C0 2.28721 1.75181 0.5 3.90963 0.5L28.0904 0.5ZM10.0288 27.4884V13.0966H5.33881V27.4884H10.0288ZM26.9375 27.4884V19.2353C26.9375 14.8146 24.6239 12.7581 21.5387 12.7581C19.0509 12.7581 17.9366 14.1539 17.3126 15.1342V13.0966H12.6238C12.686 14.4471 12.6238 27.4884 12.6238 27.4884H17.3126V19.451C17.3126 19.0208 17.3429 18.5908 17.4672 18.2833C17.8056 17.4241 18.5776 16.534 19.8731 16.534C21.569 16.534 22.2485 17.8543 22.2485 19.7882V27.4884H26.9375ZM7.7155 6.15696C6.11087 6.15696 5.0625 7.23317 5.0625 8.64375C5.0625 10.0247 6.079 11.1305 7.65344 11.1305H7.68369C9.319 11.1305 10.3369 10.0247 10.3369 8.64375C10.3066 7.23515 9.32187 6.16002 7.7155 6.15696Z"
                      fill="#F6F2EC"
                    />
                  </svg>
                </div>
                <div className="space-y-8">
                  <div className="flex w-full flex-col px-8 pt-4 font-light uppercase">
                    <h1 className="pb-2 text-color-white/80">Contact</h1>
                    <div className="space-y-1 text-sm tracking-normal text-color-white/50">
                      <h2>Customer Service</h2>
                      <h2 className="text-color-white/80">+31 6 25 30 66 45</h2>
                      <h2 className="lowercase text-color-white/80">
                        work@engnr.nl
                      </h2>
                      <h2>Careers</h2>
                      <h2>Advertise with us</h2>
                    </div>
                  </div>
                  <div className="flex w-full flex-col px-8 font-light uppercase">
                    <h1 className="pb-2 text-color-white/80">Address</h1>
                    <div className="space-y-1 text-sm tracking-normal text-color-white/50">
                      <h2>Bredasebaan 14</h2>
                      <h2>4744 RZ bosschenhoofd</h2>
                      <h2>Netherlands</h2>
                    </div>
                  </div>
                </div>
              </div>
              <p className="p-1 text-center text-[0.6rem] font-medium uppercase tracking-wider text-color-yellow/30">
                Engnr. © 2023
              </p>
              {/* <div>
      <p className='text-center'>© 2023 Engnr</p>
      <p className="hidden md:block">Contact: info@engnr.com</p>
      <p className="hidden md:block">Phone: 123-456-7890</p>
      <p className="hidden md:block">Address: 123 Main St, City, Country</p>
    </div>
    <nav>
      <ul className="flex justify-center space-x-4 md:justify-end">
        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
        <li><Link href="/terms-and-conditions">Terms and Conditions</Link></li>
        <li className="hidden md:block"><Link href="/careers">Careers</Link></li>
        <li className="hidden md:block"><Link href="/about-us">About Us</Link></li>
      </ul>
    </nav> */}
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header2;
