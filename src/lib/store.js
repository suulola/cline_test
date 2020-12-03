import { createStore } from 'redux';
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

export default createStore(
  reducers,
  persistedState,
);

