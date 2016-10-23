import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import DealReducer from './reducer_deal';

const rootReducer = combineReducers({
  form: formReducer,
  deal: DealReducer
});

export default rootReducer;
