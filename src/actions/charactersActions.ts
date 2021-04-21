import axios from "axios";

export const FETCH_CHARACTERS_BEGIN = "FETCH_CHARACTERS_BEGIN";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_FAILURE = "FETCH_CHARACTERS_FAILURE";
export const GET_CHARACTERS = "GET_CHARACTERS";

export const fetchCharactersBegin = () => ({
  type: FETCH_CHARACTERS_BEGIN,
});

export const fetchCharactersSuccess = (
  data: any,
  numberOfCharacters: number
) => ({
  type: FETCH_CHARACTERS_SUCCESS,
  payload: { data, numberOfCharacters },
});

export const fetchCharactersFailure = (error: any) => ({
  type: FETCH_CHARACTERS_FAILURE,
  payload: { error },
});

export const getCharacters = (numberOfCharacters: number) => ({
  type: GET_CHARACTERS,
  payload: { numberOfCharacters },
});

export function getMoreCharacters(numberOfCharacters: number) {
  return function (dispatch: any, getState: any) {
    const state = getState();

    //if there is enough characters in store then just get them,
    //otherwise fetch and get them
    if (
      state.characters &&
      state.characters.charactersAll.length >=
        state.characters.charactersSelected.length + numberOfCharacters &&
      state.characters.startIndex < state.characters.data.count
    ) {
      dispatch(getCharacters(numberOfCharacters));
    } else {
      dispatch(
        fetchAndGetCharacters(state.characters.nextUrl, numberOfCharacters)
      );
    }
  };
}

export function fetchAndGetCharacters(url: string, numberOfCharacters: number) {
  return function (dispatch: any) {
    dispatch(fetchCharactersBegin());
    return axios.get(url).then(
      (response) => {
        dispatch(fetchCharactersSuccess(response.data, numberOfCharacters));
      },
      (error) => {
        dispatch(fetchCharactersFailure(error));
      }
    );
  };
}
