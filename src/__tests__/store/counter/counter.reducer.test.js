import countReducer from "../../../store/counter/counter.reducer";
import CounterActionType from "../../../store/counter/counter.type";


describe("Counter Reducer", () => {
	let defaultState;
	
	beforeEach(() => {
		defaultState = {
			count: 0
		}
	})
	
	it("should return the initial state", () => {
		expect(countReducer(undefined, {})).toEqual(defaultState);
	})
	
	it("should handle 'INCREMENT' action", () => {
		expect(countReducer(defaultState, { type: CounterActionType.INCREMENT })).toEqual({ count: 1 });
	})
	
	it("should handle 'DECREMENT' action", () => {
		expect(countReducer(defaultState, { type: CounterActionType.DECREMENT })).toEqual({ count: -1 });
	})
});
