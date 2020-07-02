import { CONVERTER_REDUCER } from "../vendor/converterFilter";

import { apiRequest } from "../../services/mongo";

import api from "../../services";

function action(type, payload = {}) {
  return { type, ...payload };
}
/********************************************
 ***************** CURRENCY BLOCK ***********
 ********************************************/
export const FETCH_CURRENCY_CONVERTED =
  CONVERTER_REDUCER.SET_DATA_CONVERTER_VALUE;
export const FETCH_CURRENCY_RATIO = CONVERTER_REDUCER.SET_CURRENCY_RATIO;
export const FETCH_AMOUNT = CONVERTER_REDUCER.SET_AMOUNT;

export const FETCH_MONGO_THUNK = CONVERTER_REDUCER.SET_MONGO_THUNK;
export const FETCH_TO_CURRENCY_TYPE = CONVERTER_REDUCER.SET_TO_CURRENCY_TYPE;
export const FETCH_FROM_CURRENCY_TYPE =
  CONVERTER_REDUCER.SET_FROM_CURRENCY_TYPE;

export const FETCH_HISTORY_STORE = CONVERTER_REDUCER.SET_HISTORY_STORE;
export const FETCH_MONGO_DATABASE = CONVERTER_REDUCER.SET_MONGO_DATABASE_STORE;
export const FETCH_LOADING = CONVERTER_REDUCER.SET_LOADING;
/***********************
 * FETCH ESSENTIAL DATA*
 ***********************/
export const fetchConvertedCurrency = (currency) =>
  action(FETCH_CURRENCY_CONVERTED, { currency });
export const fetchCurrencyRatio = (ratio) =>
  action(FETCH_CURRENCY_RATIO, { ratio });
export const fetchToCurrency = (payload) =>
  action(FETCH_TO_CURRENCY_TYPE, { payload });
export const fetchFromCurrency = (payload) =>
  action(FETCH_FROM_CURRENCY_TYPE, { payload });
export const fetchHistoryStore = (payload) =>
  action(FETCH_HISTORY_STORE, { payload });

const fetchAmount = (value) => action(FETCH_AMOUNT, { value });
const fetchMongoDBThunk = (uuid) => action(FETCH_MONGO_THUNK, { uuid });
const loading = (payload) => action(FETCH_LOADING, { payload });

/********************************************************
 * ************************ REDUX THUNK *******************
 ********************************************************/
export function getLoadedCurrencies(schema, params = {}) {
  return async (dispatch) => {
    dispatch(loading(true));
    const { currency, amount, cookie } = params;
    let fetch;
    let fetchCurrency = "";
    try {
      currency.reduce((acc, item) => {
        fetchCurrency += `${acc}_${item}`;
      });
      fetch = await new Promise((res, rej) =>
        res(
          api.fetchCurrency(schema, {
            q: fetchCurrency,
          })
        )
      );
      const { response } = fetch;
      dispatch(fetchCurrencyRatio(response && response[fetchCurrency]));
      if (amount) {
        dispatch(
          fetchConvertedCurrency(
            amount * Number(response && response[fetchCurrency])
          )
        );
        var date = new Date();
        const payload = {
          id: `${returnCorrectDate(
            date.getMonth()
          )} ${date.getDate()}, ${date.getFullYear()}`,
          from_currency: `${amount} ${currency.reduce((acc, item) => acc)}`,
          to_currency: `${(
            amount * Number(response && response[fetchCurrency])
          ).toFixed(5)} ${currency.reduce((acc, item) => item)}`,
          uuid: cookie,
        };
        await apiRequest({
          method: "POST",
          url: "/api/transactions",
          params: payload,
        });
        dispatch(fetchHistoryStore(payload));
      }
      dispatch(loading(false));
    } catch (e) {
      console.error(e);
    }
  };
}
/**
 * Current amount from the input is mutating to the Redux Store
 * @param {*} payload
 */
export function setCurrentAmount(payload = {}) {
  return (dispatch) => {
    dispatch(fetchAmount(payload));
  };
}
/**
 * Let's set current currency in the redux-store
 * @param {*} param0
 */
export function setToCurrentCurrency(payload) {
  return (dispatch) => {
    dispatch(fetchToCurrency(payload));
  };
}

export function setFromCurrentCurrency(payload) {
  return (dispatch) => {
    dispatch(fetchFromCurrency(payload));
  };
}

export function setMongoDbThunk(uuid_cookie) {
  return async (dispatch) => {
    const payload = await apiRequest({
      url: "/api/get-transaction",
      params: { uuid: uuid_cookie },
    });
    dispatch(fetchMongoDBThunk(payload));
  };
}

function returnCorrectDate(date) {
  let currentMonth = "";

  switch (date) {
    case 0:
      currentMonth = "January";
      break;
    case 1:
      currentMonth = "February";
      break;
    case 2:
      currentMonth = "March";
      break;
    case 3:
      currentMonth = "April";
      break;
    case 4:
      currentMonth = "May";
      break;
    case 5:
      currentMonth = "June";
      break;
    case 6:
      currentMonth = "July";
      break;
    case 7:
      currentMonth = "August";
      break;
    case 8:
      currentMonth = "September";
      break;
    case 9:
      currentMonth = "October";
      break;
    case 10:
      currentMonth = "November";
      break;
    case 11:
      currentMonth = "December";
      break;
    default:
      break;
  }
  return currentMonth;
}
