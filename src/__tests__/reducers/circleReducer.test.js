import { ACTION, APP_CONSTANTS } from '../../constants/index.js'
import reducer, { initialState } from '../../reducers/circleReducer'
import circleActions from '../../actions/circleActions';
import CircleData from        '../../data/circleData'

describe('circleReducer...', () => {
    it('should return the initialState...', () => {
        const state = undefined
        expect(reducer(undefined, {})).toEqual(initialState);
    });
    it('should reduce state when SELECT_CIRCLE is dispatched...', () => {
        const state = JSON.parse(JSON.stringify(initialState));
        const obj = {
            id: 0,
            fillColor: {color: APP_CONSTANTS.userSelectedFillColor},
            wasSelectedByMe: true,
            wasSelectedByOther: false
        }
        const action = {
            type: ACTION.SELECT_CIRCLE,
            obj
        }
        const expectedState = {...state};
        expectedState.items[action.obj.id] = obj;
        expectedState.circlesRemaining = state.circlesRemaining - 1;
        expect(reducer(state, action)).toEqual(expectedState);
    });
    it('should reduce state when UNSELECT_CIRCLE is dispatched...', () => {
        const state = JSON.parse(JSON.stringify(initialState));
        const obj = {
            id: 0,
            fillColor: {color: APP_CONSTANTS.unSelectedFillColor},
            wasSelectedByMe: false,
            wasSelectedByOther: false
        }
        const action = {
            type: ACTION.UNSELECT_CIRCLE,
            obj
        }
        const expectedState = {...state};
        expectedState.items[action.obj.id] = obj;
        expectedState.circlesRemaining = state.circlesRemaining + 1;
        expect(reducer(state, action)).toEqual(expectedState);
    });
    it('should reduce state when SOCKET_CIRCLE_SELECTED is dispatched...', () => {
        const state = JSON.parse(JSON.stringify(initialState));
        const obj = {
            id: 0,
            fillColor: {color: APP_CONSTANTS.socketSelectedFillColor},
            wasSelectedByMe: false,
            wasSelectedByOther: true
        }
        const action = {
            type: ACTION.SOCKET_CIRCLE_SELECTED,
            obj
        }
        const expectedState = {...state};
        expectedState.items[action.obj.id] = obj;
        expectedState.circlesRemaining = state.circlesRemaining;
        expect(reducer(state, action)).toEqual(expectedState);
    });
    it('should reduce state when SOCKET_CIRCLE_UNSELECTED is dispatched...', () => {
        const state = JSON.parse(JSON.stringify(initialState));
        const obj = {
            id: 0,
            fillColor: {color: APP_CONSTANTS.unSelectedFillColor},
            wasSelectedByMe: false,
            wasSelectedByOther: false
        }
        const action = {
            type: ACTION.SOCKET_CIRCLE_UNSELECTED,
            obj
        }
        const expectedState = {...state};
        expectedState.items[action.obj.id] = obj;
        expectedState.circlesRemaining = state.circlesRemaining;
        expect(reducer(state, action)).toEqual(expectedState);
    });
    it('should reduce state when GET_OCCUPIED_CIRCLES is dispatched...', () => {
        const state = JSON.parse(JSON.stringify(initialState));
        const action = {
            type: ACTION.GET_OCCUPIED_CIRCLES
        };
        const expectedState = [...state.occupiedCircles];
        expect(reducer(state, action)).toEqual(expectedState);
    });
    it('should reduce state when PUT_OCCUPIED_CIRCLES is dispatched...', () => {
        const state = {...initialState};
        const action = {
            type: ACTION.PUT_OCCUPIED_CIRCLES,
            circles: [0,2,4,6,8]
        }
        const expectedState = {...state};
        expectedState.occupiedCircles = [...state.occupiedCircles,...action.circles];
        expect(reducer(state, action)).toEqual(expectedState);
    });

});