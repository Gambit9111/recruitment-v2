// Import the necessary libraries
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';

// Define the page component
const AboutUs: React.FC = () => (
  <MainLayout>
    <div className="container mx-auto">
      <h1 className="gradient-text mt-12 pr-28 text-3xl font-bold uppercase tracking-tighter">About Us</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
        <p>
          Our mission is to empower businesses with innovative technology solutions that drive growth and efficiency. We aim to be a trusted partner for our clients, delivering exceptional service and results.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Our Team</h2>
        <p>
          We are a dedicated team of engineers, developers, and strategists passionate about technology. Our diverse backgrounds and experiences contribute to innovative, effective solutions for our clients.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Our History</h2>
        <p>
          Founded in 2023, we have grown from a small team of engineers to a full-service technology company serving clients in various industries. Over the years, we have remained committed to quality, innovation, and customer satisfaction.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p>
          Interested in learning more about our services? Contact us at info@engnr.com or call us at (123) 456-7890. We look forward to working with you!
        </p>
      </section>
    </div>
  </MainLayout>
);

// Export the page component
export default AboutUs;