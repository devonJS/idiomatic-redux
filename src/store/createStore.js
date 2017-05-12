import { createStore } from 'redux';
import todoApp from '../reducers';
import { loadState, saveState } from './localStorage';

//Initial state can be overidden by reducer default states
//if the initial state is not initialized to anything
const initialState = loadState();

export default () => {
  const store = createStore(
  	todoApp,
  	initialState
  );

  // Small debounce set for saving on state changes
  let currentSave;

  store.subscribe(() => {
  	if(currentSave > 0) window.clearTimeout(currentSave);
    
  	currentSave = window.setTimeout(saveState({
  		todos: store.getState().todos
  	}), 1000)
  });
  
  return store;  
};