import React, { useEffect, useState } from "react";
import { Container, Reversed } from "./alerts.style";



function Alert({ children, delay = 3000, ...restProps }) {
	const [ visible, setVisible ] = useState(true);
	
	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(false);
		}, delay);
		
		return () => {
			clearTimeout(timer);
		};
	}, [ delay ]);
	
	return <Container
		onClick={ () => setVisible(!visible) }
		className={ (!visible) && "hide" }
		{ ...restProps }
		role="alert"
	>
		{ children }
	</Container>;
}

Alert.Error = function({ children }) {
	return <>
	  <Reversed className="reversedRight">
	    <span>&#10006;</span>
	  </Reversed>
		<Reversed className="reversedLeft">{ children }</Reversed>
	</>
}

Alert.Success = function({ children }) {
	return <>
		<Reversed className="reversedRight" messageColor="#30e860">
			<span>&#10004;</span>
		</Reversed>
		<Reversed className="reversedLeft" messageColor="#30e860">{ children }</Reversed>
	</>
}

Alert.Warning = function({ children }) {
	return <>
		<Reversed className="reversedRight" messageColor="#f6c606">
			<span>&#9888;</span>
		</Reversed>
		<Reversed className="reversedLeft" messageColor="#f6c606">{ children }</Reversed>
	</>
}


export default Alert;
