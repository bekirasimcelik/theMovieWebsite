import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="border-b-2 border-white shadow-md py-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link
          to="/"
          className="text-3xl font-bold bg-gradient-to-b from-red-500 via-[gold] to-black text-transparent bg-clip-text"
        >
          MovieWebSite
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-[gold] hover:text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-[gold] to-black"
          >
            Films
          </Link>
          <Link
            to="/"
            className="text-[gold] hover:text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-[gold] to-black"
          >
            Series
          </Link>
          <Link
            to="/"
            className="text-[gold] hover:text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-[gold] to-black"
          >
            Actors
          </Link>
          <Link
            to="/favourites"
            className="text-[gold] hover:text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-[gold] to-black"
          >
            Favourites
          </Link>
        </nav>
        <div className="text-[gold]">
          <FaSearch size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;
