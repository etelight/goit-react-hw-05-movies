import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from '../../API';
import { List, Title, Item } from './Reviews-styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const result = async () => {
      try {
        const response = await fetchMovies(`/movie/${movieId}/reviews`);
        setReviews(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, [movieId]);

  return (
    <div>
      <List>
        {reviews.length ? (
          reviews.map(review => {
            const { author, content, id } = review;
            return (
              <Item key={id}>
                <Title>Author: {author}</Title>
                <p>{content}</p>
              </Item>
            );
          })
        ) : (
          <p>Sorry, we don't have any reviews for this movie.</p>
        )}
      </List>
    </div>
  );
};
