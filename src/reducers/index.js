import { combineReducers } from 'redux';
// * receives all named exports
import todos, * as fromTodos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
	todos,
  visibilityFilter
});

export default todoApp;

// Abstracts actual argument being passed to getVisibleTodos,
// code using getVisibleTodos only needs to worry about passing in the state

export const getVisibleTodos = (state, filter) => fromTodos.getVisibleTodos(state.todos, filter)