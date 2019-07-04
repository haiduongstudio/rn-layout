// Send GET / POST api requests to server

const urlGetMovies = 'http://192.168.1.1:3000/movies';

function* getMoviesFromApi() {
  const response = yield fetch(urlGetMovies, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: ''
  });
  const movies = yield response.status === 200
    ? JSON.parse(response._bodyInit)
    : [];
  return movies;
}

export const Api = {
  getMoviesFromApi
};
