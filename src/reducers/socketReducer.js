import { ACTION } from '../constants/index.js';

export const initialState = {
  id: undefined,
  connections: [],
  modal: {
    key: "UNKNOWN",
    show: false
  }
};

const socketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.GET_SOCKET_ID: {
      let newState = {
        ...state,
        id: action.id
      }
      return newState;
    }
    case ACTION.GET_SOCKET_CONNECTIONS: {
      let newState = {
        ...state,
        connections: action.connections
      }
      return newState;
    }
    case ACTION.SHOW_MODAL_ALERT: {
      let newState = {
        ...state,
        modal: {
          ...state.modal,
          key: action.modal,
          show: action.show
        }
      }
      return newState;
    }
    case ACTION.HIDE_MODAL_ALERT: {
      let newState = {
        ...state,
        modal: {
          ...state.modal,
          key: action.modal,
          show: action.show
        }
      }
      return newState;
    }
    default:{
      return state
    }

  }
}

export default socketReducer
