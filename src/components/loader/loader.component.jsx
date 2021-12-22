import React from "react";
import { Spinner, themeLoader } from "./loader.style";


function Loader({ ...restProps }) {
	const spinnerDots = () => {
		const dots = [];
		
		for(let i = 100; i; i--) {
			dots.push(<i key={ i }><b/></i>);
		}
		
		return dots;
	}
	
	return <Spinner { ...restProps } themeLoader={ themeLoader }>
		{
			spinnerDots()
		}
	</Spinner>;
}


export default Loader
