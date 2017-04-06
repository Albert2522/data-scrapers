import { RECEIVE_POSTINGS } from '../actions/craigslist_actions';
import merge from 'lodash/merge';

const CraigsListReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_POSTINGS:
      return action.postings;
    default:
      return state;
  }
};

export default CraigsListReducer;
