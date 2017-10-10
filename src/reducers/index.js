import { combineReducers } from 'redux'
import circle from './circleReducer'
import socket from './socketReducer'

const CircleStateManager = combineReducers({
  circle,
  socket
});

export default CircleStateManager;
