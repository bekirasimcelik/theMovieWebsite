import React from "react";
import {
  useGetTrendingMoviesQuery,
  useGetMoviesByCategoryQuery,
} from "../slices/movieApiSlice";
import MovieListing from "../components/MovieListing";
import Header from "../components/Header";

const HomePage: React.FC = () => {
  const { data: trendingData, isLoading: isTrendingLoading } =
    useGetTrendingMoviesQuery();
  const { data: topRatedData, isLoading: isTopRatedLoading } =
    useGetMoviesByCategoryQuery("top_rated");
  const { data: popularData, isLoading: isPopularLoading } =
    useGetMoviesByCategoryQuery("popular");

  return (
    <>
      <Header />
      <div className="container mx-auto px-4">
        <div className="my-8">
          <h2 className="text-2xl text-white font-bold mb-4">Trend Movies</h2>
          {isTrendingLoading ? (
            <p>Loading...</p>
          ) : (
            <MovieListing movies={trendingData?.results || []} />
          )}
        </div>

        <div className="my-8">
          <h2 className="text-2xl text-white font-bold mb-4">
            Top Rated Movies
          </h2>
          {isTopRatedLoading ? (
            <p>Loading...</p>
          ) : (
            <MovieListing movies={topRatedData?.results || []} />
          )}
        </div>

        <div className="my-8">
          <h2 className="text-2xl text-white font-bold mb-4">Popular Movies</h2>
          {isPopularLoading ? (
            <p>Loading...</p>
          ) : (
            <MovieListing movies={popularData?.results || []} />
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
