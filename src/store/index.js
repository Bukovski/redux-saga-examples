import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';

import { rootWatcher } from "./sagas";

import countReducer from "./reducers/counter.reducer";
import userReducer from "./reducers/user.reducer";


const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
	countReducer,
	userReducer
})

export const store = createStore(
	rootReducer,
	applyMiddleware(sagaMiddleware) // <-- подключили Saga
)

sagaMiddleware.run(rootWatcher)



