import { applyMiddleware, createStore, compose } from 'redux';
import reducers from './redux/reducers';

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('cline-project');
    if (serializedState) {
      return JSON.parse(serializedState);
    }
  } catch (e) {
    console.error(e);
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
  reducers,
  persistedState,
  // composeEnhancers(applyMiddleware(...middlewares)),
);

//compose allows us to combine enchancer
