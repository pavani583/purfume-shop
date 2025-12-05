import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-indigo-600">LuxPerfume</Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Collections</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">About</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Contact</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2">🔍</button>
            <button className="p-2">🛒</button>
          </div>
        </div>
      </div>
    </nav>
  );
}