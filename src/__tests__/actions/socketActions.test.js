import { ACTION, APP_CONSTANTS } from '../../constants/index.js'
import socketActions  from "../../actions/socketActions";
import MockStore from "../../utils/NativeJestStore";

describe("Socket Actions...", async () => {
    test('should create a GET_SOCKET_ID action...', async () => {
		const expectedAction = [{
            type: ACTION.GET_SOCKET_ID,
            id: "ABC_123"
        }];
		const store = MockStore({ state: {} });
		await store.dispatch(socketActions.getUserSocketId("ABC_123"));
		expect(store.getActions()).toEqual(expectedAction);
    });
    test('should create a GET_SOCKET_CONNECTIONS action...', async() => {
        const expectedAction = [{
            type: ACTION.GET_SOCKET_CONNECTIONS,
            connections: []
        }];
        const store = MockStore({ state: {} });
        await store.dispatch(socketActions.getSocketConnections([]));
        expect(store.getActions()).toEqual(expectedAction);
    });
    test('should create a SHOW_MODAL_ALERT action...', async() => {
        const expectedAction = [{
            type: ACTION.SHOW_MODAL_ALERT,
            modal: "TUTORIAL",
            show: true
        }];
        const store = MockStore({ state: {} });
        await store.dispatch(socketActions.showModalAlert("TUTORIAL"));
        expect(store.getActions()).toEqual(expectedAction);
    });
    test('should create a HIDE_MODAL_ALERT action...', async() => {
        const expectedAction = [{
            type: ACTION.HIDE_MODAL_ALERT,
            modal: "TUTORIAL",
            show: false
        }];
        const store = MockStore({ state: {} });
        await store.dispatch(socketActions.hideModalAlert("TUTORIAL"));
        expect(store.getActions()).toEqual(expectedAction);
    });
});
