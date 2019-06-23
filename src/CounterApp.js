import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

/**
|--------------------------------------------------
| * Store - holds our state - THERE IS ONLY STORE
  * Action(TYPE OF ACTION) - State canbe modified using actions - SIMPLE OBJECTS
  * Dispatcher - Action needs to be send by someone - known as dispatching an action
  * Reducer - receives the action and modifies the state to give us a new state
  *  - only madatory argument is action type
  * Subscriber - listens for state change to update the ui (using connect)
|--------------------------------------------------
*/

class CounterApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            width: 200,
            justifyContent: 'space-around'
          }}
        >
          <TouchableOpacity onPress={() => this.props.increaseCounter()}>
            <Text style={{ fontSize: 20 }}>Increase</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 20 }}>{this.props.counter}</Text>
          <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
            <Text style={{ fontSize: 20 }}>Decrease</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProp(dispatch) {
  return {
    increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
    decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(CounterApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
