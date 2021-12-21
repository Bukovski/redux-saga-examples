import { combineReducers } from 'redux';

import countReducer from "./counter/counter.reducer";
import userReducer from "./user/user.reducer";


const rootReducer = combineReducers({
	countReducer,
	userReducer
});


export default rootReducer;
