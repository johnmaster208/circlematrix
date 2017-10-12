
export const CIRCLE_ACTIONS = {
  SELECT_CIRCLE: "SELECT_CIRCLE",
  UNSELECT_CIRCLE: "UNSELECT_CIRCLE",
  SOCKET_CIRCLE_SELECTED: "SOCKET_CIRCLE_SELECTED",
  SOCKET_CIRCLE_UNSELECTED: "SOCKET_CIRCLE_UNSELECTED",
  RENDER_SOCKET_CIRCLES: "RENDER_SOCKET_CIRCLES"
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

export const renderSocketCircles = (circles) => {
  return dispatch => {
    dispatch({
      type: CIRCLE_ACTIONS.RENDER_SOCKET_CIRCLES,
      circles
    });
  }
}
