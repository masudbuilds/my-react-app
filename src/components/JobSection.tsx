import type { Job } from "../types/Job";
import { JobCard } from "./JobCard";
// import { SavedJobCard } from "./SavedJobCard";

interface JobsDataProps {
  jobsData: Job[];
}

const JobSection = ({jobsData}: JobsDataProps) => {
  console.log(jobsData)
  return (
    <div className="container mx-auto flex justify-between gap-6 px-4 pt-10 pb-6">
      {/* Latest Jobs */}
      <div className="w-3/4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">Latest Jobs</h3>
          <p className="text-slate-400">6 roles found</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {jobsData.map((job) => (
              <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>

      {/* Saved Jobs */}
      <div className="w-1/4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">Saved Jobs</h3>
          <p className="text-slate-400">6 Saved</p>
        </div>
        {/* <div>
          {
            jobsData.map((job) => 
              <SavedJobCard key={job.id} job={job}/>)
          }
        </div> */}
      </div>
    </div>
  );
};

export default JobSection;