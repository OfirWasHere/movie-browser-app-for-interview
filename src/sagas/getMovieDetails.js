import { call, put, takeLatest } from 'redux-saga/effects';
import actionTypes from '../Redux/actionTypes';

function* getMovieDetails({ payload }) {
    try {
        const response = yield call(fetch, `https://api.themoviedb.org/3/movie/${payload}`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            },
        });

        const data = yield response.json();

        yield put({ type: actionTypes.MOVIE_DETAILS_SUCCESS, payload: data });

    } catch (error) {
        console.log(error);
        yield put({ type: actionTypes.MOVIE_DETAILS_FAILURE, payload: error.message });
    }
}

export function* watchGetMovieDetails() {
    yield takeLatest(actionTypes.GET_MOVIE_DETAILS, getMovieDetails);
}

