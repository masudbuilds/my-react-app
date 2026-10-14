import type { Job } from "../types/Job";


export function SavedJobCard({ job }: { job: Job }) {
  return (
    <div className="p-4 rounded-2xl bg-white border border-slate-200/80 flex flex-col gap-3">
      <div>
        <h4 className="font-bold text-slate-900 text-sm">{job.title}</h4>
        <p className="text-xs text-slate-500 mt-0.5">
          {job.company} · {job.location}
        </p>
      </div>

      <button className="w-full py-2 text-xs font-semibold text-amber-800 bg-white border border-slate-200 rounded-lg hover:bg-amber-50/50 transition cursor-pointer">
        Remove
      </button>
    </div>
  );
}
