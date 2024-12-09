import { combineReducers } from 'redux';
import actionTypes from "./actionTypes";

const initialAuthState = {
  data: null,
  loading: false,
  error: null,
};

export const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.AUTH_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case actionTypes.AUTH_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const initialMovieState = {
  data: [],
  loading: false,
  error: null
};

export const movieReducer = (state = initialMovieState, action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIE_LIST:
      return { ...state, loading: true };
    case actionTypes.MOVIE_LIST_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case actionTypes.MOVIE_LIST_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case actionTypes.FETCH_AIR_NOW_LIST:
      return { ...state, loading: true }
    case actionTypes.FETCH_AIR_NOW_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case actionTypes.FETCH_AIR_NOW_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state;
  }
};

const initialDetailsState = {
  data: [],
  loading: false,
  error: null
}

export const movieDetailsReducer = (state = initialDetailsState, action) => {
  switch (action.type) {
    case actionTypes.movieDetails:
      return { ...state, loading: true }
    case actionTypes.MOVIE_DETAILS_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case actionTypes.MOVIE_LIST_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  auth: authReducer,
  movies: movieReducer,
  movieDetails: movieDetailsReducer
});

