import { fetchMovies } from '../../API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList, ActorImg } from './Cast-styled';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const result = async () => {
      try {
        const response = await fetchMovies(`/movie/${movieId}/credits`);
        setCast(response.cast);
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, [movieId]);

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';
  return (
    <div>
      <CastList>
        {cast.map(actor => {
          const { name, profile_path, character, credit_id } = actor;
          return (
            <li key={credit_id}>
              <ActorImg src={imgBaseUrl + profile_path} alt={name} />

              <p>{name}</p>
              <p>{character}</p>
            </li>
          );
        })}
      </CastList>
    </div>
  );
};
