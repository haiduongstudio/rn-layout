import {
  FETCH_SUCCESDED,
  FETCT_FAILED,
  ADD_MOVIE,
  FETCH_MOVIES
} from '../actions/actionTypes';

export default (movies = [], action) => {
  switch (action.type) {
    case FETCH_SUCCESDED:
      return action.receivedMovies;
    case FETCT_FAILED:
      return [];
    case ADD_MOVIE:
      return [...movies, action.newMovie];
    default:
      return movies;
  }
};
