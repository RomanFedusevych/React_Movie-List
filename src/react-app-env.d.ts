/// <reference types="react-scripts" />

interface Movie {
  title: string;
  release_date: string;
  poster_path: string;
  genre_ids: [];
  imdbId: string;
  id: number;
}

interface Selected {
  value: string;
  label: string;
}
