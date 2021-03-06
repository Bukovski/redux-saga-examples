import React, { useState } from 'react';
import { Alert, Loader, Posts } from "../components";
import { connect, useDispatch, useSelector } from "react-redux";
import { createPost, fetchPosts, fetchThunkPosts, showAlert } from "../store/posts/posts.action";



const PostForm = () => {
	const dispatch = useDispatch();
	const alert = useSelector(state => state.posts.alert);
	
	const [ title, setTitle ] = useState("");
	
	const changeInputHandler = event => {
		event.persist();
		
		const { value } = event.target;
		
		setTitle(value);
	}
	
	const submitHandler = event => {
		event.preventDefault();
		
		if (!title.trim()) {
			dispatch(showAlert('Post title cannot be empty'));
			
			return null;
		}
		
		const newPost = {
			title, id: Date.now().toString()
		}
		
		dispatch(createPost(newPost))
		
		setTitle("");
	}
	
	
	return(
		<>
			{ alert
			&& <Alert>
				<Alert.Error>
					{ alert }
				</Alert.Error>
			</Alert>
			}
			
			<Posts>
				<Posts.Form onSubmit={ submitHandler }>
					<Posts.Title>Create new post</Posts.Title>
					<Posts.Input
						type="text"
						placeholder="Enter text for new post"
						value={ title }
						onChange={ changeInputHandler }
					/>
					<Posts.Input type="submit" value="Create post"/>
				</Posts.Form>
			</Posts>
		</>
	)
}

const PostsAsync = () => {
	const dispatch = useDispatch()
	const posts = useSelector(state => state.posts.fetchedPosts)
	const loading = useSelector(state => state.posts.loading)
	
	
	return (
		<Posts.Column>
			<h2>Async Saga Post</h2>
			{ posts.length
				? posts.map(post => <Posts.Card key={ post.id }>{ post.title }</Posts.Card>)
				: <Posts.Input
					type="button"
					value="Load posts"
					onClick={ () => dispatch(fetchPosts()) }
				/>
			}
			{ loading && <Loader /> }
		
		</Posts.Column>
	)
}




const PostsThunkAsync = ({ posts, loading, fetchThunkPosts }) => {
	
	return (
		<Posts.Column>
			<h2>Async Thunk Post</h2>
			{ posts.length
				? posts.map(post => <Posts.Card key={ post.id }>{ post.title }</Posts.Card>)
				: <Posts.Input
					type="button"
					value="Load posts"
					onClick={ () => fetchThunkPosts() }
				/>
			}
			{ loading && <Loader /> }
		
		</Posts.Column>
	)
}

const mapStateToProps = state => ({
	posts: state.posts.fetchedPosts,
	loading: state.posts.loading
})

const mapDispatchToProps = { fetchThunkPosts }

const PostsThunk = connect(mapStateToProps, mapDispatchToProps)(PostsThunkAsync);


const PostsContainer = () => {
	const syncPosts = useSelector(state => state.posts.posts);
	
	return (
		<>
			<PostForm />
			
			<Posts>
				<Posts.Row>
					<Posts.Column>
						<h2>Sync Post</h2>
						{ syncPosts.length
							? syncPosts.map(post => <Posts.Card key={ post.id }>{ post.title }</Posts.Card>)
							: "No posts have been created yet"
						}
					</Posts.Column>
					
					<PostsAsync />
					
					<PostsThunk />
				</Posts.Row>
			</Posts>
		</>
	)
}


export default PostsContainer;
