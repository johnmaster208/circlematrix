import { ACTION, APP_CONSTANTS } from '../../constants/index.js'
import circleActions  from "../../actions/circleActions";
import MockStore from "../../utils/NativeJestStore";

describe("Circle Actions...", async () => {
    test('should create a SELECT_CIRCLE action...', async () => {
		const expectedAction = [{
            type: ACTION.SELECT_CIRCLE,
            obj: {}
        }];
		const store = MockStore({ state: {} });
		await store.dispatch(circleActions.selectCircle({}));
		expect(store.getActions()).toEqual(expectedAction);
    });
    test('should create an UNSELECT_CIRCLE action...', async() => {
        const expectedAction = [{
            type: ACTION.UNSELECT_CIRCLE,
            obj: {}
        }];
        const store = MockStore({ state: {} });
        await store.dispatch(circleActions.unSelectCircle({}));
        expect(store.getActions()).toEqual(expectedAction);
    });
    test('should create a SOCKET_CIRCLE_SELECTED action...', async() => {
        const expectedAction = [{
            type: ACTION.SOCKET_CIRCLE_SELECTED,
            obj: {}
        }];
        const store = MockStore({ state: {} });
        await store.dispatch(circleActions.socketCircle({}));
        expect(store.getActions()).toEqual(expectedAction);
    });
    test('should create a SOCKET_CIRCLE_UNSELECTED action...', async() => {
        const expectedAction = [{
            type: ACTION.SOCKET_CIRCLE_UNSELECTED,
            obj: {}
        }];
        const store = MockStore({ state: {} });
        await store.dispatch(circleActions.unSelectSocketCircle({}));
        expect(store.getActions()).toEqual(expectedAction);
    });
    test('should create a GET_OCCUPIED_CIRCLES action...', async() => {
        const expectedAction = [{
            type: ACTION.GET_OCCUPIED_CIRCLES,
        }];
        const store = MockStore({ state: {} });
        await store.dispatch(circleActions.getOccupiedCircles());
        expect(store.getActions()).toEqual(expectedAction);
    });
    test('should create a PUT_OCCUPIED_CIRCLES action...', async() => {
        const expectedAction = [{
            type: ACTION.PUT_OCCUPIED_CIRCLES,
            circles: []
        }];
        const store = MockStore({ state: {} });
        await store.dispatch(circleActions.putOccupiedCircles([]));
        expect(store.getActions()).toEqual(expectedAction);
    });
});
