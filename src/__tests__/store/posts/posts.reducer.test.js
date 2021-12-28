import postsReducer from "../../../store/posts/posts.reducer";
import PostsActionType from "../../../store/posts/posts.type";
import { mockPostJson } from "../../../__mocks__/postMock";


describe("Post Reducer", () => {
	let defaultState;
	
	beforeEach(() => {
		defaultState = {
			posts: [],
			fetchedPosts: [],
			
			loading: false,
			alert: null
		}
	})
	
	it("should return the initial state", () => {
		expect(postsReducer(undefined, {})).toEqual(defaultState);
	})
	
	it("should handle 'CREATE_POST' action", () => {
		expect(postsReducer(defaultState, { type: PostsActionType.CREATE_POST,
			payload: mockPostJson[0] }))
			.toEqual({ ...defaultState, posts: [ mockPostJson[0] ] });
	})
	
	it("should handle 'FETCH_POSTS' action", () => {
		expect(postsReducer(defaultState, { type: PostsActionType.FETCH_POSTS,
			payload: mockPostJson }))
			.toEqual({ ...defaultState, fetchedPosts: mockPostJson });
	})
	
	it("should handle 'SHOW_LOADER' & 'HIDE_LOADER' action", () => {
		expect(postsReducer(defaultState, { type: PostsActionType.SHOW_LOADER }))
			.toEqual({ ...defaultState, loading: true });
		
		expect(postsReducer(defaultState, { type: PostsActionType.HIDE_LOADER }))
			.toEqual({ ...defaultState, loading: false });
	})
	
	it("should handle 'SHOW_ALERT' & 'HIDE_ALERT' action", () => {
		expect(postsReducer(defaultState, { type: PostsActionType.SHOW_ALERT,
			payload: "Some Error Message" }))
			.toEqual({ ...defaultState, alert: "Some Error Message" });
		
		expect(postsReducer(defaultState, { type: PostsActionType.HIDE_ALERT }))
			.toEqual({ ...defaultState, alert: null });
	})
});
