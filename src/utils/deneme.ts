import axios from "axios";

const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/top_rated",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGE0MWQyMjg4NzQ0NmM0NjBiMGMzNGNlMmNiODEzZSIsIm5iZiI6MTcyMzE5MDk2OC4yNDcyOTgsInN1YiI6IjY2YjQ4MTc4NWNkZjVmMWQzMTZjZmVjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nhfwj_nwcsWRXK7cPiRMXwvKpeG5oliUNlVcwyTAB8I",
  },
  params: {
    language: "en-US",
    page: 1,
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data.results);
  })
  .catch(function (error) {
    console.error(error);
  });
