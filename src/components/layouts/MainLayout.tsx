import React from 'react';
import Link from 'next/link';

import Header from '../navigation/Header';
import Footer from '../navigation/Footer';

type MainLayoutProps = {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
      <main className="flex-grow">
        {children}
      </main>
        <Footer />
    </div>
  );
};

export default MainLayout;