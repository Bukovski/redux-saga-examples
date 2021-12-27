import { put, takeEvery, call } from "redux-saga/effects";
import PostsActionType from "./posts.type";
import { hideLoader, showAlert, showLoader } from "./posts.action";


export async function fetchPosts() {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
	return await response.json();
}

export function* sagaWorker() {
	yield put(showLoader());
	
	try {
		const payload = yield call(fetchPosts);
		
		yield put({ type: PostsActionType.FETCH_POSTS, payload })
	} catch (e) {
		yield put(showAlert('Something went wrong'))
	} finally {
		yield put(hideLoader())
	}
}

export function* sagaWatcher() {
	yield takeEvery(PostsActionType.REQUEST_POSTS, sagaWorker)
}