import React from "react";
import { useGetTrendingMoviesQuery } from "../slices/movieApiSlice";
import MovieListing from "../components/MovieListing";

const TrendingPage: React.FC = () => {
  const { data, error, isLoading } = useGetTrendingMoviesQuery();

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

export default TrendingPage;
