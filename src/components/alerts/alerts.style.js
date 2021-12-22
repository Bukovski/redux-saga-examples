import styled from 'styled-components/macro';


export const Container = styled.div`
  position: fixed;
	top: 15px;
  left: 50%;
  transform: translateX(-50%);
	
  width: auto;
  margin-bottom: 10px;
  text-align: center;

  visibility: visible;
  opacity: 1;
  transition: visibility 0s linear 0.33s, opacity 0.33s linear;

  &.hide {
    visibility: hidden;
    opacity: 0;
  }
`;

export const Reversed = styled.span`
  position: relative;
  display: inline-block;
  padding: 0.3em;
  margin-left: 0.8em;
  text-align: center;
  vertical-align: middle;
  line-height: 1;
  color: #fff;
  font-size: 15px;
  background-color:#ef5350;
	cursor: pointer;

  &:before, &:after {
    content: '';
    width: 0;
    height: 0;
    right: -0.8em;
    position: absolute;
    top: 0;
    border-top: 0.8em solid #ef5350;
  }
	
	&:after {
    top: auto;
    bottom: 0;
    border-top: none;
    border-bottom: 0.8em solid #ef5350;
  }

  &.reversedRight {
    width: 17px;
    border-radius: 5px 0 0 5px;
    animation: tilt 2s infinite;

    @keyframes tilt {
      0% {
        left: 0%;
      }
      50% {
        left: 9px;
      }
      100% {
        left: 0;
      }
    }

    &:before,
    &:after {
      border-right: 0.8em solid transparent;
      right: -0.8em;
    }
  }
	
	&.reversedLeft{
    margin-left: 15px;
    border-radius: 0 5px 5px 0;

    &:before,
    &:after {
      content: '';
      width: 0;
      height: 0;
      border-left: 0.8em solid transparent;
      left: -0.8em;
      position: absolute;
    }

    &:after {
      top: auto;
      bottom: 0;
      border-top: 0.8em solid #ef5350;
      border-bottom: none;
    }
		
    &:before {
      bottom: auto;
      top:0;
      border-bottom: 0.8em solid #ef5350;
      border-top: none;
    }
  }
`
