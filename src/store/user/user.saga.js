import { put, takeEvery, call } from "redux-saga/effects";
import { setUsers } from "./user.action";
import UserActionType from "./user.type";


const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')

export const getFetchJson = (data) => new Promise(res => res(data.json()));

export function* fetchUserWorker() {
	const data = yield call(fetchUsersFromApi) // вернет данные которые прилетают в Promise
	const json = yield call(getFetchJson, data)
	
	yield put(setUsers(json))
}


export function* userWatcher() {
	yield takeEvery(UserActionType.FETCH_USERS, fetchUserWorker)
}
