import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toggleTodo } from '../actions';
// Curly braces indicate importing a named export
import { getVisibleTodos } from '../reducers'
// Without curly braces could point to a default export
import TodoList from './TodoList';

const mapStateToProps = (state, ownProps) => ({
	todos: getVisibleTodos(state, ownProps.params.filter || 'all')
});

// const mapDispatchToProps = (dispatch) => ({
// 	onTodoClick(id) {
// 		dispatch(toggleTodo(id))
//   }
// });

const VisibleTodoList = withRouter(connect(
	mapStateToProps,
	// Since you are using the same argument, can pass directly to function reference
  {onTodoClick: toggleTodo}
)(TodoList));

export default VisibleTodoList;