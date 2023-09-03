import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '48137aa323ffd59f149eae09a7ddffd1';

export async function getFilmByName(q) {
  const params = new URLSearchParams({
    api_key: API_KEY,
    query: q,
  });
  const response = await axios.get(`search/movie?${params}`);
  if (!response.data.results.length)
    throw new Error(
      'OOPS...We are very sorry!We don’t have any results matching your search.'
    );
  return response.data;
}

export async function getFilmById(id) {
  const response = await axios.get(`movie/${id}?api_key=${API_KEY}`);
  return response.data;
}

export async function getTrendingFilms() {
  const response = await axios.get(`trending/movie/week?api_key=${API_KEY}`);
  return response.data;
}

export async function getCast(id) {
  const response = await axios.get(
    `movie/${id}/credits?language=en-US&api_key=${API_KEY}`
  );
  return response.data;
}

export async function getReviews(id) {
  const response = await axios.get(
    `movie/${id}/reviews?language=en-US&page=1&api_key=${API_KEY}`
  );
  return response.data;
}

export async function getFilmByQuery(query) {
  const response = await axios.get(
    `search/movie?query=${query}&include_adult=true&page=1&api_key=${API_KEY}`
  );
  return response.data;
}
