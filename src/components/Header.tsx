import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MovieWebSite
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link to="/trending" className="text-gray-800 hover:text-blue-600">
            Trending
          </Link>
          <Link to="/top-rated" className="text-gray-800 hover:text-blue-600">
            Top Rated
          </Link>
          <Link to="/popular" className="text-gray-800 hover:text-blue-600">
            Popular
          </Link>
          <Link to="/favourites" className="text-gray-800 hover:text-blue-600">
            Favourites
          </Link>
        </nav>
        <div className="text-gray-800 hover:text-blue-600">
          <FaSearch size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;
