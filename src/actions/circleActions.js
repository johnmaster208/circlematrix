import {ACTION} from "../constants/index.js"

const circleActions = {
  selectCircle: (obj) => {
    return dispatch => {
      dispatch({
        type: ACTION.SELECT_CIRCLE,
        obj
      });
    }
  },
  unSelectCircle: (obj) => {
    return dispatch => {
      dispatch({
        type: ACTION.UNSELECT_CIRCLE,
        obj
      });
    }
  },
  socketCircle: (obj) => {
    return dispatch => {
      dispatch({
        type: ACTION.SOCKET_CIRCLE_SELECTED,
        obj
      });
    }
  },
  unSelectSocketCircle: (obj) => {
    return dispatch => {
      dispatch({
        type: ACTION.SOCKET_CIRCLE_UNSELECTED,
        obj
      });
    }
  },
  putOccupiedCircles: (circles) => {
    return dispatch => {
      dispatch({
        type: ACTION.PUT_OCCUPIED_CIRCLES,
        circles
      });
    }
  },
  getOccupiedCircles: () => {
    return dispatch => {
      dispatch({
        type: ACTION.GET_OCCUPIED_CIRCLES,
      });
    }
  }
};

export default circleActions;


