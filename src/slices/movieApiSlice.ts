import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIKey } from "../utils/MovieApiKey";

export const movieApiSlice = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${APIKey}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMoviesByCategory: builder.query({
      query: (category) => `/movie/${category}?api_key=${APIKey}`,
    }),
    getMovieDetails: builder.query({
      query: (id) => `/movie/${id}?api_key=${APIKey}`,
    }),
    getTrendingMovies: builder.query({
      query: () => `/trending/movie/week?api_key=${APIKey}`,
    }),
    getMovieCredits: builder.query({
      query: (id) => `/movie/${id}/credits?api_key=${APIKey}`,
    }),
  }),
});

export const {
  useGetMoviesByCategoryQuery,
  useGetMovieDetailsQuery,
  useGetTrendingMoviesQuery,
  useGetMovieCreditsQuery,
} = movieApiSlice;
