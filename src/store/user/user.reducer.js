import UserActionType from "./user.type";


const defaultState = {
	users: []
}

export default function userReducer(state = defaultState, action) {
	switch(action.type) {
		case UserActionType.SET_USERS:
			return { ...state, users: action.payload }
		
		default:
			return state;
	}
}
