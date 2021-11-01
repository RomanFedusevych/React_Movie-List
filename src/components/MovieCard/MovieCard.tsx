import React, { useState } from 'react';
import data from '../../api/genresName.json';
import './MovieCard.scss';

type Props = {
  movie : Movie;
};

export const MovieCard: React.FC<Props> = (props) => {
  const { movie } = props;
  const [genreName] = useState(data);
  let genreNameArr = '';

  genreName.forEach((y) => {
    for (let i = 0; i <= movie.genre_ids.length; i += 1) {
      if (y.id === movie.genre_ids[i]) {
        genreNameArr += `${y.name} | `;
      }
    }

    return genreNameArr;
  });

  return (
    <>
      <img
        className="movieCard__img"
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt="movieImg"
      />
      <div className="movieCard__title">{movie.title}</div>
      <div className="movieCard__genre">
        <span className="movieCard__genre--title">Genre:</span>
        <span> | </span>
        {genreNameArr}
      </div>
      <div className="movieCard__year">{movie.release_date}</div>

    </>
  );
};
