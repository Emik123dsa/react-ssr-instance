import { CONVERTER_REDUCER } from "../../actions/vendor/converterFilter";
import { fromJS } from "immutable";

const converterReducers = fromJS({
  vendor_DATABASE: [],
  temporaryStore: [],
  available_currencies: ["EUR", "USD", "CHF"],

  currency: {
    from_currency: "EUR",
    to_currency: "USD"
  },
  amount: {
    initial_amount: 0,
    ratio: 0,
    converted_amount: 0
  },
  loading: false
});

const essentialReducers = (state = converterReducers, action) => {
  switch (action.type) {
    case CONVERTER_REDUCER.SET_MONGO_DATABASE_STORE:
      return state.setIn(["vendor_DATABASE"], fromJS(action?.payload));
    case CONVERTER_REDUCER.SET_CURRENCY_RATIO:
      return state.setIn(["amount", "ratio"], fromJS(action?.ratio));
    case CONVERTER_REDUCER.SET_AMOUNT:
      return state.setIn(["amount", "initial_amount"], fromJS(action?.value && Number(action?.value.amount)));
    case CONVERTER_REDUCER.SET_DATA_CONVERTER_VALUE:
      return state.setIn(["amount", "converted_amount"], fromJS(action?.currency));
    case CONVERTER_REDUCER.SET_TO_CURRENCY_TYPE:
      return state.setIn(["currency", "to_currency"], fromJS(action?.payload))
    case CONVERTER_REDUCER.SET_FROM_CURRENCY_TYPE:
      return state.setIn(["currency", "from_currency"], fromJS(action?.payload))
    case CONVERTER_REDUCER.SET_LOADING:
      return state.setIn(["loading"], fromJS(action?.payload))
    default:
      return state;
  }
};

export default essentialReducers;
