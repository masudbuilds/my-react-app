export function FilterSection() {
  return (
    <div className="container mx-auto px-4 pt-10 pb-6">
      {/* Title & Subtitle */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
        Find your next developer role
      </h1>
      <p className="text-slate-500 mt-2 text-sm md:text-base">
        Search, filter, and save the jobs you like — everything updates
        instantly.
      </p>

      {/* Search & Filter Row */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 mt-6">
        {/* Search Input */}
        <div className="relative flex-1">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-4.3-4.3"
              />
            </svg>
          </span>
          <input
            type="search"
            placeholder="Search by title or company"
            className="w-full pl-11 pr-4 py-2.5 text-sm bg-white border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent placeholder:text-slate-400 shadow-xs"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
          <button className="px-5 py-2 text-xs font-semibold rounded-full bg-slate-900 text-white shadow-xs hover:bg-slate-800 transition">
            All
          </button>
          <button className="px-5 py-2 text-xs font-medium rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition">
            Frontend
          </button>
          <button className="px-5 py-2 text-xs font-medium rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition">
            Backend
          </button>
          <button className="px-5 py-2 text-xs font-medium rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition">
            Design
          </button>
        </div>
      </div>
    </div>
  );
}
