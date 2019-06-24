import React, { Component } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Electronics"
          onPress={() => this.props.navigation.navigate('Electronics')}
        />
        <Button
          title="Books"
          onPress={() => this.props.navigation.navigate('Books')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
