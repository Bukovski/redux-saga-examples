import React from "react";
import { Container, Form, FormInput, FormTitle } from "./posts.style";


function Posts({ children, ...restProps }) {
	return <Container { ...restProps }>{ children }</Container>;
}

	// return <Form >
	// 		<FormTitle>Welcome</FormTitle>
	// 		<FormInput type="text" placeholder="Enter text for new post"/>
	// 		<FormInput type="button" value="Send text"/>
	// </Form>

Posts.Form = ({ children, ...restProps }) => <Form { ...restProps }>{ children }</Form>
Posts.Title = ({ children }) => <FormTitle>{ children }</FormTitle>;
Posts.Input = ({ ...restProps }) => <FormInput { ...restProps }/>;



export default Posts;
