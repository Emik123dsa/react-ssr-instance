import { takeEvery, put, call, all, fork } from "redux-saga/effects";
import { apiRequest } from "./axios";
import { api, history } from "../services";

import { GLOBAL_REDUCER } from "../actions/vendor/globalFilter";

function* fetchEntity(entity, apiFn, id, url) {
  yield put(entity.request(id));

  const { response, error } = yield call(apiFn, url || id);

  if (response) {
    yield put(entity.success(id, response));
  } else {
    yield put(entity.failure(id, error));
  }
}
/**
 * Asynchronus function for data fetching
 */
async function setAppSettings() {
  const response = await apiRequest({
    url: "getAppSettings",
  });
  return response;
}

async function getAppSettings() {
  const resp = await api.fetchAppSettings("getAppSettings");

  //console.log(resp.response);
  return resp;
}
/**
 * Functions generators for filling store of the data
 */
function* appSettings() {
  try {
    const payload = yield call(setAppSettings);
    yield put({ type: GLOBAL_REDUCER.SET_APP_SETTINGS, payload });
  } catch (e) {
    console.error(e);
  }
}

/**
 * Essenetial saga
 */
export function* root() {
  getAppSettings();
  yield all([fork(appSettings)]);
}
