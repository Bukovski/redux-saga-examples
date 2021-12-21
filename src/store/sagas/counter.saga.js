import { put, takeEvery } from "redux-saga/effects"
import { ASYNC_DECREMENT, ASYNC_INCREMENT,
	decrementCreator, incrementCreator } from "../reducers/counter.reducer";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* incrementWorker() {
	yield delay(1000)
	yield put(incrementCreator())
}

function* decrementWorker() {
	yield delay(1000) // задержка для асинхронности
	yield put(decrementCreator()) // добавили action
}


export function* countWatcher() {
	yield takeEvery(ASYNC_INCREMENT, incrementWorker) // следит за тем чтобы асинхронный watcher был выполнен
	yield takeEvery(ASYNC_DECREMENT, decrementWorker)
}
