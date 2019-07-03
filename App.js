import React from 'react';
import CounterComponent from './components/CounterComponent';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers';
import CounterContainer from './containers/CounterContainer';

// Redux saga
import createSagaMiddleware from 'redux-saga';
// Middleware
const sagaMiddleware = createSagaMiddleware();
import rootSaga from './sagas/rootSaga';

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

export default function App() {
  return (
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  );
}

sagaMiddleware.run(rootSaga);
