import React from 'react';
import Link from 'next/link';

import Header from '../navigation/Header';
import Header2 from '../navigation/Header2';
import Footer from '../navigation/Footer';

type MainLayoutProps = {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen tracking-tighter">
        <Header2 />
      <main className="flex-grow px-4">
        {children}
      </main>
        <Footer />
    </div>
  );
};

export default MainLayout;