import { API_URL } from "../api";

interface CharactersState {
  data: any; //fetched data
  charactersAll: Array<any>; //all characters which has been fetched so far
  charactersSelected: Array<any>; //characters selected to be displayed
  startIndex: number; //start index for selecting items to copy from charactersAll to charactersSelected
  endIndex: number; //end index for selecting items to copy from charactersAll to charactersSelected
  lastPageNumber: number; //number of last page in API
  nextUrl: string;
  allCharactersFetched: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: CharactersState = {
  data: [],
  charactersAll: [],
  charactersSelected: [],
  startIndex: 0,
  endIndex: 10,
  lastPageNumber: 1,
  nextUrl: `${API_URL}/people/?page=1`,
  allCharactersFetched: false,
  loading: false,
  error: null,
};

export const FETCH_CHARACTERS_BEGIN = "FETCH_CHARACTERS_BEGIN";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_FAILURE = "FETCH_CHARACTERS_FAILURE";

const charactersReducer = (state = initialState, action: any) => {
  let numberOfCharacters: number;
  let endIndex: number;
  let charactersToAddToSelected;

  switch (action.type) {
    case "FETCH_CHARACTERS_BEGIN":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_CHARACTERS_SUCCESS":
      numberOfCharacters = action.payload.numberOfCharacters;
      endIndex = state.startIndex + numberOfCharacters;
      charactersToAddToSelected = state.charactersAll
        .concat(action.payload.data.results)
        .slice(state.startIndex, endIndex);

      return {
        ...state,
        loading: false,
        data: action.payload.data,
        charactersAll: [...state.charactersAll, ...action.payload.data.results],
        charactersSelected: [
          ...state.charactersSelected,
          ...charactersToAddToSelected,
        ],
        nextUrl: action.payload.data.next,
        lastPageNumber: Math.ceil(action.payload.data.count / 10),
        startIndex: state.startIndex + numberOfCharacters,
        endIndex: endIndex + numberOfCharacters,
      };
    case "FETCH_CHARACTERS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        allCharactersFetched: state.startIndex > state.data.count,
      };
    case "GET_CHARACTERS":
      numberOfCharacters = action.payload.numberOfCharacters;
      endIndex = state.startIndex + numberOfCharacters;
      charactersToAddToSelected = state.charactersAll.slice(
        state.startIndex,
        state.endIndex
      );

      return {
        ...state,
        loading: false,
        charactersSelected: [
          ...state.charactersSelected,
          ...charactersToAddToSelected,
        ],
        startIndex: state.startIndex + numberOfCharacters,
        endIndex: endIndex + numberOfCharacters,
      };
    default:
      return state;
  }
};

export default charactersReducer;
