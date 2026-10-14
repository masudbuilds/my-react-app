import { FaRegBookmark } from "react-icons/fa";
import type { Job } from "../types/Job";

export function JobCard({ job }: { job: Job }) {
  return (
    <div className="p-5 rounded-2xl bg-white border border-slate-200/80 flex flex-col justify-between gap-6">
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

        <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition cursor-pointer">
          <FaRegBookmark className="text-[10px]" />
          <span>Save</span>
        </button>
      </div>
    </div>
  );
}
