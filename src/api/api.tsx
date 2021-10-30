const API_KEY = 'api_key=d02889a458f7e3d57af07edb461cf97e';
const API_URL = `https://api.themoviedb.org/3/discover/movie?${API_KEY}&page=10`;

export const loadGenres = async (genre: Selected | null, page: number) => {
  let withGenre = '';

  if (genre) {
    withGenre = `&with_genres=${genre.value}`;
  }

  const response = await fetch(`${API_URL}${withGenre}&page=${page}`);

  return response.json();
};
