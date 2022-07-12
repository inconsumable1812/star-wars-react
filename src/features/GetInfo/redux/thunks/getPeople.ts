import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchPeople } from 'src/api/fetchPeople';
import type {
  PeopleResponse,
  PeopleQueryParameters
} from 'src/api/fetchPeople';

const getPeople = createAsyncThunk(
  'profile/getPeople',
  async (queryParameters: PeopleQueryParameters): Promise<PeopleResponse> => {
    const data = await fetchPeople(queryParameters);

    if (data instanceof globalThis.Error) {
      return Promise.reject(data);
    }
    const allPeople = [];

    if (data.results !== undefined) {
      allPeople.push(...data.results);
    }

    if (data.count !== undefined) {
      const allPeopleCount = data.count;
      const peopleInOnePage = 10;

      for (let index = 2; index <= allPeopleCount / peopleInOnePage; index++) {
        const result = await fetchPeople({ page: index.toString() });

        if (result instanceof globalThis.Error) {
          return Promise.reject(result);
        }

        if (result.results !== undefined) {
          allPeople.push(...result.results);
        }
      }
    }

    data.results = [...allPeople];
    return data;
  }
);

export { getPeople };
