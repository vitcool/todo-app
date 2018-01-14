import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import tasks from "../modules/tasks";

export default function configureStore(initialState) {
  const rootReducer = combineReducers({
    tasks
  });

  const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunkMiddleware));

  return store;
}
