import React from "react";
import { Button, ButtonContainer, Container, Count, User, UserContainer } from "./counter.style";


function Counter({ children, ...restProps }) {
	return <Container { ...restProps }>{ children }</Container>;
}

Counter.Count = function ({ children }) {
	return <Count>{ children }</Count>
}

Counter.ButtonContainer = function ({ children }) {
	return <ButtonContainer>{ children }</ButtonContainer>;
}

Counter.Button = function ({ children, ...restProps }) {
	return <Button { ...restProps }>{ children }</Button>;
}

Counter.UserContainer = function ({ children }) {
	return <UserContainer>{ children }</UserContainer>;
}

Counter.User = function ({ children, ...restProps }) {
	return <User { ...restProps }>{ children }</User>;
}



export default Counter;