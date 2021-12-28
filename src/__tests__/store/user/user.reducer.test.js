import userReducer from "../../../store/user/user.reducer";
import UserActionType from "../../../store/user/user.type";
import { mockUserJson } from "../../../__mocks__/userMock";


describe("User Reducer", () => {
	it("should return the initial state", () => {
		expect(userReducer(undefined, {})).toEqual({ users: [] });
	})
	
	it("should handle 'SET_USERS' action", () => {
		expect(userReducer({}, { type: UserActionType.SET_USERS, payload: mockUserJson })).toEqual({ users: mockUserJson });
		expect(userReducer({}, { type: UserActionType.SET_USERS, payload: mockUserJson })).toEqual({ users: mockUserJson });
	})
});
