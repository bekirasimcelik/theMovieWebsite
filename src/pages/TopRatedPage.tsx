import React from "react";
import { useGetMoviesByCategoryQuery } from "../slices/movieApiSlice";
import MovieListing from "../components/MovieListing";

const TopRatedPage: React.FC = () => {
  const { data, error, isLoading } = useGetMoviesByCategoryQuery("top_rated");

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error fetching movies</p>
      ) : (
        <MovieListing movies={data?.results || []} />
      )}
    </>
  );
};

export default TopRatedPage;
