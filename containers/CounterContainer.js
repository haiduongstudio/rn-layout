import { connect } from 'react-redux';
import CounterComponent from '../components/CounterComponent';

// Actions
import { increaseAction, decreaseAction } from '../actions';

const mapStateToProps = state => {
  // alert(`State after changed ${JSON.stringify(state.counterReducers)}`);
  return {
    times: state.counterReducers ? state.counterReducers : 0
  };
};
const mapDispatchToProps = dispatch => ({
  onDecrement: step => {
    dispatch(decreaseAction(step));
  },
  onIncrement: step => {
    dispatch(increaseAction(step));
  }
});

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);
export default CounterContainer;
