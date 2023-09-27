import { Route, Routes } from 'react-router-dom';

import HomePage from 'pages/Home/Home';
import MoviesPage from 'pages/Movies/Movies';
import { SingleMovie } from 'components/SingleMovie/SingleMovie';
import { Layout } from 'components/Layout/Layout';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<SingleMovie />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<div>404 Not Found</div>}></Route>
        </Route>
      </Routes>
    </div>
  );
};
