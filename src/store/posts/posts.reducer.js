import PostsActionType from "./posts.type";


const defaultState = {
	posts: [],
	fetchedPosts: [],
	
	loading: false,
	alert: null
}

export default function postsReducer(state = defaultState, action) {
	switch(action.type) {
		case PostsActionType.CREATE_POST:
			return { ...state, posts: state.posts.concat([ action.payload ]) }
		
		case PostsActionType.FETCH_POSTS:
			return { ...state, fetchedPosts: action.payload }
		
		case PostsActionType.SHOW_LOADER:
			return { ...state, loading: true }
		
		case PostsActionType.HIDE_LOADER:
			return {...state, loading: false}
		
		case PostsActionType.SHOW_ALERT:
			return {...state, alert: action.payload}
		
		case PostsActionType.HIDE_ALERT:
			return {...state, alert: null}
		
		default:
			return state;
	}
}
