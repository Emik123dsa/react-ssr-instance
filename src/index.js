import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import { createBrowserHistory, createMemoryHistory } from "history";
import { ConnectedRouter } from "connected-react-router/immutable";

import routes from "./app/routes/routes";
import { ReduxAsyncConnect } from "redux-connect";
import { StaticRoutesConfig } from "./app/routes/staticRoutes";
import StyleContext from "isomorphic-style-loader/StyleContext";
import configureStore from "./configureStore";

const initialState = !process.env.IS_SERVER ? window.__INITIAL_DATA__ : {};

const history = process.env.IS_SERVER
  ? createMemoryHistory({
      initialEntries: ["/"],
    })
  : createBrowserHistory();

const store = configureStore(initialState, history);

if (!process.env.IS_SERVER) {
  window.store = store;
}

const insertCss = (...styles) => {
  const removeCss = styles.map((style) => style._insertCss());
  return () => removeCss.forEach((dispose) => dispose());
};

export const clientHydrate = () => {
  const dynamicRoutes = [...routes];

  dynamicRoutes[0].routes = [...dynamicRoutes[0].routes, ...StaticRoutesConfig];

  hydrate(
    <StyleContext.Provider value={{ insertCss }}>
      <Provider key="provider" store={store}>
        <ConnectedRouter history={history}>
          <ReduxAsyncConnect helpers={{}} routes={dynamicRoutes} />
        </ConnectedRouter>
      </Provider>
    </StyleContext.Provider>,
    document.getElementById("root")
  );
};

// const createHistory = require("history").createBrowserHistory;

// import { routerMiddleware } from "react-router-redux";
// import createSagaMiddleware from "redux-saga";

// import fillingReducers from "./sagas";

// const history = createHistory();
// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//   reducers,
//   compose(
//     applyMiddleware(thunk, sagaMiddleware, routerMiddleware(history)),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

// sagaMiddleware.run(fillingReducers);

// const rootInvoker = document.getElementById("root");

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   rootInvoker
// );
