import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import GuestList from './guestList';
import UserSearch from './userSearch';

export interface Users {
	id?: number;
	name: string;
	username?: string;
	email: string;
	address: {
		street: string;
		suite?: string;
		city: string;
		zipcode: string;
		geo?: {
			lat?: string;
			lng?: string;
		}
	},
	phone: string;
	website: string;
	company?: {
		name?: string;
		catchPhrase?: string;
		bs?: string
	}
}

export type TUserList = Users[]

const Index = () => {
	const [allUser, setAllUser] = useState<TUserList | never[]>([]);

	useEffect(() => {
		axios.get<TUserList>('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				console.log(response.data);
				setAllUser(response.data);
			});
	}, [])

	function newUser(param: TUserList) {
		setAllUser(param)
	}

	return (
		<>
			<GuestList allUser={allUser} newUser={newUser} />
			<UserSearch allUser={allUser} />
		</>
	)
}

ReactDOM.render(<Index />, document.getElementById("root"));
