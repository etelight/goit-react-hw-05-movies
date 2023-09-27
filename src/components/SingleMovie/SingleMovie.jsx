import { useParams, Outlet, Link } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';

import { fetchMovies } from '../../API';

import {
  Wrapper,
  Img,
  WrapperDetails,
  Title,
  Description,
  AddInfoWrapper,
  AddInfoList,
} from './SingleMovie-styled';
import { NavBtn } from 'components/Layout/Layout-styled';

export const SingleMovie = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [genres, setGenres] = useState([]);
  const [movieVotes, setMovieVotes] = useState(null);

  useEffect(() => {
    const getMovieDetails = async movieId => {
      try {
        const response = await fetchMovies(`/movie/${movieId}`);
        setMovie(response);
        setGenres(response.genres);
        setMovieVotes(response.vote_average);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieDetails(movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const movieGenres = genres.map(genre => genre.name).join(', ');
  const movieScore = (movieVotes * 10).toFixed(0);

  if (!movie) return <div>Loading...</div>;

  const { title, overview, poster_path } = movie;

  return (
    <Wrapper>
      <WrapperDetails>
        <Img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        />
        <div>
          {/* <Link to={backLocation.current}>Back</Link> */}
          <Title>{title}</Title>
          <Description>User Score: {movieScore} %</Description>
          <Title>Overview</Title>
          <Description>{overview}</Description>
          <Title>Genres: </Title>
          <p>{movieGenres}</p>
        </div>
      </WrapperDetails>

      <AddInfoWrapper>
        <AddInfoList>
          <li>
            <Link to={`/movies/${movieId}/cast`}>
              <NavBtn>Cast</NavBtn>
            </Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>
              <NavBtn>Reviews</NavBtn>
            </Link>
          </li>
        </AddInfoList>
      </AddInfoWrapper>
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
