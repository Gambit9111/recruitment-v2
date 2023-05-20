import React, { useState } from 'react';
import Link from 'next/link';
import { Transition } from '@headlessui/react';

type HeaderProps = {
}


const Header: React.FC<HeaderProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-color-black text-color-white rounded-b-lg z-10">
      <div className="px-4 py-2 flex justify-between items-center">
        <div className="font-bold text-xl text-color-yellow">Engnr</div>
        <div className="md:hidden">
          <button type="button" onClick={() => setIsOpen(!isOpen)}>
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                // Close icon
                <path fillRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 011.414 1.414l-4.828 4.829 4.828 4.828z" clipRule="evenodd" />
              ) : (
                // Hamburger icon
                <path fillRule="evenodd" d="M4 5a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm1 6a1 1 0 100 2h14a1 1 0 100-2H5z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/vacancies">Vacancies</Link></li>
            <li><Link href="/employers">Employers</Link></li>
            <li><Link href="/apply">Apply</Link></li>
          </ul>
        </nav>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
          <div 
            className="absolute top-0 left-0 w-full p-4 bg-color-graydark z-50 md:hidden rounded-lg mt-1"
          >
            <ul className="space-y-1 text-color-white">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/vacancies">Vacancies</Link></li>
              <li><Link href="/employers">Employers</Link></li>
              <li><Link href="/apply">Apply</Link></li>
            </ul>
          </div>
      </Transition>
    </header>
  )}

export default Header;