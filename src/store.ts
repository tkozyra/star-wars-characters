import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./reducers/charactersReducer";
import filmsReducer from "./reducers/filmsReducer";

const store = configureStore({
  reducer: {
    characters: charactersReducer,
    films: filmsReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
