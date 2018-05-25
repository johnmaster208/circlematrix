export const CIRCLE_ACTIONS = {
  SELECT_CIRCLE: "SELECT_CIRCLE",
  UNSELECT_CIRCLE: "UNSELECT_CIRCLE",
  SOCKET_CIRCLE_SELECTED: "SOCKET_CIRCLE_SELECTED",
  SOCKET_CIRCLE_UNSELECTED: "SOCKET_CIRCLE_UNSELECTED",
  GET_OCCUPIED_CIRCLES: "GET_OCCUPIED_CIRCLES",
  PUT_OCCUPIED_CIRCLES: "PUT_OCCUPIED_CIRCLES"
}

export const selectCircle = (obj) => {
    return dispatch => {
      dispatch({
        type: CIRCLE_ACTIONS.SELECT_CIRCLE,
        obj
      });
    }
}

export const unSelectCircle = (obj) => {
  return dispatch => {
    dispatch({
      type: CIRCLE_ACTIONS.UNSELECT_CIRCLE,
      obj
    });
  }
}

export const socketCircle = (obj) => {
  return dispatch => {
    dispatch({
      type: CIRCLE_ACTIONS.SOCKET_CIRCLE_SELECTED,
      obj
    })
  }
}

export const unSelectSocketCircle = (obj) => {
  return dispatch => {
    dispatch({
      type: CIRCLE_ACTIONS.SOCKET_CIRCLE_UNSELECTED,
      obj
    })
  }
}

export const putOccupiedCircles = (circles) => {
  return dispatch => {
    dispatch({
      type: CIRCLE_ACTIONS.PUT_OCCUPIED_CIRCLES,
      circles
    })
  }
}

export const getOccupiedCircles = () => {
  return dispatch => {
    dispatch({
      type: CIRCLE_ACTIONS.GET_OCCUPIED_CIRCLES,
    });
  }
}


