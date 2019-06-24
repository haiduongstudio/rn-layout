import React, { Component } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

export default class Products extends Component {
  renderProducts = products => {
    return products.map((item, index) => {
      return (
        <View key={index} style={{ padding: 20 }}>
          <Button
            onPress={() => this.props.onPress(item)}
            title={item.name + ' - ' + item.price}
          />
        </View>
      );
    });
  };

  render() {
    return <View>{this.renderProducts(this.props.products)}</View>;
  }
}

const styles = StyleSheet.create({});
