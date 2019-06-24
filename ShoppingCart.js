import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './containers/HomeScreen';
import ElectronicScreen from './containers/ElectronicScreen';
import BooksScreen from './containers/BooksScreen';
import ShoppingCartIcon from './containers/ShoppingCartIcon';
import CartScreen from './containers/CartScreen';

export default class ShoppingCart extends Component {
  render() {
    return <AppStackNavigator />;
  }
}

const AppStackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Electronics: ElectronicScreen,
    Books: BooksScreen,
    Cart: CartScreen
  },
  {
    navigationOptions: {
      headerTitle: 'Shopping App',
      headerRight: <ShoppingCartIcon />
    }
  }
);

const styles = StyleSheet.create({});
