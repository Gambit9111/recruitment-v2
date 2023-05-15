// Import the necessary libraries
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';

// Define the page component
const Employers: React.FC = () => (
  <MainLayout>
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">For Employers</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Why Partner With Us?</h2>
        <p>
          As your trusted partner, we provide quality talent to help your business grow and thrive. We understand the market and the importance of filling your open positions with highly skilled individuals. 
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Our Process</h2>
        <p>
          Our recruitment process is designed to understand your business needs, culture and what you seek in potential candidates. This allows us to identify and select only the most suitable candidates for your consideration.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Sectors We Cover</h2>
        <p>
          We cover a wide range of sectors including IT, Finance, Healthcare, Engineering, Manufacturing and more. Whatever your sector, we can find the right people for your team.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
        <p>
          Ready to fill your vacancies with top talent? Contact us at employers@engnr.com or call us at (123) 456-7890. We look forward to partnering with you!
        </p>
      </section>
    </div>
  </MainLayout>
);

// Export the page component
export default Employers;