import React from "react";
import { Card, Column, Container, Form, FormInput, FormTitle, Row } from "./posts.style";


function Posts({ children, ...restProps }) {
	return <Container { ...restProps }>{ children }</Container>;
}

Posts.Form = ({ children, ...restProps }) => <Form { ...restProps }>{ children }</Form>
Posts.Title = ({ children }) => <FormTitle>{ children }</FormTitle>;
Posts.Input = ({ ...restProps }) => <FormInput { ...restProps }/>;

Posts.Row = ({ children, ...restProps }) => <Row { ...restProps }>{ children }</Row>
Posts.Column = ({ children }) => <Column>{ children }</Column>
Posts.Card = ({ children }) => <Card>{ children }</Card>


export default Posts;
