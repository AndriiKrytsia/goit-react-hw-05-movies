import MovieList from 'components/Movie';
import { useEffect, useState } from 'react';
import { getTrendingFilms } from 'Utilits/Api';

export const Home = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { results } = await getTrendingFilms();
        setFilms([...results]);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);
  return (
    <>
      <h1>Trending Today</h1>
      <MovieList films={films} />
    </>
  );
};
