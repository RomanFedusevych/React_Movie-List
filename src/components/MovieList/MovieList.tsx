import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { MovieCard } from '../MovieCard';
import { loadGenres } from '../../api/api';

const options = [
  { value: '28', label: 'Action' },
  { value: '12', label: 'Adventure' },
  { value: '35', label: 'Comedy' },
  { value: '80', label: 'Crime' },
  { value: '18', label: 'Drama' },
  { value: '14', label: 'Fantasy' },
  { value: '36', label: 'History' },
  { value: '27', label: 'Horror' },
  { value: '53', label: 'Thriller' },
  { value: '37', label: 'Western' },
];

type Props = {
  pageApi: number;
  updateData: (pageApi: number) => void
};

export const MovieList: React.FC<Props> = ({ updateData, pageApi }) => {
  const [movies, setMovie] = useState([]);
  const [selectedOption, setSelectedOption] = useState<Selected | null>(null);
  const [currentPage] = useState(0);
  const [moviesPerPage] = useState(9);

  useEffect(() => {
    const getMovies = async () => {
      const data = await loadGenres(selectedOption, pageApi);

      setMovie(data.results);
      updateData(pageApi);
    };

    getMovies();
  }, [selectedOption, pageApi]);

  const sortedMovies = movies.sort((a: Movie, b: Movie) => new Date(b.release_date).getTime()
  - new Date(a.release_date).getTime());
  const lastPageIndex = currentPage + moviesPerPage;
  const firstPageIndex = lastPageIndex - moviesPerPage;
  const currentMovies = sortedMovies.slice(firstPageIndex, lastPageIndex);

  return (
    <>
      <div className="App__selector">
        <span className="App__selector--text">Filtred by genres:</span>
        <Select
          className="App__select"
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
      </div>
      <ul className="App__listContainer">
        {currentMovies.map((movie: Movie) => (
          <li
            className="App__movieCard movieCard"
            key={movie.id}
          >
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </>
  );
};
