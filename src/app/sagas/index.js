import { put, call, all, fork, take, select } from "redux-saga/effects";

import * as axios from "../services/mongo";

/**
 * SAGA IS REQUIRED MAINTENANCE
 */
import * as actions from "../actions/converterActions";
import * as selectors from "../selectors/converterSelectors";

function* watchImportMongoStore() {}

function* root() {
  yield all([fork(watchImportMongoStore)]);
}

export default root;
