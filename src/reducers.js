import { combineReducers } from 'redux';
import { FETCH_PAINTINGS, SELECT_ACTIVE_PAINTING, DELETE_ACTIVE_PAINTING, FILTER_PAINTINGS } from './actions/types';

const paintingsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PAINTINGS:
      return [...action.payload];
      break;
    case DELETE_ACTIVE_PAINTING:
      let newState = [...state]
      return newState = newState.filter(painting => (action.id !== painting.id))
      break;
    default:
      return state;
  }
};

const activePaintingIdReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_PAINTINGS:
      return action.payload[0].id
      break;
    case SELECT_ACTIVE_PAINTING:
      return action.id;
      break;
    default:
      return state;
  }
};

const selectedMuseumReducer = (state = false, action) => {
  switch (action.type) {
    case FILTER_PAINTINGS:
      return action.id
      break;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  paintings: paintingsReducer,
  activePaintingId: activePaintingIdReducer,
  selectedMuseumId: selectedMuseumReducer
});

// NOTE:
// the keys in the object passed to combineReducers
// will become the top level keys of redux store state
// i.e. store.getState() would return =>
// {
//   paintings: {
//     /* state returned ftom paintingsReducer */
//   },
//   activePainting: {
//     /* state returned from activePaintingReducer */
//   }
// }

export default rootReducer;
