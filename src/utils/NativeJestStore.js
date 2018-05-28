import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const middlewares = [thunk]
const MockStore = configureStore(middlewares)
export default MockStore;