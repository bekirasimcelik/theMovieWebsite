import axios from "axios";
import { APIKey } from "./MovieApiKey";

const movieApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${APIKey}`,
  },
});

export default movieApi;
