import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import MainLayout from "@/components/layouts/MainLayout";
import Card from "@/components/content/vacancies/Card";
import useSWR from "swr";
import axios from "axios";

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


const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Vacancies: NextPage = () => {
  // ? handles data, loading states and errors
  const { data: vacancies, error } = useSWR("/api/data/vacancies", fetcher);
  const [loading, setLoading] = useState(!error && !vacancies);

  useEffect(() => {
    setLoading(!error && !vacancies);
  }, [vacancies, error]);

  if (loading) {
    return (
      <MainLayout>
        <div className="flex min-h-screen flex-col items-center gap-4">
          <h1 className="gradient-text mt-12 pr-28 text-3xl font-bold uppercase tracking-tighter">Current Vacancies</h1>
          <p>
            Explore exciting job opportunities at Engnr. Join us and shape the
            future of work.
          </p>
          <div>Loading...</div>
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div className="flex min-h-screen flex-col items-center gap-4">
          <h1 className="gradient-text mt-12 pr-28 text-3xl font-bold uppercase tracking-tighter"></h1>
          <p>
            Explore exciting job opportunities at Engnr. Join us and shape the
            future of work.
          </p>
          <div>Error occurred: {error.message}</div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="flex min-h-screen flex-col items-center gap-4">
        <h1 className="gradient-text mt-12 pr-28 text-3xl font-bold uppercase tracking-tighter">Current Vacancies</h1>
        <p>
          Explore exciting job opportunities at Engnr. Join us and shape the
          future of work.
        </p>
        {vacancies.map((vacancy: Vacancy) => (
          <Card key={vacancy.id} {...vacancy} />
        ))}
      </div>
    </MainLayout>
  );
};

export default Vacancies;
