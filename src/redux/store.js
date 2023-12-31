import {applyMiddleware, legacy_createStore as createStore, compose} from "redux";
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middlewares = [thunk];

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))


export {  store };
