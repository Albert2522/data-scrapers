import { combineReducers } from 'redux';

import CraigsListReducer from './craigslist_reducer';

const rootReducer = combineReducers({
  craigsList: CraigsListReducer
});

export default rootReducer;
