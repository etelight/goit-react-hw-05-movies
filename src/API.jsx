import axios from 'axios';

const API_KEY = `380106b3376ef52ed48cd07633a0767b`;
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchMovies = async endpoint => {
  //   try {
  //     const response = await axios.get('/trending/movie/day', {
  // heades: {
  //   accept: 'application/json',
  //   Authorization:
  //     'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODAxMDZiMzM3NmVmNTJlZDQ4Y2QwNzYzM2EwNzY3YiIsInN1YiI6IjY0ZjFkNTM4NWYyYjhkMDExYjRkNGY3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Phh_2oJtZ7feHvEiQLYLmSiKPEwoTNHBmuM00D8HW1U',
  // },
  // params: {
  //   key: API_KEY,
  // },
  //     });
  //     console.log(response.data.results);
  //     return response.data.results;
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   return fetch(
  //     `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}?language=en-US`
  //   ).then(response => response.json());

  try {
    const response = await axios.get(endpoint, {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODAxMDZiMzM3NmVmNTJlZDQ4Y2QwNzYzM2EwNzY3YiIsInN1YiI6IjY0ZjFkNTM4NWYyYjhkMDExYjRkNGY3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Phh_2oJtZ7feHvEiQLYLmSiKPEwoTNHBmuM00D8HW1U',
      },
      params: {
        key: API_KEY,
        language: 'en-US',
      },
    });
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
