import qs from "qs";
import fetch from "isomorphic-fetch";
const API_REQUEST = "https://free.currconv.com/api/v7/";
//const API_REQUEST = "http://apilayer.net/api/live?access_key=fb8e785e7d1a3a6198bb8a4bbb1d9452&currencies=EUR,GBP,CAD,PLN&source=USD&format=1";

const INITIAL_PARAMS = {
  "compact": "ultra",
  "apiKey": "185514fd5495296d5129"
};

/**
 * Api Invoker 
 * @param {*} endpoint 
 */
function callApi(endpoint, params = {}) {
  const fullUrl =
    endpoint.indexOf(API_REQUEST) === -1
      ? API_REQUEST + endpoint + "?" + qs.stringify(INITIAL_PARAMS) + "&" + qs.stringify(params)
      : endpoint + "?" + "&" + qs.stringify(params);

  return fetch(fullUrl)
    .then((response) => response.json().then((json) => ({ json, response })))
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      return Object.assign({}, json);
    })
    .then(
      (response) => ({ response }),
      (error) => ({ error: error.message || "API_REQUEST ERROR" })
    );
}
/**
 * MongoDB extracting in the redux/immutable store 
 * @param {*} mongo 
 */
export const fetchMongoDB = (mongo, params) =>
  callApi(mongo, params)

/**
 * Invoke api currency request
 * @param {*} currency 
 */
export const fetchCurrency = (currency, params) =>
  callApi(currency, params);
