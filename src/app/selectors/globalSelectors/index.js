import { createSelector } from "reselect";

export const getGlobalReducers = (state) => state.get("globalReducer");

export const getAppSettings = createSelector(getGlobalReducers, (appSettings) =>
  appSettings.get("appSettings")
);
