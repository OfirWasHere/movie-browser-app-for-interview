import { call, put, takeLatest } from 'redux-saga/effects';
import actionTypes from '../Redux/actionTypes';

function* getMovieThatAirNow() {
  try {
    const response = yield call(fetch, 'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    });

    const data = yield response.json();
    console.log('show airing now');



    yield put({ type: actionTypes.FETCH_AIR_NOW_SUCCESS, payload: data.results });

  } catch (error) {
    console.log(error);
    yield put({ type: actionTypes.FETCH_AIR_NOW_FAILURE, payload: error.message });
  }
}

export function* watchMoviesThatAirNowList() {
  yield takeLatest(actionTypes.FETCH_AIR_NOW_LIST, getMovieThatAirNow);
}

