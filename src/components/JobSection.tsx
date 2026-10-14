import type { Job } from "../types/Job";

interface JobsDataProps {
  jobsData: Job[];
}

const JobSection = ({jobsData}: JobsDataProps) => {
  console.log(jobsData)
  return (
    <div className="container mx-auto flex justify-between gap-6 px-4 pt-10 pb-6">
      {/* Latest Jobs */}
      <div className="w-3/4">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold">Latest Jobs</h3>
          <p className="text-slate-400">6 roles found</p>
        </div>
        <div>
          {
            jobsData.map((job) => <div key={job.id}>
              <h1>{job.title}</h1>
            </div>)
          }
        </div>
      </div>

      {/* Saved Jobs */}
      <div className="w-1/4">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold">Saved Jobs</h3>
          <p className="text-slate-400">6 Saved</p>
        </div>
      </div>
    </div>
  );
};

export default JobSection;