import styled from 'styled-components/macro';
import { css } from "styled-components";

export const themeLoader = {
	particles: 100, // has to match nodes in dom
	particleSize: 6,
	radius: 100,
	lapDuration: 3,
}


export function createCSS(themeLoader) {
	const { particles, radius, lapDuration } = themeLoader;
	
	let styles = '';
	
	for (let i = particles; i; i--) {
		const angle = (i / particles ) * 360;
		
		styles += `
	  i:nth-child(${ i }) {
	    transform:
	            rotate( ${ angle }deg )
	            translate3d( ${ radius }px, 0, 0 );
	
	    b {
	      animation-delay: ${ i * (lapDuration / ( particles - 2 )) }s;
	    }
	  }
     `
	}
	
	return css`${styles}`;
}

export const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;

  perspective: 200px;

  i {
    display: block;
    position: absolute;
    opacity: 1;

    b {
      display: block;
      width: ${ props => props.themeLoader.particleSize }px;
      height: ${ props => props.themeLoader.particleSize }px;
      border-radius: ${ props => props.themeLoader.particleSize }px;
      background: rgba(255,255,255,1);
      box-shadow: 0 0 14px rgba(255,255,255,1);

      animation-name: spin;
      animation-duration: ${ props => props.themeLoader.lapDuration }s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
    }
  }
	
  ${ props => createCSS(props.themeLoader) }

  @keyframes spin {
    0% {
      transform: scale(1);
    }
    15% {
      transform: translate(
              -${ props => props.themeLoader.particleSize / 2 }px,
              -${ props => props.themeLoader.particleSize / 2 }px
      ) scale(3);
    }
    50% {
      transform: scale(1);
    }
  }
`;