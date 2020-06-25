import { GLOBAL_REDUCER } from "../vendor/globalFilter";

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

export const appSettings = {
  request: (appSettings) => action(APP_SETTINGS[REQUEST], { appSettings }),
  response: (appSettings, response) =>
    action(APP_SETTINGS[SUCCESS], { appSettings, response }),
  failure: (appSettings, error) =>
    action(APP_SETTINGS[FAILURE], { appSettings, error }),
};


export const SET_APP_SETTINGS = createRequest(
  GLOBAL_REDUCER.SET_APP_SETTINGS
);

export const SET_MENU = createRequest(GLOBAL_REDUCER.SET_MENU);
export const SET_CATEGORIES = createRequest(GLOBAL_REDUCER.SET_CATEGORIES);
export const SET_ITEMS = createRequest(GLOBAL_REDUCER.SET_ITEMS);
export const SET_ITEMS_DETAILS = createRequest(GLOBAL_REDUCER.SET_ITEM_DETAILS);
export const SET_SEO_OPTIMIZATION = createRequest(
  GLOBAL_REDUCER.SET_SEO_OPTIMIZATION
);
export const SET_ACTIONS = createRequest(GLOBAL_REDUCER.SET_ACTIONS);
export const SET_USER_PAGES = createRequest(GLOBAL_REDUCER.SET_USER_PAGES);
export const SET_SLIDES = createRequest(GLOBAL_REDUCER.SET_SLIDES);
export const SET_COMPANY_INFO = createRequest(GLOBAL_REDUCER.SET_COMPANY_INFO);
