import { Film, FilmShort } from "../types";

interface Data {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: Array<Film>;
}

interface FilmsState {
  films: Array<FilmShort>;
  data: Data;
  loading: boolean;
  error: string | null;
}

const initialState: FilmsState = {
  films: [],
  data: {},
  loading: false,
  error: null,
};

export const FETCH_FILMS_BEGIN = "FETCH_FILMS_BEGIN";
export const FETCH_FILMS_SUCCESS = "FETCH_FILMS_SUCCESS";
export const FETCH_FILMS_FAILURE = "FETCH_FILMS_FAILURE";

const filmsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "FETCH_FILMS_BEGIN":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_FILMS_SUCCESS":
      const mappedFilms = action.payload.films.results.map((film: any) => {
        return { title: film["title"], url: film["url"] };
      });
      return {
        ...state,
        loading: false,
        data: action.payload.films,
        films: mappedFilms,
      };
    case "FETCH_FILMS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default filmsReducer;
