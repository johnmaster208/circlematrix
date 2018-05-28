import { ACTION, APP_CONSTANTS } from '../../constants/index.js'
import reducer, { initialState } from '../../reducers/socketReducer'
import socketActions from '../../actions/socketActions';

describe('socktReducer...', () => {
    it('should return the initialState...', () => {
        const state = undefined
        expect(reducer(undefined, {})).toEqual(initialState);
    });
    it('should reduce state when GET_SOCKET_ID is dispatched...', () => {
        const state = {...initialState};
        const action = {
            type: ACTION.GET_SOCKET_ID,
            id: 'f32edvCA_adsfa2'
        };
        const expectedState = {
            ...state,
            id: action.id
        };
        expect(reducer(state,action)).toEqual(expectedState);
    });
    it('should reduce state when GET_SOCKET_CONNECTIONS is dispatched...', () => {
        const state = {...initialState};
        const action = {
            type: ACTION.GET_SOCKET_CONNECTIONS,
            connections: []
        };
        const expectedState = {
            ...state,
            connections: action.connections
        };
        expect(reducer(state, action)).toEqual(expectedState);
    });
    it('should reduce state when SHOW_MODAL_ALERT is dispatched...', () => {
        const state = {...initialState};
        const action = {
            type: ACTION.SHOW_MODAL_ALERT,
            modal: "TUTORIAL",
            show: true
        };
        const expectedState = {
            ...state,
            modal: {
                ...state.modal,
                key: action.modal,
                show: action.show
            }
        }
        expect(reducer(state, action)).toEqual(expectedState);
    });
    it('should reduce state when HIDE_MODAL_ALERT is dispatched...', () => {
        const state = {...initialState};
        const action = {
            type: ACTION.HIDE_MODAL_ALERT,
            modal: "TUTORIAL",
            show: false
        }
        const expectedState = {
            ...state,
            modal: {
                ...state.modal,
                key: action.modal,
                show: action.show
            }
        };
        expect(reducer(state, action)).toEqual(expectedState);
    })

});