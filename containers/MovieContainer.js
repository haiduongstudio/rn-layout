import { connect } from 'react-redux';
import MovieComponent from '../components/MovieComponent';

import {
  fetchMoviesAction,
  fetchSuccessAction,
  addMovieAction
} from '../actions';

const mapStateToProps = state => ({
  movies: state.moviesReducers
});

const mapDispatchToProps = dispatch => ({
  onFetchMovies: () => {
    dispatch(fetchMoviesAction());
  },
  // Not necessary !
  // onSuccessFetch: () => {
  //   dispatch(fetchSuccessAction());
  // }
  onAddMovie: newMovie => {
    dispatch(addMovieAction(newMovie));
  }
});

const MovieContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieComponent);
export default MovieContainer;
