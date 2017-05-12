import React from 'react';
import { Provider } from 'react-redux';
import App from '../components/App';

const AppContainer = ({store}) => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppContainer;