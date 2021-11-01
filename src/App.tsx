import React, { useState } from 'react';
import './App.scss';
import { MovieList } from './components/MovieList';
import { Pagination } from './components/Pagination/Pagination';

export const App = () => {
  const [pageApi, setPageApi] = useState<number>(1);

  return (
    <div className="App">
      <div className="App__movieList">
        <MovieList pageApi={pageApi} />
        <Pagination pageApi={pageApi} setPageApi={setPageApi} />
      </div>
    </div>
  );
};
