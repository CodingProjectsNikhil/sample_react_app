import { createStore, applyMiddleware, compose } from "redux";
//import thunk from "redux-thunk";
import apiMiddleware from "../_middleware/RestApi";
import rootReducer from "../_reducers";

const initialState = {};

// const middleware = [thunk, wmApiMiddleware];
const middleware = [apiMiddleware];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

export default store;
