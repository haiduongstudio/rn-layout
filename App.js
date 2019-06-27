import React from 'react';
import { View } from 'react-native';
import AddEntry from './components/AddEntry';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import History from './components/History';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = createBottomTabNavigator({
  History,
  AddEntry
});

const AppContainer = createAppContainer(TabNavigator);

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View style={{ flex: 1 }}>
        <View style={{ height: 20 }} />
        <AppContainer />
      </View>
    </Provider>
  );
}
