import React, { createContext, useState } from "react";
import { Container, Reversed } from "./alerts.style";



function Alert({ children, ...restProps }) {
	const [ showAlert, setShowAlert ] = useState(true);
	
	
	return <Container
		onClick={ () => setShowAlert(!showAlert) }
		className={ (!showAlert) && "hide" }
		{ ...restProps }
		role="alert"
	>
		{ children }
	</Container>;
}

Alert.Error = function({ children }) {
	return <>
	  <Reversed className="reversedRight">
	    <span>&#9888;</span>
	  </Reversed>
		<Reversed className="reversedLeft">{ children }</Reversed>
	</>
}


export default Alert;
