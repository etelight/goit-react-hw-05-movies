import { List, Item, Poster, MovieLink, MovieTitle } from './MoviesList-styled';

export const MoviesList = ({ items, stateItem }) => {
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';

  return (
    <>
      <List>
        {items.map(movie => {
          const { id, title } = movie;

          return (
            <Item key={id}>
              <MovieLink to={`/movies/${id}`} state={stateItem}>
                <Poster
                  src={imgBaseUrl + movie.poster_path}
                  alt={movie.title}
                />{' '}
                <MovieTitle>{title}</MovieTitle>
              </MovieLink>
            </Item>
          );
        })}
      </List>
    </>
  );
};
