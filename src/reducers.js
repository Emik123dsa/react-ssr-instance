import { combineReducers } from "redux-immutable";
import { fromJS } from "immutable";
import { connectRouter } from "connected-react-router/immutable";

import converterReducer from "./app/reducers/modules/converterReducer";

import {
  immutableReducer as reduxAsyncConnect,
  setToImmutableStateFunc,
  setToMutableStateFunc,
} from "redux-connect";

setToImmutableStateFunc((mutableState) => fromJS(mutableState));
setToMutableStateFunc((immutableState) => immutableState.toJS());

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    converterReducer,
    reduxAsyncConnect,
  });
