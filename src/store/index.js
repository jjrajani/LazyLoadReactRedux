import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import monitorReducersEnhancer from "./enhancers/monitorReducers";
// import loggerMiddleware from "./middleware/logger";
import rootReducer from "../reducers";

function configureStore(preloadedState) {
  const middlewares = [/*loggerMiddleware,*/ thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [
    middlewareEnhancer,
    /*monitorReducersEnhancer,*/
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("../reducers", () => store.replaceReducer(rootReducer));
  }

  return store;
}

const STORE = configureStore();

export default STORE;
