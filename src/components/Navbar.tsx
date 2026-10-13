import { FaRegBookmark } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-transparent container mx-auto px-4 py-3">
      {/* Brand Logo & Mobile Menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden pl-0 mr-2"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-lg"
          >
            <li>
              <a href="#">Browse</a>
            </li>
            <li>
              <a href="#">Companies</a>
            </li>
            <li>
              <a href="#">Salaries</a>
            </li>
            <li>
              <a href="#">Post a Job</a>
            </li>
          </ul>
        </div>

        <p className="font-extrabold text-xl tracking-tight text-slate-900">
          Dev<span className="text-orange-600">Jobs</span>
        </p>
      </div>

      {/* Center Nav Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <li>
            <a href="#" className="hover:text-slate-900 transition">
              Browse
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-slate-900 transition">
              Companies
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-slate-900 transition">
              Salaries
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-slate-900 transition">
              Post a Job
            </a>
          </li>
        </ul>
      </div>

      {/* Right Action Button */}
      <div className="navbar-end">
        <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition shadow-sm">
          <FaRegBookmark className="text-xs" />
          <span>Saved Jobs · 2</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
