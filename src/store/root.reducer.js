import { combineReducers } from 'redux';

import countReducer from "./counter/counter.reducer";
import userReducer from "./user/user.reducer";
import postsReducer from "./posts/posts.reducer";


const rootReducer = combineReducers({
	countReducer,
	userReducer,
	posts: postsReducer
});


export default rootReducer;
