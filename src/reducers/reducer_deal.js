import { FETCH_DEALS } from '../actions/index';

export default function(state = null, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_DEALS:
      return action.payload;
  }
  return state;
}
