import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getFilmByQuery } from 'Utilits/Api';
import MovieList from 'components/Movie';
import Form from 'components/Form';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    (async () => {
      const getFilms = await getFilmByQuery(query);
      setFilms([...getFilms.results]);
    })();
  }, [query]);

  const onFormSubmit = q => {
    setSearchParams({ query: q });
  };

  return (
    <>
      <Form onSubmit={onFormSubmit} />
      {films.length > 0 && <MovieList films={films} />}
    </>
  );
};

export default Movies;
