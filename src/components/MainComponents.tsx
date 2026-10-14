import { use } from "react";
import { FilterSection } from "./FilterSection";
import JobSection from "./JobSection";
import Navbar from "./Navbar";
import type { Job } from "../types/Job";

interface MainComponentsProps {
  jobsPromise: Promise<Job[]>
}

export function MainComponents({jobsPromise}: MainComponentsProps) {

  const jobsData = use(jobsPromise);
  return (
    <>
      <Navbar />
      <FilterSection />
      <JobSection jobsData={jobsData}/>
    </>
  );
}