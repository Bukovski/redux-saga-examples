import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk'
import logger from "redux-logger";

import rootReducer from "./root.reducer";
import { rootWatcher } from "./root.saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [ sagaMiddleware ]; // <-- подключили Saga

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}

middlewares.push(thunk);

export const store = createStore(
	rootReducer,
	applyMiddleware(...middlewares)
)

sagaMiddleware.run(rootWatcher)



