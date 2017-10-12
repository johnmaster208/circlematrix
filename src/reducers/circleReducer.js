import { CIRCLE_ACTIONS } from '../actions/circleActions';
import { APP_CONSTANTS } from '../constants';
import data from '../data/circleData';

export const initialState = {
  items: data,
  circlesRemaining: 10,
  occupiedCircles: []
};


export default function (state = initialState, action){
  switch (action.type) {
    case CIRCLE_ACTIONS.SELECT_CIRCLE:{
        const newState = JSON.parse(JSON.stringify(state));
        newState.items[action.obj.id] = {
          id: action.obj.id,
          fillColor: {color: APP_CONSTANTS.userSelectedFillColor},
          wasSelectedByMe: true,
          wasSelectedByOther: false
        }
        newState.circlesRemaining = state.circlesRemaining - 1;
      return newState;
    }
    case CIRCLE_ACTIONS.UNSELECT_CIRCLE:{
      const newState = JSON.parse(JSON.stringify(state));
      newState.items[action.obj.id] = {
        id: action.obj.id,
        fillColor: {color: APP_CONSTANTS.unSelectedFillColor},
        wasSelectedByMe: false,
        wasSelectedByOther: false
      }
      newState.circlesRemaining = state.circlesRemaining + 1;
      return newState;
    }
    case CIRCLE_ACTIONS.SOCKET_CIRCLE_SELECTED:{
      const newState = JSON.parse(JSON.stringify(state));
      newState.items[action.obj.id] = {
        id: action.obj.id,
        fillColor: {color: APP_CONSTANTS.socketSelectedFillColor},
        wasSelectedByMe: false,
        wasSelectedByOther: true
      }
      newState.circlesRemaining = state.circlesRemaining;
      return newState;
    }
    case CIRCLE_ACTIONS.SOCKET_CIRCLE_UNSELECTED:{
      const newState = JSON.parse(JSON.stringify(state));
      newState.items[action.obj.id] = {
        id: action.obj.id,
        fillColor: {color: APP_CONSTANTS.unSelectedFillColor},
        wasSelectedByMe: false,
        wasSelectedByOther: false
      }
      newState.circlesRemaining = state.circlesRemaining;
      return newState;
    }
    case CIRCLE_ACTIONS.RENDER_SOCKET_CIRCLES:{
      const newState = {
        ...state,
        occupiedCircles: action.circles
      }
      return newState;
    }
    default:{
      return state
    }
  }
}
