import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'Utilits/Api';

const Cast = () => {
  const { movieId } = useParams();
  const [filmCast, setFilmCast] = useState(null);

  useEffect(() => {
    (async () => {
      const getFilmCast = await getCast(movieId);
      setFilmCast(getFilmCast.cast);
    })();
  }, [movieId]);

  return (
    <div>
      {filmCast && (
        <ul>
          {filmCast.map(el => (
            <li key={el.id}>
              <img
                src={
                  el.profile_path
                    ? `https://image.tmdb.org/t/p/original${el.profile_path}`
                    : 'https://i.stack.imgur.com/l60Hf.png'
                }
                alt={el.name}
                width="100"
                height="100"
              />
              <h4>{el.original_name}</h4>
              <p>Character: {el.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
