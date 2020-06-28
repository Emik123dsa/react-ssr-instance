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

export const getTemporaryStore = createSelector(getConverterReducer, (vendor) =>
  vendor.get("temporaryStore")
);

export const getAvailableCurrencies = createSelector(getConverterReducer, (vendor) =>
  vendor.get("available_currencies")
);








