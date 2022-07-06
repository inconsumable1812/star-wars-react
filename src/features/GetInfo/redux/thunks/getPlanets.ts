import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchPlanets } from 'src/api/fetchPlanets';
import type {
  PlanetsResponse,
  PlanetsQueryParameters
} from 'src/api/fetchPlanets';

const getPlanets = createAsyncThunk(
  'profile/getPlanets',
  async (queryParameters: PlanetsQueryParameters): Promise<PlanetsResponse> => {
    const data = await fetchPlanets(queryParameters);

    return data;
  }
);

export { getPlanets };
