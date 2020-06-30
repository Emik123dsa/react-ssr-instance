import { createSelector } from "reselect";

export const getConverterReducer = (state) => state.get("converterReducer");

export const getMongoDB = createSelector(getConverterReducer, (vendor) =>
  vendor.get("vendor_DATABASE")
);

export const getAmount = createSelector(getConverterReducer, (vendor) =>
  vendor.get("amount")
);

export const getCurrency = createSelector(getConverterReducer, (vendor) =>
  vendor.get("currency")
);

export const getAvailableCurrencies = createSelector(getConverterReducer, (vendor) =>
  vendor.get("available_currencies")
);

export const getLoading = createSelector(getConverterReducer, (vendor) =>
  vendor.get("loading")
);

export const getRatio = createSelector(getConverterReducer, (vendor) =>
  vendor.getIn(["amount", "ratio"])
);

export const getTransactions = createSelector(getConverterReducer, (vendor) =>
  vendor.get("transactions")
);







