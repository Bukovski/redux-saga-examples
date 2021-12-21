import React from 'react';
import { Counter } from "../components";


const CounterContainer = (props) => {
	return (
		<Counter>
			<Counter.Count>55</Counter.Count>
			
			<Counter.ButtonContainer>
				<Counter.Button>Increment++</Counter.Button>
				<Counter.Button>Decrement--</Counter.Button>
				<Counter.Button>Get Users</Counter.Button>
			</Counter.ButtonContainer>
			
			<Counter.UserContainer>
				<Counter.User>John Dou</Counter.User>
				<Counter.User>John Dou</Counter.User>
			</Counter.UserContainer>
		</Counter>
	)
}


export default CounterContainer;
