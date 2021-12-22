import React from "react";
import {  Container } from "./posts.style";


function Posts({ children, ...restProps }) {
	return <Container { ...restProps }>{ children }</Container>;
}

Posts.Form = function ({ children, ...restProps }) {
	return
}


export default Posts;
