import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import type { Job } from "../types/Job";

interface JobCardProps {
  job: Job;
  handleSaveJob: (job: Job) => void;
  savedJobs: Job[];
}

export function JobCard({ job, savedJobs, handleSaveJob }: JobCardProps) {
  const isSaved = savedJobs.some((el) => el.id === job.id);
  return (
    <div className={`p-5 rounded-2xl bg-white border border-slate-200/80 flex flex-col justify-between gap-6 ${isSaved ? "border-2 border-success" : ""}`}>
      {/* Top Row: Title, Company/Location & Type Badge */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-bold text-slate-900 text-base">{job.title}</h3>
          <p className="text-xs text-slate-500 mt-1">
            {job.company} · {job.location}
          </p>
        </div>

        <span className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-blue-50 text-blue-600 shrink-0">
          {job.type}
        </span>
      </div>

      {/* Bottom Row: Salary & Save Button */}
      <div className="flex items-center justify-between">
        <span className="font-bold text-slate-900 text-sm">{job.salary}</span>

        <button
          type="button"
          aria-pressed={isSaved}
          onClick={() => handleSaveJob(job)}
          className={`inline-flex items-center justify-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
            isSaved
              ? "border-emerald-200 bg-emerald-50 text-emerald-700 shadow-sm ring-1 ring-emerald-100 hover:bg-emerald-100"
              : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
          }`}
        >
          {isSaved ? (
            <FaBookmark className="text-[10px]" />
          ) : (
            <FaRegBookmark className="text-[10px]" />
          )}
          <span>{isSaved ? "Saved" : "Save"}</span>
        </button>
      </div>
    </div>
  );
}
