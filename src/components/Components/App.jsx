import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { Home } from '../../Pages/Home';
import { Header } from './Header/Header';

const Movies = lazy(() => import('../../Pages/Movies'));
const MovieDetails = lazy(() => import('../../Pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Review'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
