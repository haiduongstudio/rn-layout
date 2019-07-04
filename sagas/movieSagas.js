// Saga effects
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './Api';
import {
  FETCH_SUCCESDED,
  FETCT_FAILED,
  FETCH_MOVIES
} from '../actions/actionTypes';

function* fetchMovies() {
  try {
    const receivedMovies = yield Api.getMoviesFromApi();
    yield put({ type: FETCH_SUCCESDED, receivedMovies });
  } catch (error) {
    yield put({ type: FETCT_FAILED, error });
  }
}

export function* watchFetchMovies() {
  yield takeLatest(FETCH_MOVIES, fetchMovies);
}
