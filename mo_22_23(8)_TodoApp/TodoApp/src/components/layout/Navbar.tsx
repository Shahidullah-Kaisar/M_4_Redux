import { Link } from 'react-router-dom';
import { ModeToggle } from '../mode-toggle';

const Navbar = () => {
  return (
    <nav className="text-blue-700 font-bold px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/">MyApp</Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/user" className="hover:text-gray-300">User</Link>
          <Link to="/tasks" className="hover:text-gray-300">Tasks</Link>
          <ModeToggle/>
        </div>

        {/* Mobile Menu (optional burger icon) */}
        <div className="md:hidden">
          <button className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
