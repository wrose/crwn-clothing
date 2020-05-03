import { createSelector } from 'reselect';
import { StoreState } from "../../store";

const selectDirectory = (state: StoreState) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);