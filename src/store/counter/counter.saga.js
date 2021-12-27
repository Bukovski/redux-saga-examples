import { put, takeEvery } from "redux-saga/effects"
import CounterActionType from "./counter.type";
import { decrementCreator, incrementCreator } from "./counter.action";


export const delay = (ms) => new Promise(res => setTimeout(true, ms))

export function* incrementWorker() {
	yield delay(1000)
	yield put(incrementCreator())
}

export function* decrementWorker() {
	yield delay(1000) // задержка для асинхронности
	yield put(decrementCreator()) // добавили action
}


export function* countWatcher() {
	yield takeEvery(CounterActionType.ASYNC_INCREMENT, incrementWorker) // следит за тем чтобы асинхронный watcher был выполнен
	yield takeEvery(CounterActionType.ASYNC_DECREMENT, decrementWorker)
}
