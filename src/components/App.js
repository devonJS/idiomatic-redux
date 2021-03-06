import React from 'react';
import Filter from './Filter';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';

// import React, { Component } from 'react';
// import logo from '../logo.svg';
// import '../App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

//Params is a property from react-router where you can get values from the url
const App = () => {
  return(
  	<div>
      <AddTodo />
      <VisibleTodoList />
      <Filter />
    </div>
  );
};

export default App;
