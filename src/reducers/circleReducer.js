import { APP_CONSTANTS, ACTION } from '../constants/index.js';
import data from '../data/circleData';

export const initialState = {
  items: data,
  circlesRemaining: 10,
  occupiedCircles: []
};


export default function (state = initialState, action){
  switch (action.type) {
    case ACTION.SELECT_CIRCLE:{
        let newState = JSON.parse(JSON.stringify(state));
        newState.items[action.obj.id] = {
          id: action.obj.id,
          fillColor: {color: APP_CONSTANTS.userSelectedFillColor},
          wasSelectedByMe: true,
          wasSelectedByOther: false
        }
        newState.circlesRemaining = state.circlesRemaining - 1;
        newState.occupiedCircles = Object.assign([],
        ...state.occupiedCircles,
        action.obj.id
        );
      return newState;
    }
    case ACTION.UNSELECT_CIRCLE:{
      let newState = JSON.parse(JSON.stringify(state));
      newState.items[action.obj.id] = {
        id: action.obj.id,
        fillColor: {color: APP_CONSTANTS.unSelectedFillColor},
        wasSelectedByMe: false,
        wasSelectedByOther: false
      }
      newState.circlesRemaining = state.circlesRemaining + 1;
      newState.occupiedCircles.splice(action.obj.id);
      return newState;
    }
    case ACTION.SOCKET_CIRCLE_SELECTED:{
      let newState = JSON.parse(JSON.stringify(state));
      newState.items[action.obj.id] = {
        id: action.obj.id,
        fillColor: {color: APP_CONSTANTS.socketSelectedFillColor},
        wasSelectedByMe: false,
        wasSelectedByOther: true
      }
      newState.circlesRemaining = state.circlesRemaining;
      newState.occupiedCircles = Object.assign([],
      ...state.occupiedCircles,
      action.obj.id
      );
      return newState;
    }
    case ACTION.SOCKET_CIRCLE_UNSELECTED:{
      let newState = JSON.parse(JSON.stringify(state));
      newState.items[action.obj.id] = {
        id: action.obj.id,
        fillColor: {color: APP_CONSTANTS.unSelectedFillColor},
        wasSelectedByMe: false,
        wasSelectedByOther: false
      }
      newState.circlesRemaining = state.circlesRemaining;
      newState.occupiedCircles.splice(action.obj.id);
      return newState;
    }
    case ACTION.GET_OCCUPIED_CIRCLES:{
      return state.occupiedCircles;
    }
    case ACTION.PUT_OCCUPIED_CIRCLES: {
      let newState = JSON.parse(JSON.stringify(state));
      newState.occupiedCircles = Object.assign([],
        ...state.occupiedCircles,
        action.circles
      );
      return newState;
    }
    default:{
      return state
    }
  }
}
