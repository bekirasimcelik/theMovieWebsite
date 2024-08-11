import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetMovieDetailsQuery,
  useGetMovieCreditsQuery,
} from "../slices/movieApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, selectFavourites } from "../slices/favouriteSlice";
import { FaHeart, FaRegHeart, FaRegBookmark, FaRegImage } from "react-icons/fa";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: movie,
    isLoading: isMovieLoading,
    error: movieError,
  } = useGetMovieDetailsQuery(id);
  const {
    data: credits,
    isLoading: isCreditsLoading,
    error: creditsError,
  } = useGetMovieCreditsQuery(id);
  const dispatch = useDispatch();
  const favourites = useSelector(selectFavourites);

  const isFavourite = favourites.find((fav) => fav.id === movie?.id);

  const handleAddFavourite = () => {
    if (movie && !isFavourite) {
      dispatch(addFavourite(movie));
    }
  };

  if (isMovieLoading || isCreditsLoading) return <div>Loading...</div>;
  if (movieError || creditsError || !movie || !credits)
    return <div>Error fetching movie details or credits</div>;

  return (
    <div className="detail-page container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="poster-container w-full md:w-1/3 mb-6 md:mb-0">
          <img
            src={`${IMG_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="details-container w-full md:w-2/3 md:ml-8">
          <h1 className="text-4xl text-white font-bold mb-4">{movie.title}</h1>
          <p className="text-lg text-white mb-4">{movie.overview}</p>
          <div className="flex space-x-4 mb-6">
            <FaRegImage className="text-gray-600" size={24} />
            <FaRegBookmark className="text-gray-600" size={24} />
            {isFavourite ? (
              <FaHeart className="text-red-600" size={24} />
            ) : (
              <FaRegHeart
                className="text-gray-600 cursor-pointer"
                size={24}
                onClick={handleAddFavourite}
              />
            )}
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="font-bold text-white">Release Date:</p>
              <p className="text-white">{movie.release_date}</p>
            </div>
            <div>
              <p className="font-bold text-white">Rating:</p>
              <p className="text-white">{movie.vote_average} / 10</p>
            </div>
            <div>
              <p className="font-bold text-white">Genre:</p>
              <p className="text-white">
                {movie.genres.map((genre: { id: number; name: string }) => (
                  <span key={genre.id}>{genre.name}, </span>
                ))}
              </p>
            </div>
            <div>
              <p className="font-bold text-white">Popularity:</p>
              <p className="text-white">{movie.popularity}</p>
            </div>
          </div>

          <div className="release-date-chart mb-6">
            <div className="bg-gray-200 h-32 rounded-lg shadow-inner p-4">
              <p className="text-sm text-gray-600">Release Date Chart</p>
            </div>
          </div>

          <div className="cast-container mt-8">
            <h3 className="text-xl text-white font-bold mb-4">Cast Members</h3>
            <div className="flex space-x-4 overflow-x-auto">
              {credits.cast.map((actor) => (
                <div
                  key={actor.id}
                  className="flex-shrink-0 flex flex-col items-center w-24"
                >
                  <div className="w-24 h-24">
                    <img
                      src={
                        actor.profile_path
                          ? `${IMG_BASE_URL}${actor.profile_path}`
                          : "/placeholder-image.jpg"
                      }
                      alt={actor.name}
                      className="rounded-full shadow-lg w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center text-center h-[70px]">
                    <div className="text-sm text-white mt-2 flex-grow">
                      {actor.name}
                    </div>
                    <div className="text-xs text-gray-400">
                      {actor.character}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
