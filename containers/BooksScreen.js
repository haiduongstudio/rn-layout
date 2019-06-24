import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { connect } from 'react-redux';
import { books } from '../Data';
import Products from '../components/Products';

class BooksScreen extends Component {
  render() {
    return (
      <View>
        <Products products={books} onPress={this.props.addItemToCart} />
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

export default connect(
  null,
  mapDispatchToProps
)(BooksScreen);

const styles = StyleSheet.create({});
