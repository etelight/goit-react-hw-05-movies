import toast from 'react-hot-toast';
import { MoviesList } from '../MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { fetchMovies } from '../../API';

import { Wrapper, Form, Label, Input, SubmitBtn } from './SearchMovie-styled';

export const Search = () => {
  const [moviesByQuery, setMoviesByQuery] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState(searchParams.get('searchQuery') ?? '');
  const location = useLocation();

  const input = searchParams.get('searchQuery') ?? '';

  useEffect(() => {
    if (!input) {
      setMoviesByQuery([]);
      return;
    }
    const result = async () => {
      try {
        const movies = await fetchMovies(
          `/search/movie?query=${query}&include_adult=false&page=1`
        );
        setMoviesByQuery(movies.results);
      } catch (error) {
        toast.error(error);
      }
    };

    result();
  }, [input]);

  const handleSubmit = e => {
    e.preventDefault();

    if (query === '') {
      return toast.error('Sorry, please provide a search word');
    }
    setSearchParams({ searchQuery: query });
  };
  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Label>
            <Input
              type="text"
              name="search"
              value={query}
              onChange={handleInputChange}
              placeholder="Search..."
              autoComplete="off"
            />
            <SubmitBtn type="submit">Go</SubmitBtn>
          </Label>
        </Form>
      </Wrapper>
      <>
        {moviesByQuery.length > 0 && (
          <MoviesList
            items={moviesByQuery}
            stateItem={{ from: location }}
            title="Movies"
          />
        )}
      </>
    </>
  );
};
