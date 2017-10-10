import { CIRCLE_ACTIONS } from '../actions/circleActions';
import { APP_CONSTANTS } from '../constants';
import data from '../data/circleData';

export const initialState = {
  items: data,
  circlesRemaining: 10
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
        newState.circlesRemaining--
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
      newState.circlesRemaining++
      return newState;
    }
    default:{
      return state
    }
  }
}
