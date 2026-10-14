import { use, useState } from "react";
import { FilterSection } from "./FilterSection";
import JobSection from "./JobSection";
import Navbar from "./Navbar";
import type { FilterCategory, Job } from "../types/Job";
import Footer from "./Footer";

interface MainComponentsProps {
  jobsPromise: Promise<Job[]>;
}

export function MainComponents({ jobsPromise }: MainComponentsProps) {
  const data = use(jobsPromise);

  const [jobsData, setJobsData] = useState(data);
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);

  const handleTabChange = (type: FilterCategory) => {
    if(type === "Frontend") {
      const filterTab = data.filter(el => el.category === "Frontend");
      setJobsData(filterTab);
    } else if(type === "Backend") {
      const filterTab = data.filter((el) => el.category === "Backend");
      setJobsData(filterTab);
    } else if(type === "Design") {
      const filterTab = data.filter((el) => el.category === "Design");
      setJobsData(filterTab);
    } else {
      setJobsData(data);
    }
  };
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar savedJobs={savedJobs} />
      <FilterSection handleTabChange={handleTabChange} />
      <JobSection
        jobsData={jobsData}
        savedJobs={savedJobs}
        setSavedJobs={setSavedJobs}
      />
      <Footer />
    </div>
  );
}
