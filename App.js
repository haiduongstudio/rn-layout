import React from 'react';
import CounterComponent from './components/CounterComponent';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers';
import CounterContainer from './containers/CounterContainer';

let store = createStore(allReducers);

export default function App() {
  return (
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  );
}
