import React from "react";
import MovieCard from "./MovieCard";

interface MovieListingProps {
  movies: any[];
}

const MovieListing: React.FC<MovieListingProps> = ({ movies }) => {
  return (
    <div className="movie-wrapper overflow-x-auto scrollbar-hide">
      <div className="flex space-x-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterPath={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            releaseDate={movie.release_date}
            rating={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieListing;
