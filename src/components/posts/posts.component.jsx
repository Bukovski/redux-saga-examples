import React from "react";
import {  Container } from "./posts.style";


function Posts({ children, ...restProps }) {
	return <Container { ...restProps }>{ children }</Container>;
}



export default Posts;
