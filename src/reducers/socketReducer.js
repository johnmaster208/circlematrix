import { SOCKET_ACTIONS } from '../actions/socketActions';
import { APP_CONSTANTS } from '../constants';

export const initialState = {
  id: undefined,
  connections: []
};


const socketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOCKET_ACTIONS.GET_SOCKET_ID: {
      const newState = {
        ...state,
        id: action.id
      }
      return newState;
    }
    case SOCKET_ACTIONS.GET_SOCKET_CONNECTIONS: {
      const newState = {
        ...state,
        connections: action.connections
      }
      return newState;
    }
    default:{
      return state
    }

  }
}

export default socketReducer
