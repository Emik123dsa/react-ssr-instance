import { CONVERTER_REDUCER } from "../vendor/converterFilter";

import api from "../../services";

const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";

function createRequest(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;

    return acc;
  }, {});
}

function action(type, payload = {}) {
  return { type, ...payload };
}

/********************************************
 ***************** CURRENCY BLOCK ***********
 ********************************************/
export const FETCH_CURRENCY_CONVERTED = CONVERTER_REDUCER.SET_DATA_CONVERTER_VALUE;
export const FETCH_CURRENCY_RATIO = CONVERTER_REDUCER.SET_CURRENCY_RATIO;
export const FETCH_AMOUNT = CONVERTER_REDUCER.SET_AMOUNT;

export const FETCH_TO_CURRENCY_TYPE = CONVERTER_REDUCER.SET_TO_CURRENCY_TYPE;
export const FETCH_FROM_CURRENCY_TYPE = CONVERTER_REDUCER.SET_FROM_CURRENCY_TYPE;

export const FETCH_MONGO_DATABASE = CONVERTER_REDUCER.SET_MONGO_DATABASE_STORE;
export const FETCH_LOADING = CONVERTER_REDUCER.SET_LOADING;

export const MONGO_DATABASE_STORE = createRequest(FETCH_MONGO_DATABASE);

/***********************
 * FETCH ESSENTIAL DATA*
 ***********************/
export const fetchMongoDB = {
  request: (store) => action(MONGO_DATABASE_STORE[REQUEST], { store }),
  success: (store, response) =>
    action(MONGO_DATABASE_STORE[SUCCESS], { store, response }),
  failure: (store, error) =>
    action(MONGO_DATABASE_STORE[FAILURE], { store, error }),
};

export const fetchConvertedCurrency = (currency) => action(FETCH_CURRENCY_CONVERTED, { currency });
export const fetchCurrencyRatio = (ratio) => action(FETCH_CURRENCY_RATIO, { ratio });
export const fetchToCurrency = (payload) => action(FETCH_TO_CURRENCY_TYPE, { payload });
export const fetchFromCurrency = (payload) => action(FETCH_FROM_CURRENCY_TYPE, { payload })
const fetchAmount = (value) => action(FETCH_AMOUNT, { value });
const loading = (payload) => action(FETCH_LOADING, { payload });

/********************************************************
 * ************************ REDUX THUNK *******************
 ********************************************************/
export function getLoadedCurrencies(schema, params = {}) {
  return async dispatch => {

    dispatch(loading(true));

    const { currency, amount } = params;

    let fetch;

    let fetchCurrency = "";

    try {

      if (!Array.isArray(params)) {
        currency.reduce((acc, item) => {
          fetchCurrency += `${acc}_${item}`;
        })
      }

      fetch = await new Promise((res, rej) =>
        res(api.fetchCurrency(schema, {
          q: fetchCurrency
        }))
      );

      const { response } = fetch;

      dispatch(fetchCurrencyRatio(response && response[fetchCurrency]));

      if (amount) {
        dispatch(fetchConvertedCurrency(amount * Number(response && response[fetchCurrency])));
      }

      dispatch(loading(false));

    } catch (e) {
      return new Promise.reject(e);
    }
  }
}
/**
 * Current amount from the input is mutating to the Redux Store
 * @param {*} payload 
 */
export function setCurrentAmount(payload = {}) {
  return (dispatch) => {
    dispatch(fetchAmount(payload));
  }
}
/**
 * Let's set current currency in the redux-store
 * @param {*} param0 
 */
export function setToCurrentCurrency(payload) {
  return (dispatch) => {
    dispatch(fetchToCurrency(payload));
  }
}

export function setFromCurrentCurrency(payload) {
  return (dispatch) => {
    dispatch(fetchFromCurrency(payload));
  }
}