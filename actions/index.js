import { INCREMENT, DECREMENT } from './actionType';

export const increaseAction = step => ({
  type: INCREMENT,
  step
});

export const decreaseAction = step => ({
  type: DECREMENT,
  step
});
