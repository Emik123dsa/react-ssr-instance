import { put, call, all, fork, take, takeEvery, select } from "redux-saga/effects";

import api from "../services";

import * as actions from "../actions/converterActions";
import * as selectors from "../selectors/converterSelectors";

/**
 * FETCH FUNCTION FOR DETERMINING GLOBAL REDUX STORE
 * @param {*} entity  
 * @param {*} apiFn 
 * @param {*} id 
 * @param {*} url  
 */
function* fetchEntity(entity, apiFn, id, url) {
  yield put(entity.request(id));

  const { response, error } = yield call(apiFn, url || id);

  if (response) {
    yield put(entity.success(id, response));
  } else {
    yield put(entity.failure(id, error));
  }
}

/*********************************
 *BINDING FUNCTION FROM PATTERNS *
 *********************************/

export const fetchStoreFromMongo = fetchEntity.bind(null, actions.MONGO_DATABASE_STORE, api.fetchMongoDB);

/**
 * IMPORT CURRENCY TO FETCH DATA FROM REST API
 * @param {*} currency 
 * @param {*} requiredFields 
 */
function* importMongoStore(store, requiredFields) {
  try {
    const payload = yield select(selectors.getMongoDB, store);

    if (!payload || requiredFields.some(key => !payload.hasOwnProperty(key))) {
      yield call(fetchStoreFromMongo, store);
    }
  } catch (e) {
    console.error(e);
  }
}

/*****************************
 * WATCHERS SAGA FROM PATTERNS
 *****************************/
function* watchImportMongoStore() {
  while (true) {
    const { store } = yield take(actions.FETCH_MONGO_DATABASE);

    yield fork(importMongoStore, store);
  }
}

/********************************************
 * ROOT INVOKER TO FORK ALL THE SAGA ACTIONS*
 ********************************************/
function* root() {
  yield all([
    fork(watchImportMongoStore),
  ]);
}

export default root;
