import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { gradientTextColor } from "../constants/Colors";

const Header: React.FC = () => {
  return (
    <header className="border-b-2 border-white shadow-md py-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className={gradientTextColor}>
          MovieWebSite
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className={gradientTextColor}>
            Films
          </Link>
          <Link to="/" className={gradientTextColor}>
            Series
          </Link>
          <Link to="/" className={gradientTextColor}>
            Actors
          </Link>
          <Link to="/favourites" className={gradientTextColor}>
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
