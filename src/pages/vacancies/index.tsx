// Import the necessary libraries
import { NextPage } from "next";
import MainLayout from "@/components/layouts/MainLayout";
import Card from "@/components/content/vacancies/Card";
import { prisma } from "@/server/db";

export type Tag = {
  id: number;
  vacancyTitle: string;
  tagName: string;
};

export type Vacancy = {
  id: number;
  title: string;
  description: string;
  location: string;
  salaryRange: string;
  experienceLevel: string;
  publishedDate: string;
  tags: Tag[];
};

type VacanciesProps = {
  vacancies: Vacancy[]; // replace 'any' with your actual type for a vacancy
};

const Vacancies: NextPage<VacanciesProps> = ({ vacancies }) => {
  return (
    <MainLayout>
      <div className="flex min-h-screen flex-col items-center gap-4 p-4">
        <h1 className="text-3xl font-bold">Current Vacancies</h1>
        <p>
          Explore exciting job opportunities at Engnr. Join us and shape the
          future of work.
        </p>
          {vacancies.map((vacancy) => (
            <Card key={vacancy.id} {...vacancy} />
          ))}
      </div>
    </MainLayout>
  );
};

export default Vacancies;

export async function getServerSideProps() {
  // Fetch data from your database
  const vacancies = await prisma.vacancy.findMany({ include: { tags: true } });

  // Convert Date objects to strings
  const vacanciesWithSerializedDates = vacancies.map((vacancy) => ({
    ...vacancy,
    publishedDate: vacancy.publishedDate.toISOString(),
  }));

  return {
    props: {
      vacancies: vacanciesWithSerializedDates,
    },
  };
}
