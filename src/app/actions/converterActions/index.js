import { CONVERTER_REDUCER } from "../vendor/converterFilter";
// import { apiRequest } from "../../services/axios";
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

/*****************
 * Currency block*
 *****************/
export const FETCH_CURRENCY = CONVERTER_REDUCER.SET_DATA_CONVERTER_VALUE;
export const FETCH_AMOUNT = CONVERTER_REDUCER.SET_AMOUNT;
export const FETCH_VENDOR_CURRENCY = CONVERTER_REDUCER.SET_VENDOR_CURRENCY;
export const FETCH_MONGO_DATABASE = CONVERTER_REDUCER.SET_MONGO_DATABASE_STORE;
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

export const fetchCurrencies = (currency, requiredFields = []) => action(FETCH_CURRENCY, { currency, requiredFields })
const fetchAmount = (amount) => action(FETCH_AMOUNT, { amount });
const fetchVendorCurrency = (currencies) => action(FETCH_VENDOR_CURRENCY, { currencies });
/********************************************************
 * ************************ REDUX THUNK *******************
 ********************************************************/
export function getLoadedCurrencies(params) {
  return async dispatch => {
    const fetch = await new Promise((res, rej) => {

      res(api.fetchCurrency(params));
    })
      .catch(error => rej(error));

    const { response } = fetch;

    dispatch(fetchCurrencies(response));
  }
}

export function setCurrentState(payload = {}) {
  return (dispatch) => {
    let data = []; 

    if (!Array.isArray(payload)) {
      Object.keys(payload).map((item) => {
        data[0] = [...item]; 
      })  
    }
    
    dispatch(fetchAmount(payload))
  }
}