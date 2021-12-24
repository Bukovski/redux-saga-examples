import PostsActionType from "./posts.type";
import { hideAlert, showAlert } from "./posts.action";


const forbidden = ['fuck', 'spam', 'php']

export function forbiddenWordsMiddleware({ dispatch }) {
	return function(next) {
		return function(action) {
			if (action.type === PostsActionType.CREATE_POST) {
				const found = forbidden.filter(w => action.payload.title.includes(w))
				
				if (found.length) {
					return dispatch(showAlert("You are a spammer. We didn't call you, go home!"))
				}
			}
			
			return next(action)
		}
	}
}
