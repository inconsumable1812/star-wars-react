import { Planets, Peoples } from 'src/api/types';
import { RequestStatus } from 'src/helpers/redux';

type State = {
  status: RequestStatus;
  error: string | null;
  planets: Planets;
  people: Peoples;
};

export type { State };
