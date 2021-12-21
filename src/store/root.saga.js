import { all } from "redux-saga/effects"
import { countWatcher } from "./counter/counter.saga";
import { userWatcher } from "./user/user.saga";

export function* rootWatcher() {
	yield all([ countWatcher(), userWatcher() ]) // watcher который следит за другими watcher
}
