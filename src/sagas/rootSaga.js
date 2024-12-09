import { all } from 'redux-saga/effects';
import { watchAuthRequest } from './getAuthTokenSaga';
import { watchGetMovieList } from './getMovieListSaga';
import { watchMoviesThatAirNowList } from './getMoviesThatAirNowSaga'
import { watchGetMovieDetails } from './getMovieDetails'

export default function* rootSaga() {
  yield all([
    watchAuthRequest(),
    watchGetMovieList(),
    watchMoviesThatAirNowList(),
    watchGetMovieDetails(),
  ]);
}

