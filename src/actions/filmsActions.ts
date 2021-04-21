import axios from "axios";
import { API_URL } from "../api";

export const FETCH_FILMS_BEGIN = "FETCH_FILMS_BEGIN";
export const FETCH_FILMS_SUCCESS = "FETCH_FILMS_SUCCESS";
export const FETCH_FILMS_FAILURE = "FETCH_FILMS_FAILURE";

export const fetchFilmsBegin = () => ({
  type: FETCH_FILMS_BEGIN,
});

export const fetchFilmsSuccess = (films: any) => ({
  type: FETCH_FILMS_SUCCESS,
  payload: { films },
});

export const fetchFilmsFailure = (error: any) => ({
  type: FETCH_FILMS_FAILURE,
  payload: { error },
});

export function fetchFilms() {
  return function (dispatch: any) {
    dispatch(fetchFilmsBegin());
    return axios.get(`${API_URL}/films`).then(
      (response) => {
        dispatch(fetchFilmsSuccess(response.data));
      },
      (error) => {
        dispatch(fetchFilmsFailure(error));
      }
    );
  };
}
