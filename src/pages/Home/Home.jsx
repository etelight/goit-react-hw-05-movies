import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { MoviesList } from '../../components/MoviesList/MoviesList';
import { HomeTitle } from './Home-styled';
import { fetchMovies } from '../../API';

const HomePage = () => {
  const [movieList, setMovieList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const result = async () => {
      try {
        const movies = await fetchMovies('/trending/all/day');

        if (movies.results.length) {
          setMovieList(movies.results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, []);

  return (
    <>
      <HomeTitle>Trending today</HomeTitle>
      <MoviesList items={movieList} stateItem={{ from: location }} />
    </>
  );
};

export default HomePage;
