import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/createStore';
import AppContainer from './containers/AppContainer'
import './index.css';

const store = createStore();

ReactDOM.render(
	<AppContainer store={store}/>,
  document.getElementById('root')
);
