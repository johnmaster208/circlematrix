
export const SOCKET_ACTIONS = {
  GET_SOCKET_CONNECTIONS: "GET_SOCKET_CONNECTIONS"
}

export function getSocketConnections(connections) {
  //console.log(connections);
  return dispatch => {
    dispatch({
      type: SOCKET_ACTIONS.GET_SOCKET_CONNECTIONS,
      connections
    })
  }
}
