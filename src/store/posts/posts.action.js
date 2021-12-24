import PostsActionType from "./posts.type";
import { useDispatch } from "react-redux";


export const createPost = post => ({
	type: PostsActionType.CREATE_POST,
	payload: post
})

export const hideAlert = () => ({ type: PostsActionType.HIDE_ALERT })
export const showAlert = text => dispatch => {
	setTimeout(() => {
		dispatch(hideAlert());
	}, 3100);
	
	dispatch({
		type: PostsActionType.SHOW_ALERT,
			payload: text
	})
}

export const showLoader = () => ({ type: PostsActionType.SHOW_LOADER });
export const hideLoader = () => ({ type: PostsActionType.HIDE_LOADER });

export const fetchPosts = () => ({ type: PostsActionType.REQUEST_POSTS });

export const fetchThunkPosts = () => async dispatch => {
  try {
    dispatch(showLoader())
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    const json = await response.json();
	  
    setTimeout(() => {
      dispatch({ type: PostsActionType.FETCH_POSTS, payload: json })
      dispatch(hideLoader())
    }, 5000)
  } catch (e) {
    dispatch(showAlert('Что-то пошло не так'))
    dispatch(hideLoader())
  }
};
