import PostsActionType from "./posts.type";

export const createPost = post => ({
	type: PostsActionType.CREATE_POST,
	payload: post
})

export const hideAlert = () => ({ type: PostsActionType.HIDE_ALERT })
export const showAlert = text => ({
	type: PostsActionType.SHOW_ALERT,
	payload: text
})

export const showLoader = () => ({ type: PostsActionType.SHOW_LOADER });
export const hideLoader = () => ({ type: PostsActionType.HIDE_LOADER });

export const fetchPosts = () => ({ type: PostsActionType.REQUEST_POSTS });
