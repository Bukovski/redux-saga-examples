import { call, put, takeEvery } from 'redux-saga/effects';
import { mockUserJson } from "../../../__mocks__/userMock";
import UserActionType from "../../../store/user/user.type";
import { setUsers } from "../../../store/user/user.action";
import { fetchUserWorker, getFetchJson, userWatcher } from "../../../store/user/user.saga";


describe('User Saga', () => {
	const mockFetchPromise = {
		json: () => mockUserJson,
		ok: () => true
	};
	
	afterAll(() => {
		jest.clearAllMocks();
	});
	
	beforeEach(() => {
		fetch.resetMocks();
		fetch.mockResponse(() => mockFetchPromise)
	});
	
	it('should dispatch action "FETCH_USERS"', () => {
		const generator = userWatcher();
		
		expect(generator.next().value)
			.toEqual(takeEvery(UserActionType.FETCH_USERS, fetchUserWorker));
		
		expect(generator.next().done).toBeTruthy();
	})
	
	it('fetchUserWorker should dispatch setUsers action with result from fetch Users API', () => {
		const generator = fetchUserWorker();

		generator.next();
		expect(generator.next(mockUserJson).value).toEqual(call(getFetchJson, mockUserJson));
		
		expect(generator.next(mockUserJson).value)
			.toEqual(put(setUsers(mockUserJson)));
		
		expect(generator.next().done).toBeTruthy();
	})
	
	it("getFetchJson", () => {
		console.log(getFetchJson(mockFetchPromise))
	})
})
