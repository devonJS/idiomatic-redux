import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import PropTypes from 'prop-types';

const AddTodo = ({dispatch}) => {
  let input;

  return(
    <form>
      <input ref={node => input = node}></input>
      <button 
        type="submit"
        onClick={(e) => {
          e.preventDefault();
        	dispatch(addTodo(input.value));
        	input.value = "";
      }}> Add Todo </button>
    </form>
  )
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(AddTodo);