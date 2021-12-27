import { call, put, takeEvery } from 'redux-saga/effects';
import { mockPostJson } from "../../../__mocks__/postMock";
import PostsActionType from "../../../store/posts/posts.type";
import { fetchPosts, sagaWatcher, sagaWorker } from "../../../store/posts/posts.saga";
import { hideLoader, showAlert, showLoader } from "../../../store/posts/posts.action";



describe('Post Saga', () => {
	const mockFetchPromise = {
		json: () => Promise.resolve(mockPostJson),
		ok: () => true
	};
	
	afterAll(() => {
		jest.clearAllMocks();
	});
	
	beforeEach(() => {
		fetch.resetMocks();
		fetch.mockImplementation(() => mockFetchPromise)
	});
	
	it('should dispatch action "REQUEST_POSTS"', () => {
		const generator = sagaWatcher();
		
		expect(generator.next().value)
			.toEqual(takeEvery(PostsActionType.REQUEST_POSTS, sagaWorker));
		
		expect(generator.next().done).toBeTruthy();
	})
	
	it('sagaWorker should dispatch FETCH_POSTS action with result from fetchPosts', () => {
		const generator = sagaWorker();
		
		expect(generator.next().value).toEqual(put(showLoader()));
		expect(generator.next(mockPostJson).value).toEqual(call(fetchPosts));
		
		expect(generator.next(mockPostJson).value).toEqual(put({ type: PostsActionType.FETCH_POSTS, payload: mockPostJson }));
		expect(generator.next().value).toEqual(put(hideLoader()));
		
		expect(generator.next().done).toBeTruthy();
	})
	
	it('fetchPosts', async () => {
		const postData = await fetchPosts();
		
		expect(Array.isArray(postData)).toBeTruthy();
		expect(postData).toEqual(mockPostJson);
	})
})
