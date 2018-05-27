import { ACTION } from '../constants/index.js'

const socketActions = {
  getUserSocketId: (id) => {
    return dispatch => {
      dispatch({
        type: ACTION.GET_SOCKET_ID,
        id
      });
    }
  },
  getSocketConnections: (connections) => {
    return dispatch => {
      dispatch({
        type: ACTION.GET_SOCKET_CONNECTIONS,
        connections
      })
    }
  },
  showModalAlert: (key) => {
    return {
      type: ACTION.SHOW_MODAL_ALERT,
      modal: key,
      show: true
    };
  },
  hideModalAlert: (key) => {
    return {
      type: ACTION.HIDE_MODAL_ALERT,
      modal: key,
      show: false
    };
  }
};

export default socketActions;