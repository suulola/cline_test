import { applyMiddleware, createStore } from "redux";
import reducers from "./redux/reducers";
import thunk from "redux-thunk";

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("cline-project");
    if (serializedState) {
      return JSON.parse(serializedState);
    }
  } catch (e) {
    console.error(e);
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

export default createStore(reducers, persistedState, applyMiddleware(thunk));
