import React from "react";
import { Spinner, themeLoader } from "./loader.style";


function Loader({ dotsCount = 80, ...restProps }) {
	const spinnerDots = () => {
		const dots = [];
		
		for(let i = dotsCount; i; i--) {
			dots.push(<i key={ i }><b/></i>);
		}
		
		return dots;
	}
	
	themeLoader.particles = dotsCount;
	themeLoader.radius = dotsCount / 1.5;
	
	return <Spinner { ...restProps } themeLoader={ themeLoader }>
		{
			spinnerDots()
		}
	</Spinner>;
}


export default Loader
