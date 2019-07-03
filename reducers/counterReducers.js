import { INCREMENT, DECREMENT } from '../actions/actionType';

const counterReducer = (times = 0, { type, step }) => {
  switch (type) {
    case INCREMENT:
      return (times = times + step);

    case DECREMENT:
      return (times = times - step);

    default:
      return times;
  }
};

export default counterReducer;
