import {combineReducers, configureStore} from "@reduxjs/toolkit";

import cardsReducer from "./reducers/cardsSlice";


export const rootReducer = combineReducers({
  cardsReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const store = setupStore();
