import { call, put, takeLatest } from 'redux-saga/effects';
import { authSuccess, authFailure } from '../Redux/actions';
import actionTypes from '../Redux/actionTypes';

function* authenticate() {
  try {
    const storedSession = localStorage.getItem('guest_session');
    if (storedSession) {
      const sessionData = JSON.parse(storedSession);
      const expirationDate = new Date(sessionData.expires_at);
      const currentDate = new Date();

      if (currentDate > expirationDate) {
        yield call(fetchNewSession);
        return;
      }

      yield put(authSuccess(sessionData));
      return;
    }

    yield call(fetchNewSession);
  } catch (error) {
    console.log(error);
    yield put(authFailure(error.message));
  }
}

function* fetchNewSession() {
  try {
    const response = yield call(fetch, 'https://api.themoviedb.org/3/authentication/guest_session/new', {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    });

    const data = yield response.json();

    if (data.success) {
      localStorage.setItem('guest_session', JSON.stringify(data));
      yield put(authSuccess(data));
    } else {
      throw new Error('Failed to create guest session');
    }
  } catch (error) {
    console.log('Error fetching new session', error);
    yield put(authFailure(error.message));
  }
}

export function* watchAuthRequest() {
  yield takeLatest(actionTypes.AUTH_REQUEST, authenticate);
}

export default watchAuthRequest;
