import { CONVERTER_REDUCER } from "../../actions/vendor/converterFilter";
import { fromJS } from "immutable";

const converterReducers = fromJS({
  vendor_DATABASE: [],
  temporaryStore: [],
  available_currencies: ["EUR", "USD", "CHF"],
  currency: {
    from_currency: "",
    to_currency: ""
  },
  amount: {
    initial_amount: 0,
    converted_amount: 0
  }
});

const essentialReducers = (state = converterReducers, action) => {
  switch (action.type) {
    case CONVERTER_REDUCER.SET_MONGO_DATABASE_STORE:
      return state.setIn(["vendor_DATABASE"], fromJS(action?.payload));
    case CONVERTER_REDUCER.SET_DATA_CONVERTER_VALUE:
      return state.setIn(["amount", "converted_amount"], fromJS(action?.currency));
    case CONVERTER_REDUCER.SET_AMOUNT:
      return state.setIn(["amount", "initial_amount"], fromJS(action?.amount && Number(action?.amount.amount)));
    default:
      return state;
  }
};

export default essentialReducers;
