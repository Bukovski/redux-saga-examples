import React, { useState } from 'react';
import { Alert, Posts } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { createPost, hideAlert, showAlert } from "../store/posts/posts.action";



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
			
			setTimeout(() => {
				dispatch(hideAlert())
			}, 3100);
			
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
							: "No posts have been created yet\n"
						}
					</Posts.Column>
					<Posts.Column>
						<h2>Async Post</h2>
						<Posts.Input type="button" value="Load posts"/>
						<Posts.Card>Async Post</Posts.Card>
						<Posts.Card>Async Post</Posts.Card>
						<Posts.Card>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						</Posts.Card>
					</Posts.Column>
				</Posts.Row>
			</Posts>
		</>
	)
}


export default PostsContainer;