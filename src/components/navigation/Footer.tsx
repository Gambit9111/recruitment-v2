import React from 'react';
import Link from 'next/link';

type FooterProps = {
}

const Footer: React.FC<FooterProps> = () => {
  return (
  <footer className="bg-color-graydark rounded-t-lg text-color-white py-4 px-4 md:flex md:justify-between md:items-center md:px-8">
    <div>
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
    </nav>
  </footer>
  );
};

export default Footer;