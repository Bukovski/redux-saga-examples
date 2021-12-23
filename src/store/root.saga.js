import { all } from "redux-saga/effects"
import { countWatcher } from "./counter/counter.saga";
import { userWatcher } from "./user/user.saga";
import { sagaWatcher } from "./posts/posts.saga";


export function* rootWatcher() {
	yield all([ countWatcher(), userWatcher(), sagaWatcher() ]) // watcher который следит за другими watcher
}
