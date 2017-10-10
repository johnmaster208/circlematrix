
export const CIRCLE_ACTIONS = {
  SELECT_CIRCLE: "SELECT_CIRCLE",
  UNSELECT_CIRCLE: "UNSELECT_CIRCLE"
}

export const selectCircle = (obj, items) => {
    return dispatch => {
      dispatch({
        type: CIRCLE_ACTIONS.SELECT_CIRCLE,
        obj
      });
    }
}

export function unSelectCircle(obj, items) {
  return dispatch => {
    dispatch({
      type: CIRCLE_ACTIONS.UNSELECT_CIRCLE,
      obj
    });
  }
}
