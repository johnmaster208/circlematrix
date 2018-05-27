import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {

  const store = createStore(
    rootReducer, 
    initialState, 
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );

  return store;

}
