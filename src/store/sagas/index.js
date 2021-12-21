import { all } from "redux-saga/effects"
import { countWatcher } from "./counter.saga";
import { userWatcher } from "./user.saga";

export function* rootWatcher() {
    yield all([ countWatcher(), userWatcher() ]) // watcher который следит за другими watcher
}
