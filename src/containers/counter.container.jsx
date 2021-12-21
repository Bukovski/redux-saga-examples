import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Counter } from "../components";
import { asyncDecrementCreator, asyncIncrementCreator } from "../store/counter/counter.action";
import { fetchUsers } from "../store/user/user.action";


const CounterContainer = () => {
	const dispatch = useDispatch();
	
	const count = useSelector(state => state.countReducer.count);
	const users = useSelector(state => state.userReducer.users);
	
	
	return (
		<Counter>
			<Counter.Count>{ count }</Counter.Count>
			
			<Counter.ButtonContainer>
				<Counter.Button onClick={ () => dispatch(asyncIncrementCreator()) }>Increment++</Counter.Button>
				<Counter.Button onClick={ () => dispatch(asyncDecrementCreator()) }>Decrement--</Counter.Button>
				<Counter.Button onClick={ () => dispatch(fetchUsers()) }>Get Users</Counter.Button>
			</Counter.ButtonContainer>
			
			<Counter.UserContainer>
				{ users.map(user =>
					<Counter.User key={ user.id }>{ user.name }</Counter.User>
				)}
			</Counter.UserContainer>
		</Counter>
	)
}


export default CounterContainer;
