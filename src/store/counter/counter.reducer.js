import CounterActionType from "./counter.type";


const defaultState = {
	count: 0
}

export default function countReducer(state = defaultState, action) {
	switch (action.type) {
		case CounterActionType.INCREMENT:
			return { ...state, count: state.count + 1 }
		
		case CounterActionType.DECREMENT:
			return { ...state, count: state.count - 1 }
		
		default:
			return state;
	}
}
