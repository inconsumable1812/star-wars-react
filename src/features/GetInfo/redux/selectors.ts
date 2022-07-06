import type { AppState } from 'src/app/store';

const selectGetInfo = (state: AppState) => state.features.GetInfo;

export { selectGetInfo };
