import {
  configureStore,
  combineReducers,
  Action,
  ThunkAction
} from '@reduxjs/toolkit';

import { reducer as GetInfoReducer } from 'src/features/GetInfo';

const makeStore = () =>
  configureStore({
    reducer: {
      features: combineReducers({ GetInfo: GetInfoReducer })
    },
    devTools: true
  });

type AppStore = ReturnType<typeof makeStore>;

type AppDispatch = AppStore['dispatch'];

type AppState = ReturnType<AppStore['getState']>;

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export type { AppStore, AppDispatch, AppState, AppThunk };

export { makeStore };
