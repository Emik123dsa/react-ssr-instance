import { combineReducers } from "redux-immutable";
import { fromJS } from "immutable";
import { connectRouter } from "connected-react-router/immutable";

import globalReducer from "./app/reducers/modules/globalReducer";

import {
  immutableReducer as reduxAsyncConnect,
  setToMutableStateFunc,
  setToImmutableStateFunc,
} from "redux-connect";

setToImmutableStateFunc((mutableState) => fromJS(mutableState));
setToMutableStateFunc((immutableState) => immutableState.toJS());

export default (history) =>
  combineReducers({
    reduxAsyncConnect,
    router: connectRouter(history),
    globalReducer,
  });
