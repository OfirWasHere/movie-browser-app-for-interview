import actionTypes from "./actionTypes";

export const authRequest = () => ({
  type: actionTypes.AUTH_REQUEST,
});

export const authSuccess = (data) => ({
  type: actionTypes.AUTH_SUCCESS,
  payload: data,
});

export const authFailure = (error) => ({
  type: actionTypes.AUTH_FAILURE,
  payload: error,
});

export const movieListRequest = () => ({
  type: actionTypes.GET_MOVIE_LIST,
});

export const airNowRequest = () => ({
  type: actionTypes.FETCH_AIR_NOW_LIST,
})

export const getMovieDetails = (id) => ({
  type: actionTypes.GET_MOVIE_DETAILS,
  payload: id
})
