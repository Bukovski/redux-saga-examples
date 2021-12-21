import { put, takeEvery, call } from "redux-saga/effects";
import { FETCH_USERS, setUsers } from "../reducers/user.reducer";


const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')

function* fetchUserWorker() {
	const data = yield call(fetchUsersFromApi) // вернет данные которые прилетают в Promise
	const json = yield call(() => new Promise(res => res(data.json())))
	
	yield put(setUsers(json))
}


export function* userWatcher() {
	yield takeEvery(FETCH_USERS, fetchUserWorker)
}
