import { schema, normalize } from "normalizr";
import { camelizeKeys } from "humps";
import "isomorphic-fetch";
import qs from "qs";
import { appSettings } from "../actions/globalActions";

const API_REQUEST = "https://vsem-edu-oblako.ru/singlemerchant/api/";

const INITIAL_PARAMS = {
  json: true,
  merchant_keys: "929990d3b27944af404a5eb3ee1ec4f6",
  lang: "ru",
  device_platform: "site",
  device_id: "010101",
};

function callApi(endpoint, schema) {
  const fullUrl =
    endpoint.indexOf(API_REQUEST) === -1
      ? API_REQUEST + endpoint + "?" + qs.stringify(INITIAL_PARAMS)
      : endpoint;

  return fetch(fullUrl)
    .then((response) => response.json().then((json) => ({ json, response })))
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      const camelizedJson = camelizeKeys(json);
      
      console.log(Object.assign({}, normalize(camelizedJson, schema))); 

      return Object.assign({}, normalize(camelizedJson, schema));
    })
    .then(
      (response) => ({ response }),
      (error) => ({ error: error.message || "API_REQUEST ERROR" })
    );
}

const details = new schema.Entity("details");

const detailsSchema = new schema.Entity('details', {});

const appSettingsSchema = new schema.Array({
  details: details,
  //"code": code,
});

export const fetchAppSettings = (appSettings) =>
  callApi(appSettings, appSettingsSchema);
