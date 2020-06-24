import { GLOBAL_REDUCER } from "../../actions/vendor/globalFilter";
import { fromJS } from "immutable";

const initialGlobalReducers = fromJS({
  menu: [],
  categories: [],
  items: {},
  itemDetail: {},
  seo: [],
  actions: [],
  userPages: [],
  slides: [],
  companyInfo: {},
  appSettings: {},
});

const globalReducers = (state = initialGlobalReducers, action) => {
  switch (action.type) {
    case GLOBAL_REDUCER.SET_ACTIONS:
      break;
    case GLOBAL_REDUCER.SET_APP_SETTINGS:
      return state.setIn(["appSettings"], fromJS(action?.payload?.details));
    case GLOBAL_REDUCER.SET_CATEGORIES:
      break;
    case GLOBAL_REDUCER.SET_COMPANY_INFO:
      break;
    case GLOBAL_REDUCER.SET_ITEM_DETAILS:
      break;
    case GLOBAL_REDUCER.SET_MENU:
      break;
    case GLOBAL_REDUCER.SET_SEO_OPTIMIZATION:
      break;
    case GLOBAL_REDUCER.SET_SLIDES:
      break;
    case GLOBAL_REDUCER.SET_USER_PAGES:
      break;
    default:
      return state;
  }
};

export default globalReducers;
