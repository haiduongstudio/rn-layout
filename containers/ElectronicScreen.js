import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { connect } from 'react-redux';
import { electronics } from '../Data';
import Products from '../components/Products';

class ElectronicScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Electronics'
  };

  render() {
    return (
      <View>
        <Products products={electronics} onPress={this.props.addItemToCart} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: product =>
      dispatch({ type: 'ADD_TO_CART', payload: product })
  };
};

export default connect(null, mapDispatchToProps)(ElectronicScreen);

const styles = StyleSheet.create({});
