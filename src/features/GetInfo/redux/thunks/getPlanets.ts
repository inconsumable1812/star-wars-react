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

    if (data instanceof globalThis.Error) {
      return Promise.reject(data);
    }
    const allPlanets = [];

    if (data.results !== undefined) {
      allPlanets.push(...data.results);
    }

    if (data.count !== undefined) {
      const allPlanetsCount = data.count;
      const planetsInOnePage = 10;

      for (
        let index = 2;
        index <= allPlanetsCount / planetsInOnePage;
        index++
      ) {
        const result = await fetchPlanets({ page: index.toString() });

        if (result instanceof globalThis.Error) {
          return Promise.reject(result);
        }

        if (result.results !== undefined) {
          allPlanets.push(...result.results);
        }
      }
    }

    data.results = [...allPlanets];
    return data;
  }
);

export { getPlanets };
