import { State } from './types';

const initialState: State = {
  status: 'idle',
  error: null,
  planets: { count: 0, next: null, previous: null, results: [] },
  people: { count: 0, next: null, previous: null, results: [] }
};

export { initialState };
