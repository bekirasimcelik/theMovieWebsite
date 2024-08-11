import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFavourites, removeFavourite } from "../slices/favouriteSlice";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

const FavouritePage: React.FC = () => {
  const favourites = useSelector(selectFavourites);
  const dispatch = useDispatch();

  const handleRemoveFavourite = (movie) => {
    dispatch(removeFavourite(movie));
  };

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl text-white font-bold mb-6">My Favourites</h1>
        {favourites.length === 0 ? (
          <Link to="/" className="text-2xl font-bold text-white">
            No favourites added yet. Would you like to check it more?
          </Link>
        ) : (
          favourites.map((movie) => (
            <div
              key={movie.id}
              className="flex items-center mb-4 p-4 bg-gray-300 shadow rounded-lg"
            >
              <img
                src={`${IMG_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                className="w-24 h-36 object-cover rounded-md"
              />
              <div className="ml-4 flex-1">
                <h2 className="text-xl font-bold">{movie.title}</h2>
                <p className="text-gray-600">
                  Release Date: {movie.release_date}
                </p>
                <p className="text-gray-700 mt-2">{movie.overview}</p>
              </div>
              <FaTrashAlt
                className="text-red-600 cursor-pointer"
                size={24}
                onClick={() => handleRemoveFavourite(movie)}
              />
            </div>
          ))
        )}
      </div>
    </Layout>
  );
};

export default FavouritePage;
