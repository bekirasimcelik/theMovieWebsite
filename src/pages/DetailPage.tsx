import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetMovieDetailsQuery,
  useGetMovieCreditsQuery,
} from "../slices/movieApiSlice";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

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
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="font-bold">Release Date:</p>
              <p>{movie.release_date}</p>
            </div>
            <div>
              <p className="font-bold">Rating:</p>
              <p>{parseFloat(movie.vote_average.toFixed(1))} / 10</p>
            </div>
            <div>
              <p className="font-bold">Genre:</p>
              <p>
                {movie.genres.map((genre: { id: number; name: string }) => (
                  <span key={genre.id}>{genre.name}, </span>
                ))}
              </p>
            </div>
            <div>
              <p className="font-bold">Popularity:</p>
              <p>{movie.popularity}</p>
            </div>
          </div>

          <div className="release-date-chart mb-6">
            {/* Release Date Chart (Mockup) */}
            <div className="bg-gray-200 h-32 rounded-lg shadow-inner p-4">
              <p className="text-sm text-gray-600">Release Date Chart</p>
            </div>
          </div>

          <div className="cast-container mt-8">
            <h3 className="text-xl text-white font-bold mb-4">Cast Members</h3>
            <div className="flex space-x-4 overflow-x-auto">
              {credits.cast.map(
                (actor: {
                  id: number;
                  name: string;
                  profile_path: string;
                  character: string;
                }) => (
                  <div
                    key={actor.id}
                    className="w-24 h-24 flex-shrink-0 bg-gray-300 rounded-full shadow-lg overflow-hidden"
                  >
                    <img
                      src={`${IMG_BASE_URL}${actor.profile_path}`}
                      alt={actor.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="text-center mt-2 text-sm text-gray-700">
                      {actor.name}
                    </div>
                    <div className="text-center mt-1 text-xs text-gray-500">
                      {actor.character}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
