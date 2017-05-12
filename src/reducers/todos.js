const todo = (state, action) => {
	switch(action.type) {
		case "ADD_TODO":
  		return {
    		id: action.id,
        text: action.text,
        completed: false
      };
    case "TOGGLE_TODO": 
  		if(state.id !== action.id) return state;
  		return Object.assign({}, state, state.completed = !state.completed);
    default: 
  		return state;
  }
};

const todos = (state=[], action) => {
	switch(action.type) {
		case "ADD_TODO":
  		return [
    		...state,
        todo(undefined, action)
      ];
    case "TOGGLE_TODO":
  		return state.map(td => todo(td, action));
    default: 
  		return state;
  }
};

// Selector, selects something from app state.
// state.todos is passed as "state", but we call it parameter "state"
// because it shares the same state as todos above, which is why 
// we can colocate this reducer and selector in the same file.
export const getVisibleTodos = (state, filter) => {
	switch(filter) {
		case "all": 
  		return state;
    case "active":
  		return state.filter(todo => !todo.completed);
    case "completed":
  		return state.filter(todo => todo.completed);
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
}

export default todos;