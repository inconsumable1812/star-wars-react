import { createSlice } from '@reduxjs/toolkit';
import { defaults } from 'lodash';

import { initialState } from './initialState';

import { selectGetInfo } from './selectors';
import { getPeople, getPlanets } from './thunks';

const slice = createSlice({
  name: 'GetInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlanets.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getPlanets.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';

        state.planets = defaults(payload, initialState.planets);
      })
      .addCase(getPlanets.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message ?? '';
      })
      .addCase(getPeople.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getPeople.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';

        state.people = defaults(payload, initialState.people);
      })
      .addCase(getPeople.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message ?? '';
      });
  }
});

const { reducer } = slice;

export { reducer, selectGetInfo, getPlanets, getPeople };
